#!/bin/bash

DIR=dist
LIBS_DIR=$DIR/libs
DOCS_DIR=$DIR/docs
FONTS_DIR=$DIR/fonts

mkdir -p $LIBS_DIR
mkdir -p $DOCS_DIR
mkdir -p $FONTS_DIR

cp node_modules/react/dist/react.min.js $LIBS_DIR
cp node_modules/react/dist/react.js $LIBS_DIR
cp node_modules/react-dom/dist/react-dom.min.js $LIBS_DIR
cp node_modules/react-dom/dist/react-dom.js $LIBS_DIR
cp node_modules/immutable/dist/immutable.min.js $LIBS_DIR
cp node_modules/immutable/dist/immutable.js $LIBS_DIR
cp node_modules/github-markdown-css/github-markdown.css $LIBS_DIR
cp node_modules/purecss/build/pure*.css $LIBS_DIR
cp node_modules/font-awesome/css/* $LIBS_DIR

cp -r eslint/docs/* $DOCS_DIR

cp -r node_modules/font-awesome/fonts/* $FONTS_DIR
