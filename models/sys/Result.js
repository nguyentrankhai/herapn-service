class ResultData {
    constructor(statusCode, code, Response, Error) {
        this.statusCode = statusCode || 500;
        this.code = code || "ERROR";
        this.Response = Response || {};
        this.Error = Error || {};
    }
}

module.exports = ResultData;
