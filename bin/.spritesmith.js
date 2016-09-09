'use strict';

var util = require('util');

module.exports = {
  src: './src/css/sprite/*.{png, gif, jpg}',
  destImage: './docs/css/sprite/sprite.png',
  destCSS: './src/css/_sprite.scss',
  padding: 20,
  algorithm: 'top-down',
  algorithmOpts: { sort: false },
  imgPath: '../css/sprite/sprite.png',
  cssOpts: {
    cssClass: function (item) {
      return util.format('.sprite-%s',  item.name);
    }
  }
};
