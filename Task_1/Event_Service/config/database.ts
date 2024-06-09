import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'node_effective_mobile',
    password: 'rootroot',
    port: 5432,
});

export default pool;
