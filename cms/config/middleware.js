const prodOrigins = [
  "http://217.21.78.84",
  "http://server.bdmis.org",
  "https://server.bdmis.org",
  "https://cms.bdmis.org",
  "http://cms.bdmis.org",
  "https://bdmis.org",
  "https://www.bdmis.org",
  "https://portal.bdmis.org",
];
const devOrigins = [
  "http://217.21.78.84",
  "https://cms.bdmis.org",
  "http://cms.bdmis.org",
  "https://bdmis.org",
  "https://www.bdmis.org",
  "http://localhost:3000",
  "http://localhost:3001",
  "http://localhost:8000",
  "http://localhost:8001",
  "http://localhost",
];

module.exports = ({ env }) => ({
  settings: {
    cors: {
      enable: true,
      origin: process.env.NODE_ENV === "production" ? prodOrigins : devOrigins,
    },
  },
});
