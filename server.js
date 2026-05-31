const http = require("node:http");

const port = Number(process.env.PORT || 3000);
const startedAt = new Date().toISOString();

const server = http.createServer((req, res) => {
  const payload = {
    app: "nexotest",
    ok: true,
    path: req.url,
    method: req.method,
    startedAt,
    now: new Date().toISOString(),
    env: {
      NODE_ENV: process.env.NODE_ENV || "development",
      API_URL: process.env.API_URL || null
    }
  };

  res.writeHead(200, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store"
  });
  res.end(JSON.stringify(payload, null, 2));
});

server.listen(port, "0.0.0.0", () => {
  console.log(`nexotest listening on 0.0.0.0:${port}`);
});
