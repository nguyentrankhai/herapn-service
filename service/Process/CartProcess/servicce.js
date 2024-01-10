const sequelize = require("../../../config/db");
const CustomException = require("../../../exception/CustomException");
const Sttb_Sale_Item_Orderdtl = require("../../../models/sttb_sale_item_orderdtl");
const Sttb_Sale_Item_Ordermas = require("../../../models/sttb_sale_item_ordermas");
const { QueryTypes } = require('sequelize');
const Sttb_Sale_Record_Data = require("../../../models/sttb_sale_record_data");
const utils = require("../../../utils/utils");
const moment = require('moment');
const { v4: uuidv4 } = require('uuid');
const ProcessResponse = require("../../../models/sys/ProcessResponse");
let dataOrder = {
    master: null,
    details: null
}

class CartService {
    constructor() { }
    async saveAllCart(params) {
        let lstOrder = params?.lstOrder
        if (!lstOrder) {
            throw new CustomException("Lỗi hệ thông");
        }
        for (let i = 0; i < lstOrder.length; i++) {
            lstOrder[i].dataidkey = uuidv4();

        }
        return await Sttb_Sale_Record_Data.bulkCreate(lstOrder, { validate: true });
    }
    validateOrder(params = dataOrder) {
        if (utils.isEmpty(params.details) || utils.isEmpty(params.master)) {
            console.error("data in saveOrder is null");
            throw new CustomException(999, 'Hệ thông bận');
        }
    }
    async saveOrder(params = dataOrder) {
        this.validateOrder(params);
        let toDayText = moment().format('DDMMYYYY');
        let sequece = await sequelize.query(
            "SELECT COUNT(*) as orderCount FROM shop.sttb_sale_item_ordermas mas WHERE DATE_FORMAT(mas.date_order,'%d%m%Y') = :dateOrder",
            {
                replacements: { dateOrder: toDayText },
                type: QueryTypes.SELECT
            }
        );
        let masterID = uuidv4();
        let order_code = toDayText + "_" + sequece?.orderCount + 1;
        let { details, master } = params
        master.order_idkey = masterID;
        master.order_code = order_code;
        master.date_order = moment();
        master.ispayment = "N";
        master.isdeliver = "N";
        master.isprocess = "N";
        for (let i = 0; i < details.length; i++) {
            details[i].order_dtlidkey = uuidv4();
            details[i].recdetail_idkey = uuidv4();
            details[i].order_idkey = masterID;
        }
        await Sttb_Sale_Item_Ordermas.create(master);
        await Sttb_Sale_Item_Orderdtl.bulkCreate(details, { validate: true });
        return new ProcessResponse("Đặt hàng thành công", masterID);
    }
}

module.exports = new CartService()