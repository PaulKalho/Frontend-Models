//This class is the base class for user specified request body
//It has to be jsonifyed when used.
export class RequestBody {
  populate: String; //This attribute tells the populateRequest Function, which attribute of the class should be populated
  child: RequestBody;

  constructor(populate: String, child: RequestBody) {
    this.populate = populate;
    this.child = child;
  }

  populateRequest(data: any): void {
    //Populate the attribute of the cild class
    this.child.populate = data;
  }
}
