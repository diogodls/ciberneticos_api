import { DB } from '../db.js';

export async function getCars() {
  const result = await DB.query("SELECT * FROM car");
  console.log(result);
  return result.fields;
}

export function insertCar(car) {
  const result = DB.query(
    'INSERT INTO cars (name, color, weight) VALUES ($1, $2, $3)',
    [car.name, car.color, car.weight],
    (err, res) => {
      if(err) throw err
      console.log(res);
    }
  );
}

export function updateCar(car) {
  DB.query("UPDATE cars SET name = $1 WHERE id = $2", [car.name, car.id]);
}

export function deleteCar(id) {
  DB.query("DELETE FROM cars WHERE id = $1", id);
}