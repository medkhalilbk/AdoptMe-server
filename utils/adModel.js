import { Schema, model, models } from 'mongoose';
const adModel = new Schema({
    title: { type: String, required: true },
    phone: Number,
    description: String,
    type: String,
    age: String,
    sex: String,
    color:String,
    img:String,
    race:String,
    dispo:Boolean,
    owner:Object
});

const Ad = models.Ad || model('Ad', adModel);
export default Ad;