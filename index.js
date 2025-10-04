var robot = require('robotjs');

function main() {
  console.log('starting');
  sleep(2000);

  robot.moveMouse(331, 743);
  robot.mouseClick();
  sleep(1000);

  robot.moveMouse(349, 769);
  robot.mouseClick();
  sleep(1000);

  robot.moveMouse(52, 572);
  robot.mouseClick();
  sleep(1000);

  robot.moveMouse(64, 646);
  robot.mouseClick();
  sleep(1000);
  console.log('done');
}

function sleep(ms) {
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
}

main();
