const Sequelize = require("sequelize");
const sequelize = new Sequelize('sqlite::memory:');

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);

module.exports = db;
