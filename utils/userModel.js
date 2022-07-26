import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema({
    name: { type: String, required: true },
    phone: Number,
    gov: String,
    isVerified: Boolean,
    email: {
        type: String,
        required: true,
        unique: true,
    },
});

const User = models.User || model('User', UserSchema);
export default User;
