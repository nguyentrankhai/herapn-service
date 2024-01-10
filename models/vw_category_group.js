// models/Product.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Vw_Category_Group = sequelize.define('vw_category_group', {
    category_code: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true, // Không sử dụng cột này làm primary key
    },
    category_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    tableName: 'vw_category_group', // Xác định tên của view hoặc bảng
    timestamps: false, // Không sử dụng timestamps cho views
});

module.exports = Vw_Category_Group;
