import { Schema,model, models } from "mongoose"
const UserInfoSchema = new Schema({
    username:{type:String, required: true, min:1, unique:true},
    pageOf:{type:String,required:true},
    cardOwnerDisplayName:{type:String,default:''},
    currentLocation:{type:String,default:''},
    bio:{type:String,default:''},
    coverType:{type:String,default:'color'},
    coverColor:{type:String,default:'#000'},
    coverImage:{type:String,default:''},
    profileLinks:{type:Object,default:{}},
},{timestamps:true})

export const UserPage =models?.UserPage ||  model('UserPage',UserInfoSchema);