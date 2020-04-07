const path = require('path');
module.exports = [
  {
    path: '/',
    component: path.resolve(`src/containers/index.js`),
  },
  {
    path: '/zajecia',
    component: path.resolve(`src/containers/classes.js`),
  },
  {
    path: '/blog',
    component: path.resolve(`src/containers/blog.js`),
  },
  {
    path: '/o-mnie',
    component: path.resolve(`src/containers/about.js`),
  },
  {
    path: '/rodzice',
    component: path.resolve(`src/containers/parents.js`),
  },
  {
    path: '/dzieci',
    component: path.resolve(`src/containers/children.js`),
  },
  {
    path: '/404/',
    component: path.resolve(`src/containers/404.js`),
  },
];