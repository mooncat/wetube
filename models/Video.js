import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema({
    fileUrl: {
        type: String,
        required: "File URL is required"
      },
      title: {
        type: String,
        required: "Tilte is required"
      },
      description: String,
      views: {
        type: Number,
        default: 0
      },
      createdAt: {
        type: Date,
        default: Date.now
      },
      comments: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Comment"
        }
      ]
});

// Comment id들을 array 로 video에 집어넣을 것인가.
// 혹은 Comment에 연결된 Video id를 줄 것인가.

const model = mongoose.model("Video", VideoSchema);
export default model;

