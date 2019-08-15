const express = require('express');
const router = express.Router();
const sender = require('../models/contact');

router.post('/', (req, res, next) => {
  const data = req.body;

  sender.sendEmail(data, (err, info) => {
    if (err) throw err;
    else {
      return res.json({ success: true, info });
    }
  });
});

module.exports = router;
