const User = require('../config/User');


//get
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email_id: email, password:password});

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      message: "Login successful",
      user: {
        username: user.username,
        email: user.email_id,
        picture: "https://cdn-icons-png.flaticon.com/512/847/847969.png",
      },
    });

  } catch (err) {
    res.status(500).json({ message: "Login failed", error: err.message });
  }
};
// POST endpoint
exports.sendData = async (req, res) => {
  try {
    const { username, email_id, password } = req.body;

    const user = new User({
      username,
      email_id,
      password
    });

    const savedUser = await user.save();

    res.status(201).send({
      message: "User saved successfully!",
      user: savedUser
    });

  } catch (error) {
    console.error("Error saving user:", error.message);
    res.status(500).send({
      message: "Failed to save user",
      error: error.message
    });
  }
};
