// Importing Express module
const express = require('express');
// Creating Express application
const app = express();


// Define a route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});
// require('./Transform_over_each_element');
// require('./Array_reduce_transformation');
// require('./function_composition');
// require('./promises');



// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
