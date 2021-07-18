export const plusButtonStyle = (width) => `
  width: ${width};
  height: ${width};
  font-size: calc(${width} * 0.8);
  padding: 0;
  border: 2px solid #99c;
  border-radius: 50%;
  background-color: #ccf;
  color: #339;
`;

export const closeButtonStyle = (width) => `
  ${plusButtonStyle(width)}
  position: absolute;
  right: 7px;
  font-size: 12px;
  background-color: #ccc;
  border-color: #999;
`;

export const dialogBackgroundStyle = `
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  font-family: sans-serif;
  font-size: 24px;
`;

export const dialogWindowStyle = `
  position: absolute;
  top: 50vh;
  left: 50vw;
  transform: translate(-50%, -50%);
  border-radius: 12px;
  padding: 12px;
  background-color: white;
`;
