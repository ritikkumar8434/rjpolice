const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const cors = require('cors'); // Import CORS middleware

const app = express();
const port = 3000;
var otpMap={};

app.use(cors()); // Use CORS middleware
app.use(bodyParser.json());

// ... (rest of your code

// Fast2SMS setup
const apiKey = '0MjFi4YnJl2hdX6HSBkvwb5ERKeNTc9yLWDIOpgQ7m38UPrzAfo1s7Mi2NZOEhdGznaKWJ4pvjf83YLS';

// Generate OTP and send to the user's phone number
app.post('/sendOTP', async (req, res) => {
  console.log('Received request to send OTP:', req.body);
  const { phoneNumber } = req.body;

  const otp = Math.floor(1000 + Math.random() * 9000); // Generate a 4-digit OTP
  otpMap[phoneNumber] = otp;

  
  // app.use(bodyParser.urlencoded({extended:true}));  //urlencoded encode the data
  // app.use(express.static('html'));

  // app.get('/',(req,res)=>{       //forward slash
  //   res.sendFile(__dirname + '/html/feedback.html')   //_dirname is constructor
// });

  try {
    const response = await axios.get(`https://www.fast2sms.com/dev/bulkV2?authorization=${apiKey}&variables_values=${otp}&language=english&route=otp&numbers=${phoneNumber}`);
    
    if (response.data.return === true) {
      res.send({ success: true, message: 'OTP sent successfully!' });
    } else {
      res.status(500).send({ success: false, message: 'Failed to send OTP.' });
    }
  } catch (error) {
    res.status(500).send({ success: false, message: 'Failed to send OTP.', error: error.message });
  }
});

// Verify OTP
app.post('/verifyOTP', (req, res) => {
  const { phoneNumber, enteredOtp } = req.body;

  const otp=otpMap[phoneNumber];

  if (otp && otp.toString() === enteredOtp) {
    res.send({ success: true, message: 'OTP verified successfully!' });
  } else {
    res.send({ success: false, message: 'Invalid OTP.' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:3000${port}`);
});
