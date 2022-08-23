const { Sequelize } = require('sequelize');

const db = new Sequelize(
  "testdb0",
  "postgres",
  "postgres",
  {
    host: "localhost",
    dialect: 'postgres',
    
    pool: {
      max: 5,
      min: 0,
      acquire: 100000000,
      idle: 20000000
    }
  }
);

module.exports = db;


// module.exports = {
//     HOST: "localhost",
//     USER: "postgres",
//     PASSWORD: "postgres",
//     DB: "testdb0",
//     dialect: "postgres",
//     pool: {
//       max: 5,
//       min: 0,
//       acquire: 300000,
//       idle: 1000000
//     }
//   };
