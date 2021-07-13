export const foregroundColor = ([r, g, b]) => (
  r + g + b < 384 ? 'white' : 'black'
);
