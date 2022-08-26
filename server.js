const express = require('express')
const app = express()
const port = 3000
const user = require('./models/userModel.js');
const post = require('./models/postModel.js');
const comment = require('./models/commentModel.js');

post.hasMany(comment, { foreignKey: 'postId' });
comment.belongsTo(post, { foreignKey: 'postId' });

app.use(express.json());
app.use(express.urlencoded());
var bodyParser = require('body-parser');
const sequelize = require('sequelize');
const db = require('./config/database');
// const cookieParser = require("cookie-parser");
// const session = require('express-session');

// app.use(session({secret: 'ssshhhhh'}));

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
app.use(bodyParser.json())
try {
    db.authenticate()
    .then(async () => {
        await user.sync({ force: true });
        await post.sync({ force: true });
        await comment.sync({ force: true });

    })

    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }


console.log("All models were synchronized successfully.");

app.use('/', require('./routes/index.routes'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})