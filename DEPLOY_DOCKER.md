# Deploying mystical-appointments with Docker Compose

This project ships with a `docker-compose.yml` that sets up the application, a local
Supabase instance and PostgreSQL. Everything runs locally in containers.

## Build & Run

From the project root execute:

```sh
docker compose up -d
```

The site will be available on port `80`. Supabase is exposed on port `8000`.
Point `fastpanel36645.hostkey.in` to your server's IP address and open it in the browser.
