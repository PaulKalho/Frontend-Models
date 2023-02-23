//This class is the base class for user specified request body
//It has to be jsonifyed when passed to the axios instance
class RequestBody {
    data: Object[]

    constructor() {
        this.data = [];
    }
}