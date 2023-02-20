// The Connector Class connects all actions made on a model to an axios instance
class Connector {
    constructor(table, endpoint, listName, objName = null,apiInstance = axiosInstance) {
        this.api = apiInstance
        this.table = table
        this.endpoint = endpoint
        this.listName = listName
        this.objName = objName
    }
}