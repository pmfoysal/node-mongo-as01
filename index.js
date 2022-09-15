const cors = require('cors');
const express = require('express');
const useRoutes = require('./src/routes');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors({ origin: '*' }));
app.use(useRoutes(port));

app.listen(port, () => {
   console.log(`Node-Mongo-As01 Server Running... Port: ${port}`);
});
