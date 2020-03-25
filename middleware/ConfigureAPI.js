const express = require('express');
const helmet = require('helmet');
const corse = require('cors');
const morgan = require("morgan")
const logger = require("./Logger")

module.exports = server => {
    server.use(express.json());
    server.use(helmet());
    server.use(corse());
    server.use(morgan(':method :url :status :res[content-length] - :response-time ms'))
    server.use(logger);
    
}
 