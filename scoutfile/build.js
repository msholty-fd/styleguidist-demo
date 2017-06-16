var fs = require('fs');
var scoutfile = require('scoutfile');
var hash = process.argv[2];

if (!hash) {
  console.log('Cannot build scoutfile without a scout hash. Please pass in a scout hash as an argument');
  process.exit();
}
scoutfile.generate({
  appModules: [{
    name: 'styleguide',
    path: './scoutfile/app-scout.js'
  }],
  appConfig: {
    hash,
  },
  pretty: true
}).then(function(scoutfile) {
  fs.writeFileSync('./dist/scout.js', scoutfile, 'utf-8');
});
