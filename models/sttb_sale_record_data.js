const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Sttb_Sale_Record_Data = sequelize.define('Sttb_Sale_Record_Data', {
    dataidkey: {
        type: DataTypes.STRING(100),
        primaryKey: true,
        allowNull: false,
    },
    itemdetail_idkey: {
        type: DataTypes.STRING(100),
        charset: 'utf8',
        allowNull: true,
    },
    orginal_price: {
        type: DataTypes.DECIMAL,
        allowNull: true,
    },
    Final_price: {
        type: DataTypes.DECIMAL,
        allowNull: true,
    },
    Itemcolor: {
        type: DataTypes.STRING(100),
        charset: 'utf8',
        allowNull: true,
    },
    itemsize: {
        type: DataTypes.STRING(100),
        charset: 'utf8',
        allowNull: true,
    },
    main_image: {
        type: DataTypes.STRING(255),
        charset: 'utf8',
        allowNull: true,
    },
    itemquantity: {
        type: DataTypes.DECIMAL,
        allowNull: true,
    },
    sumamount: {
        type: DataTypes.DECIMAL,
        allowNull: true,
    },
    date_order: {
        type: DataTypes.DATE,
        allowNull: true,
    },
}, {
    tableName: 'sttb_sale_record_data', // Xác định tên của view hoặc bảng
    timestamps: false, // Không sử dụng timestamps cho views
});

module.exports = Sttb_Sale_Record_Data;