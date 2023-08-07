module.exports = (Sequelize,sequelize)=>{
    const model = sequelize.define(
        "users",
        {
            id:{
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            Name:{
                type:Sequelize.STRING,
                allowNull: false,
            },
            Mobile:{
                type:Sequelize.STRING,
                allowNull: false
            },
            Email:{
                type:Sequelize.STRING,
                allowNull: false,
                unique : true
            },
            Password:{
                type: Sequelize.STRING,
                allowNull: false
            }
        },
        {
            freezeTableName: true,
            timestamps : false,
        }
    );
    return model;
};