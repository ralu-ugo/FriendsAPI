import {Types} from "mongoose"

export class BaseHandler {
  public stringify(obj: any): string {
    return JSON.stringify(obj);
  }
}

export interface IFriend {
  name : string;
  email : string;
  phone : string;
  isDeleted : boolean,
  createdAt : Date,
  updatedAt : Date,
  save() : any
}
