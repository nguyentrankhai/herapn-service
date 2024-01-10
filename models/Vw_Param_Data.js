
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Vw_Param_Data = sequelize.define('vw_param_data', {
    param_idkey: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    param_code: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    param_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    param_frvalue: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    param_tovalue: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    order_num: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    record_stat: {
        type: DataTypes.STRING,
        allowNull: true,
    },
}, {
    tableName: 'vw_param_data', // Tên bảng trong cơ sở dữ liệu
    timestamps: false, // Không sử dụng timestamps
});

module.exports = Vw_Param_Data;