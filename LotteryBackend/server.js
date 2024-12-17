const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const lotteryRoutes = require("./routes/lotteryRoutes");


const app = express();
const PORT = 3001;


//connect to mongoDB
connectDB();

// Middleware
app.use(cors({
  origin: ['http://localhost:5173'], // Allow only your frontend
  methods: ['GET', 'POST'], // Specify allowed HTTP methods
  credentials: true // If using cookies or authorization headers
})); // Allow cross-origin requests

app.use(express.json()); // Parse JSON request body

//Routes
app.use("/api", lotteryRoutes);

//start server
app.listen(PORT, ()=>{
  console.log(`Backend server running on http://localhost:${PORT}`);
})

// Mock winning numbers
const winningNumbers = ["123456", "654321", "111222","225175"];



// // API endpoint to check the ticket
// app.post("/check-lottery", (req, res) => {
 
//   const { ticketNumber } = req.body;
//   if (winningNumbers.includes(ticketNumber)) {
//     res.json({ success: true, message: "🎉 Congratulations! You won!" });
//   } else {
//     res.json({ success: false, message: "Sorry, better luck next time!" });
//   }
// });

// // Start server
// app.listen(PORT, () => {
//   console.log(`Backend server running on http://localhost:${PORT}`);
// });
  