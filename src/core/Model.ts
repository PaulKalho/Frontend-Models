
import {Condition} from "./Condition";
import { Axios } from "axios"

//Alle aktionen sollen auf diesem model ausgeführt werden
export class Model {
    api: Axios; //This should be the Axios Instance
    table: Object;
    endpoint: string;
    list: Object[];
    
    constructor(api: Axios, endpoint: string) {
        this.api = api;
        this.endpoint = endpoint;
    }

    //Methods
    async findAll(): Promise<void>{
        try{
            const response = await this.api.get(this.endpoint);
            this.list = response.data;
        }catch(err) {
            throw new Error(err.message);
        }
    };

    async findBy(id: number): Promise<Object>{
        return new Promise<Object>((resolve, reject) => {

        })
    }

    async create(payload: object): Promise<void>{
        //Send POST for creating a instance on the DB
    }

    async findOrCreate(paylod: object): Promise<void>{
        //FindorCreate
    }

    async deleteBy(condition:Condition): Promise<void>{
        //Delete WHERE Condition

    } 

}


