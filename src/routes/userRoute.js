const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");

router.get("/", userController.getAllNotes);

router.get("/:id", userController.getNotesById);

router.post("/", userController.createNewNotes);

router.patch("/:id", userController.updateNotes);

router.delete("/:id", userController.deleteNotes);

module.exports = router;
