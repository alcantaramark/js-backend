const Post = require("./model/post");
const postData = require("./data/post.json");

require("./config")();

const seedData = async() => {
    try{
        await Post.insertMany(postData);
        console.log("Data is seeded");
    }
    catch(err){
        console.error("Error seeding data", err.message);
    }
};

seedData();