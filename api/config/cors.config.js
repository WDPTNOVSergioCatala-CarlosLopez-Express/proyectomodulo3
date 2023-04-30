const cors = require('cors');

module.exports = cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:3000' || 'http://95.16.194.18:3000' || 'http://194.49.10.138:3000'
})