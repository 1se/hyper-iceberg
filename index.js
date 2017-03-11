exports.decorateConfig = config => {
  return Object.assign({}, config, {
    foregroundColor: '#c6c8d1',
    backgroundColor: '#161821',
    borderColor: '#161821',
    cursorColor: config.cursorColor || '#c6c8d1',
    colors: {
      black: '#272c42',
      red: '#e27878',
      green: '#b4be82',
      yellow: '#e4aa80',
      blue: '#84a0c6',
      magenta: '#a093c7',
      cyan: '#89b8c2',
      white: '#6b7089',
      lightBlack: '#3d425b',
      lightRed: '#e27878',
      lightGreen: '#b4be82',
      lightYellow: '#e4aa80',
      lightBlue: '#84a0c6',
      lightMagenta: '#a093c7',
      lightCyan: '#89b8c2',
      lightWhite: '#c6c8d1'
    }
  });
};
