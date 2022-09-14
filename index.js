const cors = require('cors');
const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors({ origin: '*' }));

app.get('/', (req, res) => {
   res.send({ status: 200, port, message: 'Node-Mongo-As01 Server is Running...' });
});

app.listen(port, () => {
   console.log(`Node-Mongo-As01 Server Running... Port: ${port}`);
});
