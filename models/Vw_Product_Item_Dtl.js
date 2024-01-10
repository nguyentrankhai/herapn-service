const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Vw_Product_Item_Dtl = sequelize.define('Vw_Product_Item_Dtl', {
    itemmas_idkey: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    masanpham: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    tensanpham: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    item_description: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    danhmucsp: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    giasanpham: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true,
    },
    kichthuoc: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    hinhdaidien: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    mau: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    duocgiamgia: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    hangmoi: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    ngaycapnhat: {
        type: DataTypes.DATE,
        allowNull: true,
    },
}, {
    tableName: 'vw_product_item_dtl', // Tên bảng trong cơ sở dữ liệu
    timestamps: false, // Không sử dụng timestamps
});

module.exports = Vw_Product_Item_Dtl;
