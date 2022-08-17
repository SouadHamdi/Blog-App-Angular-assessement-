const { application } = require('express');
const express =require('express');
const { FetchBlogs, AddBlog, FetchOneBlog,upVote,downVote} =require( '../controllers/blogs.js');

const router = express.Router();
router.get('/', FetchBlogs);
router.get('/:id', FetchOneBlog);
router.post('/create', AddBlog);
router.put('/upvote/:id',upVote);
router.put('/downvote/:id',downVote)

module.exports= router; 