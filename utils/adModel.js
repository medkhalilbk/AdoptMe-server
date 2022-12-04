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

const DefaultSchema = new Schema({}, { strict: false });

const Ad = models.Ad || model('Ad', {});
export default Ad;