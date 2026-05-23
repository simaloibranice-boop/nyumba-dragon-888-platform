const express = require('express');
const router = express.Router();

router.get('/metrics', (req, res) => {
  const totalValueKsh = 12480900;
  const liveVolatility = (Math.random() * 0.5).toFixed(2);
  
  res.status(200).json([
    { label: 'DRAGON_POOL_MULTIPLIER', value: `888.${Math.floor(Math.random() * 9)}x`, change: 'MAXIMUM_YIELD', color: '#ffcc00' },
    { label: 'TOTAL_NYUMBA_ASSET_VALUE', value: `Ksh ${(totalValueKsh + Math.floor(Math.random() * 5000)).toLocaleString()}`, change: `+${liveVolatility}%`, color: '#10b981' },
    { label: 'ACTIVE_MATRIX_CHANNELS', value: `${(8800 + Math.floor(Math.random() * 150)).toLocaleString()} /sec`, change: 'NOMINAL', color: '#00e5ff' },
    { label: 'FORTUNE_SHIELD_INTEGRITY', value: '99.99%', change: 'SECURE', color: '#10b981' }
  ]);
});

module.exports = router;
