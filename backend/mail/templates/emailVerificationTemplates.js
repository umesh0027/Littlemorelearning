const otpTemplate = (otp) => {
	return `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>OTP Verification Email</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      background-color: #f4f4f4;
      font-family: Arial, sans-serif;
    }

    .container {
      max-width: 600px;
      margin: 20px auto;
      background-color: #ffffff;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      text-align: center;
    }

    .logo {
      max-width: 180px;
      margin-bottom: 20px;
    }

    .message {
      font-size: 22px;
      font-weight: bold;
      color: #333333;
      margin-bottom: 10px;
    }

    .body {
      font-size: 16px;
      color: #555555;
      line-height: 1.5;
      margin-bottom: 20px;
    }

    .cta {
      display: inline-block;
      padding: 12px 25px;
      background-color: #FFD60A;
      color: #000000;
      text-decoration: none;
      font-size: 18px;
      font-weight: bold;
      border-radius: 5px;
      margin-top: 20px;
      transition: background-color 0.3s ease;
    }

    .cta:hover {
      background-color: #e4b500;
    }

    .highlight {
      font-size: 28px;
      color: #FFD60A;
      font-weight: bold;
      margin: 20px 0;
    }

    .support {
      font-size: 14px;
      color: #888888;
      margin-top: 20px;
    }

    .footer {
      margin-top: 30px;
      font-size: 12px;
      color: #888888;
    }

    /* Responsive Styles */
    @media (max-width: 600px) {
      .container {
        padding: 15px;
      }

      .cta {
        padding: 10px 20px;
        font-size: 16px;
      }

      .message {
        font-size: 20px;
      }

      .body {
        font-size: 14px;
      }
    }
  </style>
</head>

<body>
  <div class="container">
    <!-- Logo -->
    <a href="#">
      <img class="logo" src="" alt="Little More Learning">
    </a>
    
    <!-- Message -->
    <div class="message">OTP Verification Email</div>
    
    <!-- Email Body -->
    <div class="body">
      <p>Dear User,</p>
      <p>Thank you for registering with <strong>Little More Learning</strong>. We're excited to have you join our community of learners!</p>
      
      <p>To complete your registration, please use the following OTP (One-Time Password) to verify your account:</p>
      
      <h2 class="highlight">${otp}</h2>
      
      <p>This OTP is valid for <strong>5 minutes</strong>. For security reasons, if you didn't request this verification, you can safely ignore this email.</p>
      
      <p>Once your account is successfully verified, you'll have full access to all the features of our platform and start learning with us!</p>
    </div>

    <!-- Call to Action Button -->
    <a href="https://littlemorelearning.vercel.app//verify-email/:id" class="cta">Verify Your Account</a>

    <!-- Support Info -->
    <div class="support">
      If you need any assistance, please don't hesitate to reach out to us at <a href="mailto:littlemorelearning@gmail.com">littlemorelearning@gmail.com</a>. Our support team is here to help you!
    </div>

    <!-- Footer -->
    <div class="footer">
      &copy; ${new Date().getFullYear()} Little More Learning. All rights reserved. <br>
      You are receiving this email because you signed up for an account on our platform.
    </div>
  </div>
</body>

</html>
`;
};
module.exports = otpTemplate;



