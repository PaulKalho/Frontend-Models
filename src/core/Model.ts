

class Model {
    api: Object; //This should be the Axios Instance
    endpoint: string;
    table: string;
    listName: string;
    objName: string;

    constructor(api: Object,endpoint: string, table: string, listName: string, objName: string) {
        this.api = api;
        this.endpoint = endpoint;
        this.table = table;
        this.listName = listName;
        this.objName = objName;
    }

    //Methods
    async findAll(): Promise<void>{

    }

    async 

}


