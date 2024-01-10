const sequelize = require("../../../config/db");
const CustomException = require("../../../exception/CustomException");
const Vw_Product_Item_Dtl = require("../../../models/Vw_Product_Item_Dtl");
const Vw_Product_Item_Dtl_Display = require("../../../models/Vw_Product_Item_Dtl_Display");
class ProductProcessService {
    constructor() { }

    async filterAllProduct(mattcher = {}) {
        return await Vw_Product_Item_Dtl_Display.findAll({
            where: mattcher
        });
    }

    async findProduct(mattcher = {}) {
        return await Vw_Product_Item_Dtl_Display.findAll({
            where: mattcher
        });
    }

    async filterAllProductItemDTL(mattcher = {}) {
        return await Vw_Product_Item_Dtl.findAll({
            where: mattcher
        });
    }
    async findProductPagination(params) {
        let { mattcher, page = 1, page_size = 3 } = params
        let first = (page - 1) * page_size;
        let end = page_size;
        let kichthuoc = mattcher?.kichthuoc ??  null;
        let mau = mattcher?.mau ?? null;
        let itemmas_idkey = mattcher?.itemmas_idkey ?? null;
        let giasanpham_from = mattcher?.giasanpham_from ?? null;
        let giasanpham_to = mattcher?.giasanpham_to ?? null;        // const query = `SELECT * FROM Vw_Product_Item_Dtl LIMIT ${first}, ${end}`;
        // const results = await sequelize.query(query, {
        //     type: sequelize.QueryTypes.SELECT,
        // });
        if (kichthuoc?.length == 0) {
            kichthuoc = null;
        }
        // const query = 'SELECT * FROM Vw_Product_Item_Dtl LIMIT :first, :end';
        let filter = { first, end, kichthuoc, mau, itemmas_idkey, giasanpham_from, giasanpham_to }
        const query = `select * from shop.vw_product_item_dtl dtl
                        where (dtl.kichthuoc in(:kichthuoc) or COALESCE(:kichthuoc,'') ='')
                            and (dtl.mau = :mau or :mau is null)
                            and (dtl.danhmucsp = :itemmas_idkey or :itemmas_idkey is null)
                            and (dtl.giasanpham >= :giasanpham_from or :giasanpham_from is null)
                            and (dtl.giasanpham <= :giasanpham_to or :giasanpham_to is null)
                            LIMIT :first, :end;`
        const results = await sequelize.query(query, {
            replacements: filter,
            type: sequelize.QueryTypes.SELECT,
        });
        let totalItems = await this.getTotalItemCount(filter);
        const pageCount = Math.ceil(totalItems[0]?.count / page_size);
        return {
            results,
            pagination: {
                count: totalItems?.count,
                pageCount: pageCount,
                currentPage: page,
                page_size,
            },
        };
    }
    async getTotalItemCount({ kichthuoc, mau, itemmas_idkey, giasanpham_from, giasanpham_to}) {
        const query = `select count(*) as count from shop.vw_product_item_dtl dtl
        where (dtl.kichthuoc in(:kichthuoc) or COALESCE(:kichthuoc,'') ='')
            and (dtl.mau = :mau or :mau is null)
            and (dtl.danhmucsp = :itemmas_idkey or :itemmas_idkey is null)
            and (dtl.giasanpham >= :giasanpham_from or :giasanpham_from is null)
            and (dtl.giasanpham <= :giasanpham_to or :giasanpham_to is null)`
        return await sequelize.query(query, {
            replacements: { kichthuoc, mau, itemmas_idkey, giasanpham_from, giasanpham_to },
            type: sequelize.QueryTypes.SELECT,
        });
    }

}

module.exports = new ProductProcessService()