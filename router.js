const router = require('express').Router();
const { verifyPermissions, verifyJwt } = require("./common/authentication")
//user
const {
    login,
    signUp,
    resetPassword,
    checkOtp,
    sendOtp,
    createTest,
    getMyTest,
    startTest,

    initiateTestForUser,
    getUserTestDetails,
    saveUserTest,
    endUserTest,
    attachLandingPagetoTest,

    getResult,
    uploadFile,
    getMailingList,
    addMailingList,
    deleteMailingList,
    updateMailingList,
    addMailingListUser,
    getMailingListUser,
    updateMailingListUser,
    deleteMailingListUser,

    getLandingPage,
    addLandingPage,
    updateLandingPage,
    deleteLandingPage,
    submitLandingPageDetails,
    getAttachedTest,

    getUserTestHistory,
    deleteUserTestHistory

} = require('./controllers/index');


//admin
router.post('/api/user/login', login);
router.post('/api/user/signUp', signUp);
// router.post('/api/user/resetPassword', resetPassword);
// router.post('/api/user/checkOtp', checkOtp);
// router.post('/api/user/sendOtp', sendOtp);

//Test
router.post('/api/test/createTest', verifyJwt, createTest);
router.post('/api/test/getMyTest', verifyJwt, getMyTest);
router.post('/api/test/uploadFile', uploadFile);


//userTest
router.post('/api/userTest/submitLandingPageDetails', submitLandingPageDetails);
router.post('/api/userTest/startTest', startTest);
router.post('/api/userTest/endUserTest', endUserTest);
router.post('/api/userTest/attachLandingPagetoTest', attachLandingPagetoTest);



router.post('/api/userTest/initiateTestForUser', verifyJwt, initiateTestForUser);
router.post('/api/userTest/getUserTestDetails', getUserTestDetails);
router.post('/api/userTest/saveuserTest', verifyJwt, saveUserTest);
router.post('/api/userTest/getResult', getResult);
router.post('/api/userTest/getUserTestHistory', verifyJwt, getUserTestHistory);
router.post('/api/userTest/deleteUserTestHistory', verifyJwt, deleteUserTestHistory);

//Mailing List
router.post('/api/mailingList/getMailingList', verifyJwt, getMailingList);
router.post('/api/mailingList/addMailingList', verifyJwt, addMailingList);
router.post('/api/mailingList/deleteMailingList', verifyJwt, deleteMailingList);
router.post('/api/mailingList/updateMailingList', verifyJwt, updateMailingList);

//Mailing List User
router.post('/api/mailingListUser/addMailingListUser', verifyJwt, addMailingListUser);
router.post('/api/mailingListUser/getMailingListUser', verifyJwt, getMailingListUser);
router.post('/api/mailingListUser/deleteMailingListUser', verifyJwt, deleteMailingListUser);
router.post('/api/mailingListUser/updateMailingListUser', verifyJwt, updateMailingListUser);

//Landing Pages
router.post('/api/landingPage/getLandingPage', verifyJwt, getLandingPage);
router.post('/api/landingPage/addLandingPage', verifyJwt, addLandingPage);
router.post('/api/landingPage/updateLandingPage', verifyJwt, updateLandingPage);
router.post('/api/landingPage/deleteLandingPage', verifyJwt, deleteLandingPage);
router.post('/api/landingPage/getAttachedTest', verifyJwt, getAttachedTest);


module.exports = router;
