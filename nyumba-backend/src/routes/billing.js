const express = require('express');
const router = express.Router();

let invoices = [
  { id: "INV-888-01", target: "Naivasha Complex A", items: "Grid Optimization Matrix", total: "Ksh 35,000", status: "PAID" },
  { id: "INV-888-02", target: "Mai Mahiu Depot", items: "Telemetry License Renewal", total: "Ksh 12,500", status: "UNPAID" },
  { id: "INV-888-03", target: "Olkaria Outpost B", items: "Security Tunnel Auditing", total: "Ksh 64,200", status: "PAID" }
];

router.get('/', (req, res) => {
  res.status(200).json(invoices);
});

router.patch('/:id/toggle', (req, res) => {
  const { id } = req.params;
  const item = invoices.find(inv => inv.id === id);
  if (!item) return res.status(404).json({ error: "INVOICE_NOT_FOUND" });
  
  item.status = item.status === "PAID" ? "UNPAID" : "PAID";
  res.status(200).json(item);
});

module.exports = router;
