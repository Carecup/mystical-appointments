import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import pkg from 'pg';
import dotenv from 'dotenv';

const { Pool } = pkg;

const app = express();
const PORT = process.env.PORT || 3000;

// Load environment variables from a .env file when running locally
dotenv.config();

const pool = new Pool({
  host: process.env.DB_HOST || 'db',
  port: parseInt(process.env.DB_PORT || '5432', 10),
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
  database: process.env.DB_NAME || 'postgres',
});

app.use(express.json());

app.get('/api/reviews', async (_req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM reviews ORDER BY created_at DESC');
    res.json(rows);
  } catch (err) {
    console.error('Error fetching reviews:', err);
    res.status(500).json({ error: 'Failed to fetch reviews' });
  }
});

app.post('/api/reviews', async (req, res) => {
  const { name, content, rating } = req.body;
  try {
    await pool.query(
      'INSERT INTO reviews (name, content, rating) VALUES ($1, $2, $3)',
      [name, content, rating]
    );
    res.json({ success: true });
  } catch (err) {
    console.error('Error inserting review:', err);
    res.status(500).json({ error: 'Failed to add review' });
  }
});

app.post('/api/send-telegram-message', async (req, res) => {
  const { name, phone, dateTime, service } = req.body;
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    return res.status(500).json({ error: 'Telegram credentials not set' });
  }

  const message = `🔮 Новая заявка на консультацию!

Услуга: ${service.title}
Стоимость: ${service.price}
Длительность: ${service.duration}

👤 Клиент:
Имя: ${name}
Телефон: ${phone}
Желаемая дата и время: ${dateTime}`;

  try {
    const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text: message, parse_mode: 'HTML' }),
    });
    const data = await response.json();
    if (!response.ok || data.ok === false) {
      console.error('Telegram API response:', data);
      return res.status(500).json({ error: data.description || 'Telegram API error' });
    }
    res.json({ success: true });
  } catch (err) {
    console.error('Error sending telegram message:', err);
    res.status(500).json({ error: 'Failed to send message' });
  }
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// Serve static files from the build output one directory up
app.use(express.static(path.join(__dirname, '../dist')));

app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, '../dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
