const express = require('express');
const router = express.Router();
const db = require('../config/db');

let mockProperties = [
  { id: "NODE-088-A", title: "Naivasha Luxury Complex", cost: "Ksh 4,500,000", value: 4500000, category: "LUXURY_SUITE", status: "VERIFIED" }, 
  { id: "NODE-088-B", title: "Mai Mahiu Logistics Depot", cost: "Ksh 5,800,000", value: 5800000, category: "COMMERCIAL", status: "VERIFIED" }, 
  { id: "NODE-088-C", title: "Olkaria Energy Outpost", cost: "Ksh 2,180,900", value: 2180900, category: "INFRASTRUCTURE", status: "PENDING" }
];

// Fetch all household asset nodes
router.get('/', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM properties ORDER BY id DESC').catch(() => null);
    if (result && result.rows.length > 0) {
      return res.status(200).json(result.rows);
    }
    res.status(200).json(mockProperties);
  } catch (err) {
    res.status(500).json({ error: "DATABASE_READ_ERROR", details: err.message });
  }
});

// Commit new asset node to ledger context
router.post('/', async (req, res) => {
  const { title, cost, category } = req.body;
  if (!title || !cost || !category) {
    return res.status(400).json({ error: "VALIDATION_FAILED: Missing title, cost, or category parameters." });
  }

  const cleanNum = parseInt(cost.toString().replace(/[^0-9]/g, '')) || 0;
  const newAsset = {
    id: `NODE-088-${Math.floor(100 + Math.random() * 900)}`,
    title,
    cost: `Ksh ${cleanNum.toLocaleString()}`,
    value: cleanNum,
    category,
    status: "PENDING"
  };

  mockProperties.unshift(newAsset);

  await db.query(
    'INSERT INTO properties (node_id, title, cost, category, status) VALUES ($1, $2, $3, $4, $5)',
    [newAsset.id, newAsset.title, newAsset.cost, newAsset.category, newAsset.status]
  ).catch(() => console.log('➔ SYSTEM NOTE: Postgres offline. Saved node to active memory vault.'));

  res.status(201).json(newAsset);
});

module.exports = router;
