const db = require("../models");
const { notice : Notice } = db;
const moment = require("moment");

// 게시판 CRUD

exports.create = async (req, res) => {
    const { email } = req.body
    console.log('접속', email)
    await Notice.findOne({ email : email})
        .then(result => {
            if (result) {
                return res.status(409).json({ message : "Email is already registered"})
            } else {
                const notice = new Notice({
                    email : email,
                    createdAt : moment().format("YYYY-MM-DD hh:mm:ss")
                })
                notice.save()
                    .then(()=> {
                            return res.status(200).json({ message : "Success"})
                    })
                    .catch(err => res.json(err))
            }
        })
        .catch(err => {
            console.error(err);
            return res.json(err)
        })
}

exports.findAll = async (req, res) => {
    await Notice.find({})
        .sort("-createdAt")
        .then(result=>{
            res.json(result)
        })
        .catch((err)=>{
            res.json(err)
        })
}