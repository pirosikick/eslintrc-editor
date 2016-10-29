#!/bin/bash

DIR=dist/libs

mkdir -p $DIR

cp node_modules/react/dist/react.min.js $DIR
cp node_modules/react/dist/react.js $DIR
cp node_modules/react-dom/dist/react-dom.min.js $DIR
cp node_modules/react-dom/dist/react-dom.js $DIR
cp node_modules/immutable/dist/immutable.min.js $DIR
cp node_modules/immutable/dist/immutable.js $DIR
cp node_modules/github-markdown-css/github-markdown.css $DIR
cp node_modules/purecss/build/pure*.css $DIR
cp node_modules/font-awesome/css/* $DIR
