const CustomException = require("../../../exception/CustomException");
let service = require("./service")
const GET_LST_PRODUCT = "GET_LST_PRODUCT";
const FILTER_ALL_PRODUCT_ITEM_DTL = "FILTER_ALL_PRODUCT_ITEM_DTL";
const COUNT_PRODUCT = "COUNT_PRODUCT";
const PRODUCT_PAGINATION = "PRODUCT_PAGINATION";

class ProductProcessBean {
    constructor() {
    }
    async process(_func = "", params) {
        try {
            return {}
        } catch (error) {
            throw error;
        }
    }
    async search(_func = "", params) {
        let results = []
        switch (_func) {
            case GET_LST_PRODUCT:
                results = await service.filterAllProduct(params);
                break;
            case FILTER_ALL_PRODUCT_ITEM_DTL:
                results = await service.filterAllProductItemDTL(params);
                break;
            case COUNT_PRODUCT:
                results = await service.getTotalItemCount();
                break;
            case PRODUCT_PAGINATION:
                results = await service.findProductPagination(params);
                break;
            default:
                throw new CustomException(`Not found ${_func}`)
        }
        return results;
    }
}

module.exports = new ProductProcessBean();
