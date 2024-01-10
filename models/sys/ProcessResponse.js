class ProcessResponse {
    constructor(message,transaction_id) {
        this.status = 200;
        this.message = message;
        this.transaction_id= transaction_id
    }
}

module.exports = ProcessResponse;
