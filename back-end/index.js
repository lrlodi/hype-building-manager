const httpServer = require('./app');

const PORT = 3001;

httpServer.listen(PORT, () => console.log(`api listening on port:${PORT}`));
