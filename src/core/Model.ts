import { Condition } from "./Condition";
import { Axios } from "axios";
import { RequestBody } from "./Request";

//Alle aktionen sollen auf diesem model ausgeführt werden
export class Model {
  api: Axios; //This should be the Axios Instance
  endpoint: string; //The Endpoint for the Rquest
  requestBase: RequestBody; //The "structure" of the request, axios should send
  list: Object[]; //Saves the list of the Backend-Table in the class, not neccecary but may be a nice have

  constructor(api: Axios, endpoint: string, requestBase: RequestBody) {
    this.api = api;
    this.endpoint = endpoint;
    this.requestBase = requestBase;
  }

  //Methods
  async findAll(): Promise<void> {
    try {
      const response = await this.api.get(this.endpoint);
      this.list = response.data;
    } catch (err) {
      throw new Error(err.message);
    }
  }

  async findBy(id: number): Promise<Object> {
    try {
      this.requestBase.populateRequest({ id });
      const response = await this.api.post(this.endpoint, this.requestBase);
      return response.data;
    } catch (err) {
      throw new Error(err.message);
    }
  }

  async findWith(condition: Condition): Promise<Object[]> {
    try {
      this.requestBase.populateRequest({ condition });
      const response = await this.api.post(this.endpoint, this.requestBase);
      return response.data;
    } catch (err) {
      throw new Error(err.message);
    }
  }

  async create(payload: object): Promise<void> {
    //Send POST for creating a instance on the DB
    try {
      this.requestBase.populateRequest(payload);
      const response = await this.api.post(this.endpoint, this.requestBase);
      return response.data;
    } catch (err) {
      throw new Error(err.message);
    }
  }

  async findOrCreate(paylod: object): Promise<void> {
    //FindOrCreate
  }

  async deleteBy(condition: Condition): Promise<void> {
    //Delete WHERE Condition
  }
}
