class Utils {
    constructor() {
    }
    generateTaskId() {
        return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c =>
            (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
        );
    }
    map(objectMap, resultOPbject) {
        let rs = {}
        for (const [key, value] of Object.entries(objectMap)) {
            if (resultOPbject?.[key])
                rs[key] = value;
        }
        return rs;

    }
    isEmpty(data) {
        return data == null || data == undefined || data == "";
    }
    isNotEmpty(data) {
        return !(data == null || data == undefined || data == "");
    }
}

module.exports = new Utils();