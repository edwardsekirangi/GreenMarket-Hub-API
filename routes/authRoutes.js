const express = require("express");
const passport = require("passport");
const router = express.Router();

// Start GitHub login
router.get("/github", passport.authenticate("github", { scope: ["user:email"] }));

// Callback after GitHub login
router.get(
  "/github/callback",
  passport.authenticate("github", { failureRedirect: "/" }),
  (req, res) => {
    res.json({ message: "Logged in successfully", user: req.user });
  }
);

// Logout
router.get("/logout", (req, res) => {
  req.logout(() => {
    res.json({ message: "Logged out" });
  });
});

module.exports = router;
