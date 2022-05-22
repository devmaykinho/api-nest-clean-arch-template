export const getCredentions = () => ({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'docker',
  database: 'postgres',
  autoLoadEntities: true,
  synchronize: true,
});
