// requests library
const axios = require("axios");

// your choice of HTML parser
const cheerio = require("cheerio");
const jsdom = require("jsdom");

const express = require("express");

const createService = () => {
  const app = express();
  let pageNo = 1;
  
  axios({
    url: 'page/' + pageNo,
    baseURL: 'http://quotes.toscrape.com',
    method: 'get'
  }).then(response => {
    console.log("Data from URL: %o", response.data);
  }).catch((error) => {
    console.log("Failed to fetch quotes from URL");
    return false;
  })
  
  app.get('/quotes', (req, res) => {
    res.send({
      "data": []
    }).status(200);
  });
  
  app.get('/quotes/:author', (req, res) => {
    res.send({
      "data": []
    }).status(200);
  });
  
  app.get('/quotes/:tag', (req, res) => {
    res.send({
      "data": []
    }).status(200);
  });
  
  app.get('/authors', (req, res) => {
    res.send({
      "data": []
    }).status(200);
  });
  
  app.get('/authors/:name', (req, res) => {
    res.send({
      "data": []
    }).status(200);
  });
  
  
  return app;
};

module.exports = { createService }; 