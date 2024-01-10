const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Sttb_Sale_Item_Orderdtl = sequelize.define('sttb_sale_item_orderdtl', {
    order_idkey: { type: DataTypes.STRING },
    order_dtlidkey: { type: DataTypes.STRING, primaryKey: true },
    recdetail_idkey: { type: DataTypes.STRING },
    itemdetail_idkey: { type: DataTypes.STRING },
    orginal_price: { type: DataTypes.DECIMAL },
    Final_price: { type: DataTypes.DECIMAL },
    Itemcolor: { type: DataTypes.STRING },
    itemsize: { type: DataTypes.STRING },
    main_image: { type: DataTypes.STRING },
    itemquantity: { type: DataTypes.DECIMAL },
    sumamount: { type: DataTypes.DECIMAL },
}, {
    tableName: 'Sttb_Sale_Item_Orderdtl', // Xác định tên của view hoặc bảng
    timestamps: false, // Không sử dụng timestamps cho views
});

module.exports = Sttb_Sale_Item_Orderdtl;





