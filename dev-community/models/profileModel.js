const mongoose = require("mongoose");

const { Schema } = mongoose;

const ProfileSchema = new Schema({
    profileImg: { type: String, required: true },
    experience: { type: String, required: true },
    githubProfile: { type: String, required: true },
    linkedinProfile: { type: String, required: true },
    codingPlatform: { type: [String], required: true },
    Skills: { type: [String], required: true },
    location: { type: [String], required: true },
    achievement: { type: String,  required: true }
},{
    timestamps:true
})

module.exports = mongoose.model("Profile", ProfileSchema);