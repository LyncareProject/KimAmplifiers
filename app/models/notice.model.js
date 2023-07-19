const mongoose = require("mongoose");
const moment = require("moment");

const noticeSchema = new mongoose.Schema({
    email : { type: String, required: true },
})

const Notice = mongoose.model("notice", noticeSchema);

module.exports = Notice;