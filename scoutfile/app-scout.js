var loader = require('scoutfile/lib/browser/loader');
var appConfig = require('scoutfile/lib/browser/appConfig');
var config = require('json!./config.json');
// TODO: remove front-end bucket reference
var baseStyleguideUrl = config.scoutHost + 'front-end';
var styleguideVersion = getQueryVariable('styleguide');

if (styleguideVersion === 'dev') {
  baseStyleguideUrl = config.scoutHostLocal;
} else if (styleguideVersion) {
  // TODO: remove the styleguide folder altogether here once bucket is created
  baseStyleguideUrl += '-dev/styleguide/' + styleguideVersion + '/';
} else {
  baseStyleguideUrl += '-prod/styleguide/' + appConfig.hash + '/';
}

loader.loadScript(baseStyleguideUrl + config.styleguideJS, function() {
  loader.loadScript(baseStyleguideUrl + config.styleguideChunkJS);
});

function getQueryVariable(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split('&');

  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split('=');
    if (pair[0] == variable) {
      return pair[1];
    }
  }
  return false;
}
