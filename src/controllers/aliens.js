/* eslint-disable new-cap */

import express from 'express';
const router = module.exports = express.Router();

router.get('/', (req, res) => {
  res.render('aliens/index');
});

router.get('/new', (req, res) => {
  res.render('aliens/new');
});

router.get('/:id', (req, res) => {
  res.render('aliens/show');
});

router.post('/', (req, res) => {
  res.redirect('/aliens');
});
