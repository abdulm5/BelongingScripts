# Belonging Scripts (React + Vite)

This app uses React + Vite for the frontend and Vercel Functions for server-side geolocation logging.

## Local development

```bash
npm install
npm run dev
```

## Geolocation logging setup (Vercel)

1. Create a Vercel Postgres database and connect it to this project.
2. Run the SQL migration in [`sql/001_create_visit_events.sql`](sql/001_create_visit_events.sql).
3. Configure environment variables:
   - `VISITOR_HASH_SALT` (required)
   - `VISIT_RETENTION_DAYS` (optional, defaults to `30`)
4. Deploy to Vercel. Geo headers are only populated on deployed requests.

### API endpoints

- `GET /api/where`: returns request geolocation payload.
- `POST /api/visit`: stores one anonymous visit event.
- `GET /api/cron/prune-visits`: cron target for retention cleanup.
