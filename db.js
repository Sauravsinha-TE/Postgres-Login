const { Pool } = require('pg');
require('dotenv').config();  // Ensure .env is loaded

// Create a new pool using the connection string from the environment variable
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});

// Test the database connection
pool.connect((err, client, release) => {
    if (err) {
        return console.error('Error acquiring client', err.stack);
    }
    console.log('Connected to the database');
    release();  // Release the client back to the pool
});

module.exports = {
    // A method to execute a query
    query: (text, params) => pool.query(text, params),
};
