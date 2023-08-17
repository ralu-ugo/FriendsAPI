import express, { Request, Response } from 'express'
import { Friends } from '../controllers/friend';
var router = express.Router();


router
  .route("/add")
  .post(Friends.addFriend)


router
  .route("/")
  .get(Friends.getAllFriends)


router
  .route("/:id")
  .get(Friends.getAFriend)
  .put(Friends.updateAFriend)
  .delete(Friends.deleteAFriend)


export default router;
