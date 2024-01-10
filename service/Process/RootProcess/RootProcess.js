const express = require('express');

const rootProcess = {
    pageService: require('../PageProcess/process'),
    productService: require('../ProductProcess/process'),
    CartProcess: require('../CartProcess/process')
    // Thêm các dịch vụ khác nếu cần
};
module.exports = rootProcess