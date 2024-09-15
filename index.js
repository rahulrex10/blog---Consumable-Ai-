const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

// Initialize Express App
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Create MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',  // Replace with your MySQL password
  database: 'blog_db',
});

// Connect to MySQL
db.connect((err) => {
  if (err) throw err;
  console.log('MySQL connected...');
});

// Get all posts
app.get('/posts', (req, res) => {
  const sql = 'SELECT * FROM posts';
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.json({ posts: results });
  });
});

// Get a single post by ID
app.get('/posts/:id', (req, res) => {
  const sql = 'SELECT * FROM posts WHERE id = ?';
  db.query(sql, [req.params.id], (err, result) => {
    if (err) throw err;
    res.json({ post: result });
  });
});

// Create a new post
app.post('/posts', (req, res) => {
  const { title, content } = req.body;
  if (!title || !content) {
    return res.status(400).json({ error: 'Title and content are required' });
  }
  const sql = 'INSERT INTO posts (title, content) VALUES (?, ?)';
  db.query(sql, [title, content], (err, result) => {
    if (err) throw err;
    res.json({ postId: result.insertId });
  });
});

// Delete a post
app.delete('/posts/:id', (req, res) => {
  const sql = 'DELETE FROM posts WHERE id = ?';
  db.query(sql, [req.params.id], (err, result) => {
    if (err) throw err;
    res.json({ deleted: result.affectedRows });
  });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
