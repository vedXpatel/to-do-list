const mongoose = require('mongoose')

const connectDB = () => {
    mongoose.connect("mongodb+srv://vedXpatel:4HfRKj2LNr6kiKb@cluster0.cwosmtj.mongodb.net/?retryWrites=true&w=majority",{useNewUrlParser: true, useUnifiedTopology: true}) .then(()=>{
    console.log("Connected to database ")
}).catch((e)=>{
    console.log(`Error: ${e}`)
})
}

module.exports = connectDB;