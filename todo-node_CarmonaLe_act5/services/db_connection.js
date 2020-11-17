const mongoose = require("mongoose");

const connectToDatabase = () => {
    mongoose.
    connect("mongodb://localhost:27017/todo_list_db", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        })
        .then(() => console.log("Connected to database"))
        .catch((error) => console.error(error));
};
// const mongooseCon = () => {
//     return mongoose.connection;
// };
// const Schema = () => {
//     mongooseCon.once('open', function() {
//         console.log("Connection Successful!");
//         return  mongoose.Schema({
//             task: String
//           });
//     });
// };
// const model =()=>{
//     return mongoose.model('Task', Schema, 'tasks');
// };
// const insert = (a, b, c) => {
//     var book1 = new Book({ name: 'Introduction to Mongoose', price: 10, quantity: 25 });
 
//     // save model to database
//     book1.save(function (err, book) {
//       if (err) return console.error(err);
//       console.log(book.name + " saved to bookstore collection.");
//     });
// }
module.exports = {
    connect: connectToDatabase,
    // model: model,
};