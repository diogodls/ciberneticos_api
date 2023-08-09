import pkg from 'pg'
import * as process from "process";
const { Client } = pkg;

export async function createDatabaseConnection() {
  const client = new Client({
    user: 'junior',
    host: process.env.POSTGRES_DB_HOST,
    database: 'car',
    password: 'admingres',
    port: 5432,
  })

  client.connect((err) => {
    if(err) throw err;
    console.log('Conectado fi!')
  });

  return client;
}

export const DB = await createDatabaseConnection();
