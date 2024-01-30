import { Schema,model, models } from "mongoose"
const UserInfoSchema = new Schema({
    username:{type:String, required: true, min:1, unique:true},
    pageOf:{type:String,required:true}
},{timestamps:true})

export const UserPage =models?.UserPage ||  model('UserPage',UserInfoSchema);