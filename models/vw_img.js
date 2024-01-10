const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

// Định nghĩa model VwProductItemDtlImg cho bảng vw_product_item_dtl_img
const VwProductItemDtlImg = sequelize.define('VwProductItemDtlImg', {
    machinhsanpham: {
      type: DataTypes.STRING,
      allowNull: true,

    },
    masanpham: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    hinhanhchinh: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    hinhanhlienquan: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    nhomhienthi: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  }, {
    tableName: 'vw_product_item_dtl_img', // Tên bảng trong cơ sở dữ liệu
    timestamps: false, // Không sử dụng timestamps
  });
  
  module.exports = VwProductItemDtlImg;