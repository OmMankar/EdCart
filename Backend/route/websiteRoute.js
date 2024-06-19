const express = require("express");
const router = express.Router();

//importing our controller
const { getCards } = require("../controller/getCards");
const { createCard } = require("../controller/createCard");
const { signup } = require("../controller/signup");
const { LogIn } = require("../controller/logIn");
const { setWishlist, deleteWishlist } = require("../controller/wishlistCards");
const {
  setCartlist,
  deleteCartlist,
  deleteAllCartlist,
} = require("../controller/cartCards");
const { setMyLearning, deleteMyLearning } = require("../controller/mylearning");
//define the api routes

router.get("/", getCards);
router.post("/", createCard);
router.post("/signUp", signup);
router.post("/logIn", LogIn);
router.put("/Wishlist/:emailId", setWishlist);
router.put("/Wishlist/delete/:emailId", deleteWishlist);
router.put("/Cartlist/:emailId", setCartlist);
router.put("/Cartlist/delete/:emailId", deleteCartlist);
router.put("/Cartlist/delete/all/:emailId", deleteAllCartlist);
router.put("/MyLearninglist/add/:emailId", setMyLearning);
router.put("/MyLearninglist/delete/:emailId", deleteMyLearning);
module.exports = router;
