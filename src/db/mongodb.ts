import mongoose, {connect} from "mongoose"

const database = process.env.NODE_ENV as string === 'test' ? process.env.PROD_DB : process.env.PROD_DB



mongoose.set('strictQuery', false);
export default connect(database as string)
.then(()=> console.log('🚀  Connected to database... '))
