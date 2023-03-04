import { Model } from "../src/core/Model";
import axios from "axios"; //Dev imports his Axios instance
import { Condition } from "../src/core/Condition";
import { MainBody } from "./RequestBody.test";

class User extends Model {
  constructor() {
    //Call Parent constructor
    super(axios, "/users", MainBody);
  }
}

//Dev can now work like this:
users = new User();

//This sets the user.users attribute
users.findAll();

//Access the list of all Users;
user.list;

//Acces a User by Id
testUser = users.findBy(1);

//Access a User by Condition
condition = new Condition("user_name", "=", "Kalhorn");
conditionUser = user.findWith(condition);

//Delete a User by Condition
users.deleteBy(condition);

//Delete a searched User (not implemented)
conditionUser.delete();

//Create a new User
newUser = {
  user_name: "Tester",
  allowance: true,
  friends: undefined,
};
user.create(newUser);
