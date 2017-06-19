const git = require('git-rev');
const exec = require('child_process').exec;
const isProduction = process.env.NODE_ENV === 'production';

git.short(function(sha1) {
  console.log(`hash=${sha1}`);
  if (isProduction) {
    // TODO: change this to the styleguide bucket when they are created
    deploy(sha1, 'front-end-prod/styleguide');
  } else {
    deploy(sha1, 'front-end-dev/styleguide');
  }
});

function deploy(sha1, bucket) {
  const source = `dist/*`;
  const destination = `gs://${bucket}/${sha1}/`;
  const cmd = `gsutil -h 'Cache-Control:public, max-age=31536000' cp -a public-read ${source} ${destination}`;
  exec(cmd, function(error, stdout, stderr) {
    console.log(error);
  });
}
