// routes/blogRoutes.js

const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');

// Routes
router.get('/', blogController.getAllBlogs);
router.post('/', blogController.createBlog);
// Add routes for other CRUD operations (getBlogById, updateBlog, deleteBlog)

module.exports = router;
