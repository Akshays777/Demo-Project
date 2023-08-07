const Sequelize = require('sequelize');
const sequelize = new Sequelize('ap','root','',{host:'localhost',dialect:'mysql'});

sequelize.authenticate().then(()=>{
    console.log("CONNECTED WITH DB")
}).catch(err=>{
    console.log("UNABLE TO CONNECT WITH DB",err);
})

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.users = require('./users.model')(Sequelize,sequelize);
module.exports = db;