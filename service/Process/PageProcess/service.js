const sequelize = require("../../../config/db");
const CustomException = require("../../../exception/CustomException");
const Vw_Param_Data = require("../../../models/Vw_Param_Data");
const Vw_Category_Group = require("../../../models/vw_category_group");
class PageProcessService {
    constructor() { }

    async getLstCategory() {
        return await Vw_Category_Group.findAll();
    }

    async getParamFilters(param_code) {
        return await Vw_Param_Data.findAll({ where: { param_code: param_code } })
    }
}

module.exports = new PageProcessService()