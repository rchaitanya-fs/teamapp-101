const http = require('http');
const os = require('os');

const port = process.env.PORT || 3000;
const version = process.env.APP_VERSION || 'dev';

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');

  if (req.url === '/health') {
    res.writeHead(200);
    res.end(JSON.stringify({ status: 'ok' }));
    return;
  }

  res.writeHead(200);
  res.end(JSON.stringify({
    message: 'Hello from teamapp-101!',
    version,
    host: os.hostname(),
  }));
});

server.listen(port, '0.0.0.0', () => {
  console.log(`teamapp-101 (${version}) listening on http://0.0.0.0:${port}`);
});
