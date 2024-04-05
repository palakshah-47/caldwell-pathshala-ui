/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        headerBackGround: '#FF9900',
        hearderText: '#610B0B',
        body: '#fff',
        linkBackGround: '#610B0B',
        linkText: '#dde4ec',
        navigationBackGround: '#FF9900',
        hoverLinkBackGround: '#F5D0A9',
        linkHover: '#465c71',
      },
      fontFamily: {
        body: [
          'Helvetica Neue',
          'Lucida Grande',
          'Segoe UI',
          'Arial',
          'Helvetica',
          'Verdana',
          'sans-serif',
        ],
      },
      fontSize: {
        titleclamp: 'clamp(1.5rem, 1.5vw, 5rem)',
        subtitleclamp: 'clamp(1rem, 0.5vw, 5rem)',
      },
      fontColor: {
        body: '#696969',
      },
      borderColor: {
        body: '#496077',
        link: '#FF9900',
      },
      screens: { sm: { max: '340px' } },
      variants: {
        display: ['group-hover'],
      },
    },
  },
  plugins: [],
};

