const exec = require('child_process').exec;
const isProduction = process.env.NODE_ENV === 'production';

function deploy(bucket) {
  const source = 'dist/scout.js';
  // TODO: remove front-end bucket
  const destination = `gs://${bucket}/styleguide/scout.js`;
  const cmd = `gsutil -h 'Cache-Control:public, max-age=300' cp -a public-read ${source} ${destination}`;
  exec(cmd, function(error) {
    if (error) {
      console.log(error);
    }
  });
}

if (isProduction) {
  deploy('front-end-prod');
} else {
  deploy('front-end-dev');
}