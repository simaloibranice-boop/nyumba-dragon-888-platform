const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.use(express.json());
app.use(morgan('dev'));

app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: "ONLINE",
    timestamp: new Date().toISOString(),
    service: "NYUMBA_DRAGON_888_CORE_API",
    engine_epoch: "2026-v4.0"
  });
});

app.use('/api/telemetry', require('./routes/telemetry'));
app.use('/api/properties', require('./routes/properties'));
app.use('/api/billing', require('./routes/billing'));
app.use('/api/payouts', require('./routes/payouts'));
app.use('/api/security', require('./routes/security'));

app.use((req, res) => {
  res.status(404).json({ error: `RESOURCE_NOT_FOUND: Route ${req.originalUrl} does not map to any active controller.` });
});

app.listen(PORT, () => {
  console.log(`\n======================================================`);
  console.log(`🚀 NYUMBA DRAGON 888 CORE SERVER INITIALIZED`);
  console.log(`➔ SERVICE RUNNING ON: http://localhost:${PORT}`);
  console.log(`➔ HEALTH CHECK AT:   http://localhost:${PORT}/api/health`);
  console.log(`======================================================\n`);
});
