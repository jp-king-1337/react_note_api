const { Schema, model, Types } = require("mongoose");

const noteSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    author: {
        type: Types.ObjectId,
        ref: "User",
        required: true
    }
}, {
    timestamps: true
});

const Note = model("Note", noteSchema);

module.exports = Note;