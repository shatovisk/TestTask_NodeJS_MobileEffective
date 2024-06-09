import { DataSource, DataSourceOptions } from "typeorm";

export const dataSourceOptions: DataSourceOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'rootroot',
    database: 'db_migration',
    entities: ['dist/**/*.entity.js'],
    migrations: ['dist/db/migration/*.js']
};

const dataSource = new DataSource(dataSourceOptions)
export default dataSource;