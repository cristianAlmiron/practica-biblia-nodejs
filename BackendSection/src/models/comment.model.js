const { mongoose } = require("mongoose");
const { Schema } = monggose;

const CommentSchema = new Schema({
    commment: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: "user", required: true, autopopulate: true },
    description: { type: String },
});

CommentSchema.plugin(require("mongoose-autopopulate"));



module.exports = mongoose.model("comment", CommentSchema);