#!/bin/bash

# beautify and run unit-test
./node_modules/js-beautify/js/bin/js-beautify.js $1 -r
./node_modules/mocha/bin/mocha $1

