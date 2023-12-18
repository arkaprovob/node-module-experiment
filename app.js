const express = require('express');
const app = express();
const setupCustomApi = require('./customModule/api');

setupCustomApi(app);
const port = 3000;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});