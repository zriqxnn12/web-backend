const dbpool = require("../config/database");

const getAlldata = () => {
  const query = "SELECT * FROM table_note";

  return dbpool.execute(query);
};

const getDataById = (id) => {
  const query = `SELECT * FROM table_note WHERE id='${id}'`;

  return dbpool.execute(query);
};

const createData = (body) => {
  const query = `INSERT INTO table_note (title, date, note) VALUES ('${body.title}', '${body.date}', '${body.note}')`;

  return dbpool.execute(query);
};

const updateData = (body, id) => {
  const query = `UPDATE table_note SET title='${body.title}', date='${body.date}' ,note='${body.note}' WHERE id='${id}'`;

  return dbpool.execute(query);
};

const deleteData = (id) => {
  const query = `DELETE FROM table_note WHERE id='${id}'`;

  return dbpool.execute(query);
};

module.exports = {
  getAlldata,
  getDataById,
  createData,
  updateData,
  deleteData,
};
