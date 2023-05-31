import { Sequelize } from 'sequelize';
import chalk from 'chalk';

import 'dotenv/config';

export const sequelize = new Sequelize({
  dialect: 'postgres',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

sequelize
  .authenticate()
  .then(() => {
    console.log(
      chalk.bgGreen.bold(
        '\nConexão com o banco de dados estabelecida com sucesso!\n'
      )
    );
  })
  .catch((error) => {
    console.log(
      chalk.red(
        `\nOcorreu um erro ao conectar com o banco de dados:\n${error}\n`
      )
    );
  });

export default sequelize;
