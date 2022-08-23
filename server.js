const express = require('express')
const app = express()
const port = 3000
const user = require('./models/userModel.js');
var bodyParser = require('body-parser')
const cookieParser = require("cookie-parser");
const session = require('express-session');

app.use(session({secret: 'ssshhhhh'}));

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
app.use(bodyParser.json())

user.sync({ force: true });
console.log("All models were synchronized successfully.");

app.use('/', require('./routes/index_routes'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})