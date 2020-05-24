const mongoose = require('mongoose');
const { Schema } = mongoose ;

const Comment = new Schema({
    text: String,
    user: { type: Schema.Types.ObjectId, ref: 'Account' },  // id of account
    post: { type: Schema.Types.ObjectId, ref: 'Post' },     // id of post
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    deleted: { type: Boolean, default: false }
});

module.exports = mongoose.model('Comment', Comment);