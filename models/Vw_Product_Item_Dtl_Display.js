const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');


const Vw_Product_Item_Dtl_Display = sequelize.define('Vw_Product_Item_Dtl_Display', {
    machinhsanpham: {
      type: DataTypes.STRING,
      allowNull: true,
      primaryKey:true
    },
    grp_display: {
      type: DataTypes.STRING,
      allowNull: true,
      primaryKey:true
    },
    masanpham: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    hinhanhchinh: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    mausac: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    kichthuoc: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    motasanpham: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    chatlieu: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    desc_main: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    desc_material: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    desc_other1: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    desc_other2: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    desc_other3: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    desc_other4: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    desc_other5: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  }, {
    tableName: 'vw_product_item_dtl_display', // Tên bảng trong cơ sở dữ liệu
    timestamps: false, // Không sử dụng timestamps
  });
  
  module.exports = Vw_Product_Item_Dtl_Display