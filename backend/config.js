const mongoose =require("mongoose")
require("dotenv").config();

const { MONGO_URI} = process.env;

exports.connect=()=>{
    mongoose.connect(MONGO_URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        
})
.then(console.log(`DB Connection Success`))
.catch((err) => {
    console.log(`DB Connection Failed`);
    console.log(err);
    process.exit(1);
});
};