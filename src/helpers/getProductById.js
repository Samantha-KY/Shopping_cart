// const pool = require('../pages/db')
import pool from '../db';


const createNewCart= async (req, res, next) => {
  const {name, price} = req.body;
  const {id} = req.params;
          const newProduct = await pool.query(
              "INSERT INTO cart (name, price) VALUES ($1, $2) WHERE product_id = $3",
              [name, price,id]
          );
  // }

if(newProduct.rowCount === 0) {
  return res.json({status: 400, message: 'bad request'});
}
return res.json({status: 200, message: 'product created', data: newProduct.rows});
}

    module.exports = {
      createNewCart
    }