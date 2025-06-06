const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const router = require('./routes.cjs');

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('🚀 Server running at http://localhost:' + PORT);
});
