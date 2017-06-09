module.exports = {
  title: 'SharpSpring Style Guide',
  require: [
    './styleguide/icons.css'
  ],
  sections: [
    {
      name: 'Colors',
      content: './src/colors/colors.md'
    },
    {
      name: 'Icons',
      content: './src/icons/README.md',
      components: './src/icons/**/*.jsx'
    },
    {
      name: 'Components',
      components: './src/components/**/*.jsx'
    }
  ]
}
