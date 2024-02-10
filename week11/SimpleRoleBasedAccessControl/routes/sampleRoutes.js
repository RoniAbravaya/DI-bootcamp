const express = require('express');
const router = express.Router();
const rbacMiddleware = require('../middleware/rbacMiddleware');
const sampleController = require('../controllers/sampleController');

// Public route accessible to all users
router.get('/public', sampleController.publicRoute);

// User profile route accessible to authenticated users (user and admin)
router.get('/user-profile', rbacMiddleware, sampleController.userProfileRoute);

// Admin panel route accessible only to users with the admin role
router.get('/admin-panel', rbacMiddleware, sampleController.adminPanelRoute);

// module.exports = router;
