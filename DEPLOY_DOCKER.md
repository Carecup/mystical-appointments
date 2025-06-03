# Deploying mystical-appointments with Docker Compose

This project ships with a `docker-compose.yml` that sets up the application and a
PostgreSQL database. Everything runs locally in containers.

## Build & Run

From the project root execute:

```sh
docker compose up -d
```

Copy `.env.example` to `.env` and set the `TELEGRAM_BOT_TOKEN` and
`TELEGRAM_CHAT_ID` values. The site will be available on port `80`.
Point `fastpanel36645.hostkey.in` to your server's IP address and open it in the browser.
