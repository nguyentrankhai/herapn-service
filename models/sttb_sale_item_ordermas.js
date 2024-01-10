const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Sttb_Sale_Item_Ordermas = sequelize.define('sttb_sale_item_ordermas', {
    order_idkey: { type: DataTypes.STRING, primaryKey: true },
    order_code: { type: DataTypes.STRING },
    date_order: { type: DataTypes.DATE },
    totalquantity: { type: DataTypes.DECIMAL },
    totalamount: { type: DataTypes.DECIMAL },
    transport_amt: { type: DataTypes.DECIMAL },
    final_amount: { type: DataTypes.DECIMAL },
    customer_name: { type: DataTypes.STRING },
    phone_number: { type: DataTypes.STRING },
    customer_email: { type: DataTypes.STRING },
    province_code: { type: DataTypes.STRING },
    province_name: { type: DataTypes.STRING },
    district_code: { type: DataTypes.STRING },
    district_name: { type: DataTypes.STRING },
    Address_desc: { type: DataTypes.STRING },
    Address_type: { type: DataTypes.STRING },
    isdeliver: { type: DataTypes.STRING },
    isprocess: { type: DataTypes.STRING },
    ispayment: { type: DataTypes.STRING },
    date_payment: { type: DataTypes.DATE },
    discount_amt: { type: DataTypes.DECIMAL },
}, {
    tableName: 'sttb_sale_item_ordermas', // Xác định tên của view hoặc bảng
    timestamps: false, // Không sử dụng timestamps cho views
});

module.exports = Sttb_Sale_Item_Ordermas;