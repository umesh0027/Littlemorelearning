exports.passwordUpdated = (email, name) => {
	return `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Password Update Confirmation</title>
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

    .highlight {
      font-weight: bold;
      color: #FFD60A;
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
    <div class="message">Password Update Confirmation</div>

    <!-- Email Body -->
    <div class="body">
      <p>Hi ${name},</p>
      <p>We wanted to let you know that your password for the email <span class="highlight">${email}</span> has been successfully updated.</p>
      
      <p>If you did not initiate this password change, please contact us immediately to secure your account.</p>
    </div>

    <!-- Support Info -->
    <div class="support">
      If you have any questions or need assistance, please don't hesitate to reach out to us at <a
        href="mailto:littlemorelearning@gmail.com">littlemorelearning@gmail.com</a>. Our team is ready to assist you.
    </div>

    <!-- Footer -->
    <div class="footer">
      &copy; ${new Date().getFullYear()} Little More Learning. All rights reserved. <br>
      You are receiving this email because you requested a password change for your account.
    </div>
  </div>
</body>

</html>`;
};
