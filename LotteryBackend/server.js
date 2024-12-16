const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3001;

// Middleware
app.use(cors({
  origin: ['http://localhost:5173'], // Allow only your frontend
  methods: ['GET', 'POST'], // Specify allowed HTTP methods
  credentials: true // If using cookies or authorization headers
})); // Allow cross-origin requests

app.use(express.json()); // Parse JSON request body

// Mock winning numbers
const winningNumbers = ["123456", "654321", "111222","225175"];

// API endpoint to check the ticket
app.post("/check-lottery", (req, res) => {
 
  const { ticketNumber } = req.body;
  if (winningNumbers.includes(ticketNumber)) {
    res.json({ success: true, message: "🎉 Congratulations! You won!" });
  } else {
    res.json({ success: false, message: "Sorry, better luck next time!" });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
  