const mongoose = require('mongoose');

// replace your database connection string here
<<<<<<< HEAD
mongoose.connect(process.env.DATABASE_URL ,{
=======
mongoose.connect('mongodb://localhost/test' ,{
>>>>>>> 092a57601ba5186e593d07fdd554c3283a87343f
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

const db = mongoose.connection;

// database connection event
db.on('connected', function () {
  console.log(`Mongoose connected to: ${db.host}:${db.port}`);
});
