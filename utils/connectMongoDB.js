import mongoose from 'mongoose';

const connectMongo = async () => mongoose.connect('mongodb+srv://khalil:nUhi3qyilDygDhz9@adoptme.igxn7.mongodb.net/?retryWrites=true&w=majority');

export default connectMongo;