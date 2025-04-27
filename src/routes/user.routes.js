import { Router } from "express";
import {
  registerUser,
  loginUser,
  logoutUser,
  accessTokenRefresher,
  changePassword,
  getCurrentUser,
  updateAccountDetails,
  updateAvatar,
  updateCoverImage,
  getUserChannelProfile,
  getWatchHistory,
} from "../controllers/user.controller.js";
import upload from "../middlewares/multer.middleware.js";
import verifyJWT from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/register").post(
  upload.fields([
    {
      name: "avatar",
      maxCount: 1,
    },
    {
      name: "coverImage",
      maxCount: 1,
    },
  ]),
  registerUser
);

router.route("/login").post(loginUser);

//secured routes
router.route("/logout").post(verifyJWT, logoutUser);
router.route("/refreshToken").post(accessTokenRefresher);//*** 
router.route("/changePassword").post(verifyJWT, changePassword)
router.route("/currentUser").get(verifyJWT, getCurrentUser)
router.route("/updateAccount").patch(verifyJWT, updateAccountDetails)
router.route("/updateAvatar").patch(verifyJWT, upload.single("avatar"), updateAvatar)
router.route("/updateCoverImage").patch(verifyJWT, upload.single("coverImage"), updateCoverImage)
router.route("/channelProfile/:username").get(verifyJWT, getUserChannelProfile)
router.route("/watchHistory").get(verifyJWT, getWatchHistory)

export default router;
