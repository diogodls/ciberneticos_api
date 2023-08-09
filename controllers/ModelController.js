import { DB } from '../db.js';

export function getModels() {
  const data = [];
  const rows = DB.query("SELECT * FROM model").all();

  console.log(rows);
  rows.forEach((item) => {
    data.push(item);
  });

  return data;
}
