const nodemailer = require("nodemailer");
require("dotenv").config();

module.exports = async (mailOptions) => {
  return new Promise((resolve, reject) => {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS,
      },
    });

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) reject(new Error("Coudn't Send Mail"));
      else resolve(info);
    });
  });
};
