const express = require('express');
const router = express.Router();
const axios = require('axios');

require('dotenv').config();

router.get('/homepage', async(req, res, next) => {
   try {
      let results = await axios.get(`https://graph.instagram.com/me/media?fields=id,media_type,permalink,media_url&access_token=${process.env.IG_ACC_TOKEN}`)
      res.status(200).send(results.data)
   } catch (err) {
      return next(err)
   }
})

router.get('/pastevents', async(req, res, next) => {
   try {
      let results = await axios.get(`https://graph.instagram.com/me/media?fields=id,media_type,permalink,media_url&access_token=${process.env.IG_ACC_TOKEN_ADMIN}`)
      res.status(200).send(results.data)
   } catch {
      return next(err)
   }
})

module.exports = router;