const express = require('express');
const router = express.Router();

let historicalPayouts = [
  { id: "PAY-DRG-0881", node: "Naivasha Central Node", operator: "Agent Omondi", amount: "Ksh 142,500", channel: "M-PESA B2C", status: "SETTLED", timestamp: "Today, 01:10" },
  { id: "PAY-DRG-0882", node: "Mai Mahiu Nexus", operator: "Agent Wanjiku", amount: "Ksh 96,800", channel: "M-PESA B2C", status: "PROCESSING", timestamp: "Today, 00:45" },
  { id: "PAY-DRG-0883", node: "Gilgil Regional Hub", operator: "Agent Mwangi", amount: "Ksh 210,400", channel: "EFT BANKING", status: "SETTLED", timestamp: "Yesterday, 17:30" }
];

router.get('/', (req, res) => {
  res.status(200).json(historicalPayouts);
});

module.exports = router;
