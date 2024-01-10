class CustomException extends Error {
    constructor( message,obj={},status) {
        super(message);
        this.status = status || 500;
        this.messageError = message;
        this.objectError =obj;
    }
}

module.exports = CustomException;
