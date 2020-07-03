'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Usuario = sequelize.define('Usuario',{
		id: {
			field: 'idUsu',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		login: {
			field: 'loginUsu',
			type: DataTypes.STRING,
			allowNull: false
		},		
		email: {
			field: 'email',
			type: DataTypes.STRING,
			allowNull: false
		},
		telefone: {
			field: 'tel',
			type: DataTypes.STRING,
			allowNull: false
		},
		senha: {
			field: 'senhaUsu',
			type: DataTypes.STRING,
			allowNull: false
		}
	}, 
	{
		tableName: 'login', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Usuario;
};
