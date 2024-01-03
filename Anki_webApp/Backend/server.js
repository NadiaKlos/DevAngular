const express = require('express');
const oracledb = require('oracledb');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const dbConfig = {
    user: 'system',
    password: 'oracle',
    connectString: 'localhost:1521/ORCLCDB.localdomain', // ex: localhost:1521/ORCLCDB.localdomain
};

async function initialize() {
    try {
        await oracledb.createPool(dbConfig);
    } catch (err) {
        console.error('Error initializing database: ', err);
    }
}

initialize();

app.get('/api/lessons', async (req, res) => {
    let connection;

    try {
        connection = await oracledb.getConnection();
        const result = await connection.execute(
            'SELECT * FROM lessons',
            [],
            { outFormat: oracledb.OUT_FORMAT_OBJECT }
        );

        res.json(result.rows);
    } catch (err) {
        console.error('Error executing query: ', err);
        res.status(500).json({ message: 'Internal Server Error' });
    } finally {
        if (connection) {
            try {
                await connection.close();
            } catch (err) {
                console.error('Error closing connection: ', err);
            }
        }
    }
});

app.post('/api/register', (req, res) => {
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
