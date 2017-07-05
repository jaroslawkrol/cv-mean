var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://cv:cvpass@ds149132.mlab.com:49132/cv-database', ['education', 'experience', 'skills', 'personal'])

router.get('/education', function (req, res, next) {
    db.education.find(function (err, education) {
        if(err) {
            res.send(err);
        }
        res.json(education)
    })
});

router.get('/experience', function (req, res, next) {
    db.experience.find(function (err, experience) {
        if(err) {
            res.send(err);
        }
        res.json(experience)
    })
});

router.get('/skills', function (req, res, next) {
    db.skills.find(function (err, skills) {
        if(err) {
            res.send(err);
        }
        res.json(skills)
    })
});

router.get('/personal', function (req, res, next) {
    db.personal.find(function (err, personal) {
        if(err) {
            res.send(err);
        }
        res.json(personal)
    })
});

module.exports = router;