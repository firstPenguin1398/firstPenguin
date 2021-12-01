const initModels = require('./models/init-models');
const { Op, Sequelize } = require('sequelize');
const config = require('./config/config.json');
const sequelize = new Sequelize(
    config.development.database,
    config.development.username,
    config.development.password,
    config.development
);
const models = initModels(sequelize);

module.exports = {
    models,
    Op,
}