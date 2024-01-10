// services/userService.js
const CustomException = require("../../../exception/CustomException");
let service = require("./servicce")
const SAVE_ALL_CART = "SAVE_ALL_CART";
const SAVE_ORDER = "SAVE_ORDER";
const SAVE_DATA_CONFIRM = "SAVE_DATA_CONFIRM";

class CartProcess {
    constructor() {
    }
    async process(_func = "", params) {
        let results = {}
        switch (_func) {
            case SAVE_ALL_CART:
                results = await service.saveAllCart(params);
                break;
            case SAVE_ORDER:
                results = await service.saveOrder(params)
                break;
            case SAVE_DATA_CONFIRM:
                break;
            default:
                throw new CustomException(`Not found ${_func}`)
        }
        return results;
    }
    async search(_func = "", params) {
        let results = []
        switch (_func) {
          
        }
        return results;
    }
}

module.exports = new CartProcess();
