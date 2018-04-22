var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    User = require('./api/models/userModel'),
    Chain = require('./api/models/chainModel'),
    ChainPicture = require('./api/models/chainPictureModel'),
    bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/appdb');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(port);

var userRoutes = require('./api/routes/userRoutes');
var chainRoutes = require('./api/routes/chainRoutes');
userRoutes(app);
chainRoutes(app);

app.use(function(req, res) {
  res.status(404).send({message: req.originalUrl + ' not found'})
});
