const { model } = require("mongoose");
const Ticket = require("../models/Ticket");

//check if ticket is winner
const checkLottery = async(req,res)=>{
    const {ticketNumber}= req.body;

    try{
        const ticket = await  Ticket.findOne({ ticketNumber});

        if(ticket && ticket.isWinner){
            return res.json({ success:true, message: "🎉 Congratulations! You won!"});
        }
          res.json({success:false, message: "Sorry, better luck next time!" });
        } catch (error){
            res.status(500).json({success: false, message:"server error"});

        }
    }

module.exports = { checkLottery}