import { DB } from '../db.js';

export function getBrands() {
  const data = [];
  const rows = DB.query("SELECT * FROM brand").all();

  console.log(rows);
  rows.forEach((item) => {
    data.push(item);
  });

  return data;
}

export function insertBrand(car) {
  DB.query(
    'INSERT INTO cars (name, color, weight) VALUES ($1, $2, $3)', [car.name, car.color, car.weight]
  );
}

export function updateBrand(car) {
  DB.query("UPDATE cars SET name = $1 WHERE id = $2", [car.name, car.id]);
}

export function deleteBrand(id) {
  DB.query("DELETE FROM cars WHERE id = $1", id);
}