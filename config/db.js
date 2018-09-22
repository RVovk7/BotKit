import mongoose from 'mongoose';

 
export const dbConnect = () => mongoose.connect('mongodb://admin:admin7@ds211613.mlab.com:11613/botkit', {
  useNewUrlParser: true
})
.then(() => console.log('DB running on port 3001'))
.catch((e) => {
  console.error(`DB fail: ${e}`)
});

const botSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true,
    minlength: 1
  },
});

const DB = mongoose.model('botkit', botSchema);