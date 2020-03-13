'use strict';
module.exports =(sequelize, DataTypes)=>{
	var Lead = sequelize.define('Lead',{
		id:{
			type: DataTypes.UUID,
			defaultValue : DataTypes.UUIDV4,
			allowNull : true,
			primaryKey : true
		},
		email:{
			type: DataTypes.STRING,
			allowNull: true,

		},

	});
	return Lead;
};