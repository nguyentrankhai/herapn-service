const express = require('express');
const router = express.Router();
const sequelize = require('../config/db');
const rootProcess = require('../service/Process/RootProcess/RootProcess');
const CustomException = require('../exception/CustomException');
const ResultData = require('../models/sys/Result');
// Route handler để lấy danh sách từ view hoặc bảng
router.get('/hello', async (req, res) => {
    res.json("hồ le");
});
router.post('/process/:service_bean', async (req, res, next) => {
    try {
        const service_bean = req.params?.service_bean || "";
        let serivce = rootProcess[service_bean];
        if (!serivce)
            throw new CustomException(`Không tìm thấy service Bean ${service_bean}`)

        let { function_name, data_request } = req.body;
        const results = await serivce?.process(function_name,data_request)
        let rs = new ResultData(200, "200", results, null);
        res.json(rs);
    } catch (error) {
        console.error(error);
        if (!(error instanceof CustomException)) {
            error = new CustomException(`Hệ thống bận`)
        }
        next(error);
    }

});
router.post('/search/:service_bean', async (req, res, next) => {
    try {
        const service_bean = req.params?.service_bean || "";
        let serivce = rootProcess[service_bean];
        if (!serivce)
            throw new CustomException(`Không tìm thấy service Bean ${service_bean}`)

        let { function_name, data_request } = req.body;
        const results = await serivce?.search(function_name,data_request)
        // console.log(results);
        let rs = new ResultData(200, "200", results, null);
        res.json(rs);
    } catch (error) {
        console.error(error);
        if (!(error instanceof CustomException)) {
            error = new CustomException(`Hệ thống bận`)
        }
        next(error);
    }

});
module.exports = router;
