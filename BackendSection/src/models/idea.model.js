const { mongoose } = require("mongoose");
const { Schema } = monggose;

const IdeaSchema = new Schema({
    idea: { type: String, required: true },
    description: { type: String },
    author: { type: String, required: true },
    upvotes: [{ type: boolean }],
    downvotes: [{ type: boolean }],
    author: { type: Schema.Types.ObjectId, ref: "user", required: true, autopopulate: true },
    comments: [{ type: Schema.Types.ObjectId, ref: "comment", required: true, autopopulate: true }]
});

IdeaSchema.plugin(require("mongoose-autopopulate"));

module.exports = mongoose.model("idea", IdeaSchema);