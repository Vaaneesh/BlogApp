// Frontend/app.js

document.addEventListener('DOMContentLoaded', () => {
    const blogList = document.getElementById('blogList');
    const addBlogForm = document.getElementById('blogForm');
  
    // Function to fetch and display blogs
    const fetchBlogs = async () => {
      const response = await fetch('http://localhost:3001/api/blogs');
      const blogs = await response.json();
  
      // Clear existing content
      blogList.innerHTML = '';
  
      // Display each blog in the list
      blogs.forEach(blog => {
        const blogItem = document.createElement('div');
        blogItem.innerHTML = `<h3>${blog.title}</h3><p>${blog.content}</p>`;
        blogList.appendChild(blogItem);
      });
    };
  
    // Event listener for form submission
    addBlogForm.addEventListener('submit', async (event) => {
      event.preventDefault();
  
      const title = document.getElementById('title').value;
      const content = document.getElementById('content').value;
  
      // Send a POST request to create a new blog
      const response = await fetch('http://localhost:3001/api/blogs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, content }),
      });
  
      if (response.ok) {
        // Blog added successfully, refresh the blog list
        fetchBlogs();
      } else {
        console.error('Failed to add blog');
      }
    });
  
    // Fetch and display blogs when the page loads
    fetchBlogs();
  });
  