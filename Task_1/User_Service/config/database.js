const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'node_effective_mobile',
  password: 'rootroot',
  port: 5432,
});

module.exports = pool;