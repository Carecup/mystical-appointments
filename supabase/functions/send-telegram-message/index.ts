import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const telegramBotToken = Deno.env.get('TELEGRAM_BOT_TOKEN')
const telegramChatId = Deno.env.get('TELEGRAM_CHAT_ID')

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const { name, phone, dateTime, service } = await req.json()

    const message = `
🔮 Новая заявка на консультацию!

Услуга: ${service.title}
Стоимость: ${service.price}
Длительность: ${service.duration}

👤 Клиент:
Имя: ${name}
Телефон: ${phone}
Желаемая дата и время: ${dateTime}
`

    const response = await fetch(`https://api.telegram.org/bot${telegramBotToken}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: telegramChatId,
        text: message,
        parse_mode: 'HTML',
      }),
    })

    const result = await response.json()

    if (!response.ok) {
      throw new Error(result.description || 'Failed to send Telegram message')
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  } catch (error) {
    console.error('Error in send-telegram-message function:', error)
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }
})