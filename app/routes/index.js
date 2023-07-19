const express = require('express');
const router = express.Router();

const noticeRouter = require('./notice.routes');

router.use('/notice', noticeRouter);

module.exports = router;