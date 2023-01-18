const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Characters = require("../models/Characters.js");

router.get("/", (req, res, next) => {
  Characters.find((error, characters) => {
    if (error) return next(error);
    res.json(characters);
  });
});

router.get("/:id", (req, res, next) => {
  Characters.findById(req.params.id, (error, characters) => {
    if (error) return next(error);
    res.json(characters);
  });
});

router.post("/", (req, res, next) => {
  Characters.create(req.body, (error, post) => {
    if (error) return next(error);
    res.json(post);
  });
});

router.put("/:id", (req, res, next) => {
  Characters.findByIdAndUpdate(req.params.id, req.body, (error, put) => {
    if (error) return next(error);
    res.json(put);
  });
});

router.delete("/:id", (req, res, next) => {
  Characters.findOneAndDelete(req.params.id, (error, del) => {
    if (error) return next(error);
    res.json(del);
  });
});
module.exports = router;
