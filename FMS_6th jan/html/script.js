async function sendOTP() {
    const phoneNumber = document.getElementById('phoneNumber').value;

    const response = await fetch('http://localhost:3000/sendOTP', { // Update URL
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ phoneNumber })
    });

    const data = await response.json();
    alert(data.message);
}



async function verifyOTP() {
    const phoneNumber= document.getElementById('phoneNumber').value;
    //const otp = document.getElementById('otp').value;
    const enteredOtp = document.getElementById('otp').value;
    const response = await fetch('http://localhost:3000/verifyOTP', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ phoneNumber, enteredOtp })
    });
     // Log the response
    //alert((await response.json()).message);

   
    //alert((await response.json()).message);



      const data = await response.json();
      console.log('Response:', data);

      if (data.success) {
        // OTP verified successfully, redirect to feedback_form.html
        window.location.href = '../html/feedback_form2.html';
      } else {
        // Handle OTP verification failure
        alert(data.message);
      }
    } 
 
