/* 配合蓝盾发布到腾讯CDN */

const pkg = require('../package.json');
const { exec } = require('child_process');

exec(`mkdir dist/${pkg.version} & mv dist/weui.js dist/weui.min.js dist/${pkg.version}`);
