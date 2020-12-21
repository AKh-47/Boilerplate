const User = require("../models/user");
const bcrypt = require("bcrypt");
const mailer = require("../utils/mailer");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.registerHandler = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    const exisitngUser = await User.findOne({ email });

    if (exisitngUser) {
      return res.json({
        message: "User already Exists",
      });
    }

    const hashedPass = await bcrypt.hash(password, 10);

    let user = new User({
      name,
      email,
      password: hashedPass,
    });

    user = await user.save();

    const token = jwt.sign({ id: user._id }, process.env.SECRET);

    await mailer({
      from: "akhildoesdev@gmail.com",
      to: "akhildoesdev@gmail.com",
      subject: "Test",
      text: `http://localhost:1337/auth/validate/${token}`,
    });

    res.status(200).json({
      message: "User Created Succesfully",
    });
  } catch (err) {
    next(err);
  }
};

exports.loginHandler = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.json({
        message: "User does not exist",
      });
    }

    const check = await bcrypt.compare(password, user.password);

    if (!check) {
      return res.status(401).json({
        message: "Auth Failed",
      });
    }

    if (!user.verified) {
      return res.json({
        message: "User not Verified",
      });
    }

    const token = jwt.sign(
      { id: user._id, name: user.name, email: user.email },
      process.env.SECRET
    );

    res.status(200).send({
      token,
    });
  } catch (err) {
    next(err);
  }
};

exports.validationHandler = async (req, res) => {
  try {
    const { id } = jwt.verify(req.params.token, process.env.SECRET);
    const user = await User.findById(id);
    user.verified = true;
    user.save();
    res.send("Verified");
  } catch (err) {
    next(err);
  }
};
