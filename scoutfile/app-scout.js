var loader = require('scoutfile/lib/browser/loader');
var appConfig = require('scoutfile/lib/browser/appConfig');
var config = require('json!./config.json');
var baseStyleguideUrl = config.scoutHost + 'styleguide';
var styleguideVersion = getQueryVariable('styleguide');

if (styleguideVersion === 'dev') {
  baseStyleguideUrl = config.scoutHostLocal;
} else if (styleguideVersion) {
  baseStyleguideUrl += '-dev/' + styleguideVersion + '/';
} else {
  baseStyleguideUrl += '-prod/' + appConfig.hash + '/';
}

loader.loadScript(baseStyleguideUrl + config.styleguideJS);

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
