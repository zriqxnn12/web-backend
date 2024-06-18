const UserModel = require("../model/userModels");

const getAllNotes = async (req, res) => {
  try {
    const [data] = await UserModel.getAlldata();

    res.json({
      message: "get all notes data",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "server error",
      serverMessage: error,
    });
  }
};

const getNotesById = async (req, res) => {
  const { id } = req.params;
  const [data] = await UserModel.getDataById(id);

  res.json({
    message: "get data by id",
    data: data,
  });
};

const createNewNotes = async (req, res) => {
  const { body } = req;
  // console.log(req.body);

  if (!body.title || !body.note) {
    return res.status(500).json({
      message: "invalid data inputed",
      data: null,
    });
  }

  try {
    await UserModel.createData(body);
    res.json({
      message: "CREATE new notes data",
      data: body,
    });
  } catch (error) {
    res.status(500).json({
      message: "server error",
      serverMessage: error,
    });
  }
};

const updateNotes = async (req, res) => {
  const { id } = req.params;
  const { body } = req;

  try {
    await UserModel.updateData(body, id);
    res.json({
      message: "UPDATE new notes",
      data: {
        id: id,
        ...body,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "server error",
      serverMessage: error,
    });
  }
  // console.log(`id: ${id}`);
};

const deleteNotes = async (req, res) => {
  const { id } = req.params;

  try {
    await UserModel.deleteData(id);
    res.json({
      message: "DELETE notes data",
      data: null,
    });
  } catch (error) {
    res.status(500).json({
      message: "server error",
      serverMessage: error,
    });
  }
};

module.exports = {
  getAllNotes,
  createNewNotes,
  updateNotes,
  deleteNotes,
  getNotesById,
};
