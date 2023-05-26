const express = require("express");
const router = express.Router();
const { 
    getContact, 
    createContact, 
    getContacts, 
    updateContact, 
    deleteContact 
} = require("../controllers/contactController");
const validateToken = require("../middleware/validateTokenHandler")


router.use(validateToken);
router.route("/").post(createContact).get(getContacts);
router.route("/:id").put(updateContact).get(getContact).delete(deleteContact);

module.exports = router;