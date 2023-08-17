import { Schema, model } from "mongoose"
import { IFriend } from "../interfaces"

const friendSchema = new Schema<IFriend>({
  name : {
    type : String,
    lowercase : true,
    required : true
  },
  email : {
    type : String,
    lowercase : true,
    required : true,
    unique : true
  },
  phone : {
    type : String,
    required : true
  },
  isDeleted : {
    type : Boolean,
    default : false
  },
  createdAt : {
    type: Date,
    immutable: true,
    default: () => Date.now()
  },
  updatedAt: {
      type: Date,
      default: () => Date.now()
    }
})

export default model<IFriend>('Friend', friendSchema)
