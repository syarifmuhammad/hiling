module.exports = {
  content: [
    "./src/**/*.{html,vue,js}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('./src/assets/hero2.jpg')",
      },
      fontFamily: {
        'roboto': ['Roboto', 'serif'],
        'montez': ['Montez', 'serif'],
      },
      boxShadow: {
        'custom': '0 4px 30px rgba(0, 0, 0, 0.1)',
      },
      colors: {
        'cta': "#FFD85A"
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
