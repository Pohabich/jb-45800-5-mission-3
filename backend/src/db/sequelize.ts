import { Sequelize } from "sequelize-typescript";
import config from 'config'
import Group from "../models/Group";
import Meeting from "../models/Meeting";

const sequelize = new Sequelize({
    dialect: 'mysql',
    models: [Group, Meeting],
    logging: console.log,
    ...config.get('db')
})

console.log(`connected to database on `, config.get('db'))

export default sequelize