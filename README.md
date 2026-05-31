# nexotest

Minimal Node.js app for testing NexoCloud deployments.

## Local run

```powershell
docker compose up -d --build
```

The app listens on port `3000` inside the container. NexoCloud detects this from
the Dockerfile `EXPOSE 3000` line.

## NexoCloud project settings

- Type: `React SPA` or `Unknown`
- Repository URL: the GitHub URL for this repository
- Branch: `main`
- Domain: `test.localhost`
- ENV examples:
  - `NODE_ENV=production`
  - `API_URL=http://localhost:8000`
