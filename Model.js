class Model {
    //Constructor
    constructor(table, endpoint, listName, objName = null,apiInstance = axiosInstance) {
        this.api = apiInstance
        this.table = table
        this.endpoint = endpoint
        this.listName = listName
        this.objName = objName
    }

    async save() {
        //EDIT Instance on the Table (In the Backend) OR CREATE
        await this.put();
    }

    async find(id) {
        //Finds a Instance and sets the object accordingly
        await this.post(payload);
    }

    async del() {
        //Deletes the Instance in the db
        await this.delete();
    }


}