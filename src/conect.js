const knex = require(`knex`)({
    client: `pg`,
    connection: {
        host: 'localhost',
        port: 5432,
        user: 'postgres',
        password: '181904',
        database: 'incentive_plante'
    }
});

module.exports = knex;