const Pool = require('pg').Pool
const pool = new Pool({
  user: 'leitor',
  host: 143.107.102.8,
  database: 'data-energia',
  password: 'garsoftData2024',
  port: 5432,
});

const getConsumo = async () => {
    try {
      return await new Promise(function (resolve, reject) {
        pool.query("SELECT * FROM consumo", (error, results) => {
          if (error) {
            reject(error);
          }
          if (results && results.rows) {
            resolve(results.rows);
          } else {
            reject(new Error("No results found"));
          }
        });
      });
    } catch (error_1) {
      console.error(error_1);
      throw new Error("Internal server error");
    }
  };


  module.exports = {
    getConsumo
  };