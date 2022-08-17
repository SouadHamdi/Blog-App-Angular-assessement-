
const Blog =require('../database-mongodb/Blog');


 const FetchBlogs = async (req, res) => { 
    try {
        const Blogs = await Blog.find();
                
        res.status(200).json(Blogs);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

 const FetchOneBlog = async (req, res) => { 
    const { id } = req.params;

    try {
        const blog = await Blog.findById(id);
        
        res.status(200).json(blog);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

 const AddBlog = async (req, res) => {
    const { title, author, content } = req.body;

    const newBlog = new Blog({ title, content, author})

    try {
        await newBlog.save();

        res.status(201).json(newBlog );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}
const upVote = async (req, res) => {
    const {id} = req.params;
    var temp=req.body.upVote+1
    const update = {upvote:temp}
    try {
        const blog = await Blog.findOneAndUpdate(id,update);
        
        res.status(201).json({message:"updated"});
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
const downVote = async (req, res) => {
    console.log(req.body.downvote);

    const {id} = req.params;
    var temp=req.body.downvote+1
    const update = {downvote:temp}
    try {
        const blog = await Blog.findOneAndUpdate(id,update);
        
        res.status(201).json({message:"updated"});
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


module.exports ={AddBlog,FetchOneBlog,FetchBlogs,upVote,downVote};

