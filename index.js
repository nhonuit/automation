const robot = require("robotjs");
// Speed up the mouse.
robot.setMouseDelay(3);
const twoPI = Math.PI * 2.0;
const screenSize = robot.getScreenSize();
const height = screenSize.height / 2 - 10;
const width = screenSize.width;

const config = {
  clicking: true,
  switching: true,
  typing: true,
};

//
const switchTab = () => {
  robot.keyToggle("control", "down");
  robot.keyTap("tab"); // Pressing the Tab key
  robot.keyToggle("control", "up");
};
// get current time
const timeStart = new Date().getTime();
let switchTabTimes = 1;
const randomSwitchTime = () => Math.floor(Math.random() * (600000 - 360000 + 1)) + 360000;
let timeToSwitch = 480000;
do {
  const timeNow = new Date().getTime();
  for (var x = 0; x < width; x++) {
    y = height * Math.sin((twoPI * x) / width) + height;
    robot.moveMouse(x, y);
  }
  // random true or false
  const randomMouseClick = Math.random() >= 0.4;
  const randomkeyUp = Math.random() >= 0.5;
  const randomkeyDown = Math.random() >= 0.5;
  const randomkeyLeft = Math.random() >= 0.5;
  const randomkeyRight = Math.random() >= 0.5;

  const randomScroll = Math.random() >= 0.9;
  if (randomScroll) {
    robot.scrollMouse(0, -3);
  }

  if (timeToSwitch < (timeNow - timeStart) / switchTabTimes) {
      console.log("switch");
      switchTab();
      timeToSwitch = randomSwitchTime();
      switchTabTimes++;
    }
  if (config.clicking) {
    if (randomMouseClick) {
      console.log("clicked");
      robot.mouseClick();
    }
  }
  if (config.typing) {
    if (randomkeyUp) {
      robot.keyTap("up");
    }

    if (randomkeyDown) {
      robot.keyTap("down");
    }

    if (randomkeyLeft) {
      robot.keyTap("left");
    }

    if (randomkeyRight) {
      robot.keyTap("right");
    }
  }
} while (true);
