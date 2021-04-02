const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const nnsubjectSchema = mongoose.Schema(
  {
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    department: {
      type: String
    },
    grade: {
      type: Number
    },
    subjectName: {
      type: String
    },
    professorName: {
      type: String
    },
    subjectType: {
      type: String
    },
    subjectPoint: {
      type: Number
    },
    date: {
      type: String
    },
    subjectCode: {
      type: Number
    },
    classroom: {
      type: String
    },
    division: {
      type: Number
    },
    rate: {
      type: String
    }, 
    countApply: {
        type: Number
      },
    limitApply: {
      type: Number
    },
    competitionRate: {
        type: String
      }
    },
  { timestamps: true }
);

const nnSubject = mongoose.model("nnSubject", nnsubjectSchema);

module.exports = { nnSubject };
