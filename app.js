const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const nodeMailer = require('nodemailer');

//Connect to DB
const config = require('./config/database');
mongoose.connect(config.database, { useNewUrlParser: true }).then(
  () => {
    console.log('Connected to database');
  },
  error => {
    console.log('err', err);
  }
);

//Start app
const app = express();
app.use(cors());
app.use(bodyParser.json());

/*app.get('/', (req, res) => {
    res.send('Invalid Endpoint');
});*/

//Set Up Routes
const works = require('./routes/works');
const edus = require('./routes/edus');
const skills = require('./routes/skills');
const others = require('./routes/others');
const contactform = require('./routes/contacts');
app.use('/works', works);
app.use('/edus', edus);
app.use('/skills', skills);
app.use('/others', others);
app.use('/contactform', contactform);

//Static Folder
app.use(express.static(path.join(__dirname, 'public')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

//Start Server
const port = process.env.PORT || 8081;
app.listen(port, () => {
  console.log('Server started on port: ' + port);
});
