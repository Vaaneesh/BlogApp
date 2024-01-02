// controllers/blogController.js

const Blog = require('../models/Blog');

// Function to get all blogs
const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (error) {
    console.error('Error getting blogs:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Function to create a new blog
const createBlog = async (req, res) => {
  try {
    const { title, content } = req.body;

    // Validate input (you can add more validation as needed)

    // Create a new blog instance
    const newBlog = new Blog({
      title,
      content,
    });

    // Save the new blog to the database
    await newBlog.save();

    // Respond with the newly created blog
    res.status(201).json(newBlog);
  } catch (error) {
    console.error('Error creating blog:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Include other functions as needed (getBlogById, updateBlog, deleteBlog)

module.exports = {
  getAllBlogs,
  createBlog,
  // Include other exported functions
};
