import { Schema,model, models } from "mongoose"
const UserInfoSchema = new Schema({
    username:{type:String, required: true, min:1, unique:true},
    pageOf:{type:String,required:true},
    cardOwnerDisplayName:{type:String,default:''},
    currentLocation:{type:String,default:''},
    bio:{type:String,default:''},
},{timestamps:true})

export const UserPage =models?.UserPage ||  model('UserPage',UserInfoSchema);