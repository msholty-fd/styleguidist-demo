var fs = require('fs');
var scoutfile = require('scoutfile');
var git = require('git-rev');

function build(hash) {
  scoutfile.generate({
    appModules: [{
      name: 'styleguide',
      path: './scoutfile/app-scout.js'
    }],
    appConfig: { hash: hash },
    pretty: true
  }).then(function(scoutfile) {
    fs.writeFileSync('./dist/scout.js', scoutfile, 'utf-8');
  });
}

git.short(build);
