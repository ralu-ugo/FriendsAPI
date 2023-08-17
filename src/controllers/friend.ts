import { Request, Response } from "express"
import { Types } from "mongoose"
import { BaseHandler, IFriend } from "../interfaces"
import FriendsModel from "../models/friends.model"

export class Friends extends BaseHandler {
  static async addFriend (req: Request, res: Response){
    const { name, email, phone } = req.body
    const newFriend = {
      name : name,
      email : email,
      phone : phone
    }

    const friend = new FriendsModel (newFriend)
    const savedFriend = await friend.save()
    return res.status(201).json({
      succes : true,
      message : `${name} has been succesfully added`,
      data : savedFriend
    })
  }

  static async getAllFriends (req: Request, res: Response){
    try {
      const filters = {isDeleted: false }
      FriendsModel.find(filters).then((friends) => {
        return res.status(201).json({
          success: true,
          message: "Friends successfully retrieved",
          count: friends.length,
          data: friends
        })
      })
    } catch (error) {

    }
  }

  static async getAFriend (req: Request, res: Response){
    const id = req.params.id
    if (Types.ObjectId.isValid(id)){
      const friend = await FriendsModel.findById(id)
      if (friend){
        return res.status(201).json({
          success : true,
          message : "Friend successfully retrieved",
          data : friend
        })
      } else {
        return res.status(404).json({ success : false, message : "Friend not found" })
      }
    } else {
      return res.status(404).json({ success :  false, message : "Invalid id" })
    }
    console.log(id)
  }


  static async deleteAFriend (req: Request, res: Response){
    const id = req.params.id
    if (Types.ObjectId.isValid(id)){
      FriendsModel.findById({_id: id}, (error: Error, document: IFriend) => {
        if (document){
          document.isDeleted = true
          document.save().then(()=>{
            return res.status(201).json({
              success : true,
              message : "Friend successfully deleted"
            })
          })
        }
      })
    } else {
      return res.status(404).json({ success : false, message : "Invalid ID" })
    }
  }

  static async updateAFriend ( req: Request, res: Response ){
    const { name, email, phone } = req.body
    const id = req.params.id
    if (Types.ObjectId.isValid(id)){
      FriendsModel.findById({_id: id }, (error: Error, document: IFriend) => {
        if (document){
          name ? document.name = name : document.name
          email ? document.email = email : document.email
          phone ? document.phone = phone : document.phone
          // document.name = name || document.name
          // document.email = email || document.email
          // document.phone = phone || document.phone
          document.save().then(()=>{
            return res.status(201).json({
              success : true,
              message : "Friend successfully updated",
              data : document
            })
          })
        }
      })
    } else {
      return res.status(404).json({ sucess : false, message : "Invalid ID" })
    }
  }
}
