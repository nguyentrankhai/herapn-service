// services/userService.js
const CustomException = require("../../../exception/CustomException");
let service = require("./service")
const GET_LST_CATEGORY = "GET_LST_CATEGORY";
const GET_LST_PARAM = "GET_LST_PARAM";

class PageService {
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
            case GET_LST_CATEGORY:
                results = await service.getLstCategory();
                break;
            case GET_LST_PARAM:
                results = await service.getParamFilters(params?.param_code);
                break;
            default:
                throw new CustomException(`Not found ${_func}`)
        }
        return results;
    }
}

module.exports = new PageService();
