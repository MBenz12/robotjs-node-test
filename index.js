var express = require('express');
var router = express.Router();
const robot = require('robotjs');
const http = require('http');
const hostname = 'localhost';
const port = 1012;

// const server = http.createServer((req, res) => {

  // robot.setMouseDelay(10);

  // const PI = Math.PI;
  // let angle;
  // let x = 500;
  // let y = 500;
  // let r = 30;
  // for (let i = 0; i < 360 * 1000; i += 1) {
  //   angle = i;
  //   x1 = r * Math.cos(angle * PI / 180);
  //   y1 = r * Math.sin(angle * PI / 180);
  //   robot.moveMouse(x + x1, y + y1);
  //   // if ((i / 360) % 2) robot.mouseToggle("down");
  //   // else robot.mouseToggle("up");
  // }
  // for (var x = 0; x < height; x++) {
  //   y = height * Math.sin((twoPI * x) / width) + 100;
  //   robot.moveMouse(x, y);
  // }
  // robot.scrollMouse(0, 50);

  // setInterval(() => {
  //   robot.keyTap('down')
  //   robot.keyTap('up')
  // }, 1000 * 30)

  // setInterval(() => {
  //   robot.keyTap('home')
  // }, 1000 * 120)
  let prevX = 0, prevY = 0;
  // setInterval(() => {
  //   const { x, y } = robot.getMousePos();
  //   if (x === prevX && y === prevY) {
  //     robot.keyTap('tab', ['alt']);
  //   }
  //   prevX = x, prevY = y;
  // }, 1000 * 20)

  setInterval(() => {
    const { x, y } = robot.getMousePos();
    if (x === prevX && y === prevY) {
      robot.moveMouse(x + (Math.random() - 0.5) * 20, y + (Math.random() - 0.5) * 20)
      // robot.keyTap('down')
      // setTimeout(() => {
        robot.keyTap('down')
        robot.keyTap('up')
      // }, 1000 * 30);
    }
    prevX = x, prevY = y;
  }, 1000 * 5)

//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
