const posts = require('../data/posts.js')

function index(req,res){
    res.json({
        count : posts.length,
        posts: posts
    })
}

module.exports = {
    index
}