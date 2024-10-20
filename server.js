// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const path = require('path');
// const ruleRoutes = require('./routes/ruleRoutes');
// const app = express();
// const PORT = 3000;
// app.use(cors());
// app.use(bodyParser.json());
// app.use(express.static('public'));
// mongoose.connect('mongodb://0.0.0.0:27017/mydb', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }).then(() => {
//   console.log("Connected to MongoDB");
// }).catch(err => {
//   console.error("Error connecting to MongoDB", err);
// });
// // Serve static files from the public directory
// app.use(express.static(path.join(__dirname, 'public')));
// // Route for serving the index.html
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, './views/index.html'));
// });
// app.use('/api/rules', ruleRoutes);
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });






// //check connect

// db.on('error', () => console.log("error in connecting Database"));
// db.once('open', () => console.log("connected to Database"));


// app.get("/", (req, res) =>{
//     res.set({
//         "Allow-access-Allow-Origin": '*'
//     })
//     return res.redirect('index.html');
// }).listen(3000);




