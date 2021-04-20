const router = require("express-promise-router")();

const {
  index,
  newUser,
  getUser,
  replaceUser,
  deleteUser,
  getUserCars,
  newUserCard,
} = require("../controllers/users");

// Get all users
router.get("/", index);

// Get one user
router.get("/:userId", getUser);

// Create new user
router.post("/", newUser);

// Replace user
router.put("/:userId", replaceUser);

// Delete user
router.delete("/:userId", deleteUser);

// Get cars the user
router.get("/:userId/cars", getUserCars);

// Add car the user
router.post("/:userId/cars", newUserCard);

module.exports = router;
