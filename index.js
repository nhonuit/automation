const robot = require("robotjs");
require("dotenv").config();

const work = () => {
  setInterval(() => {
    //typing
    if (process.env.NEED_TYPING) {
      robot.typeString(process.env.TYPING_STRING);
      robot.keyTap("enter");
      robot.keyTap(process.env.KEY_TAP);
    }
    //mouse scroll
    if (process.env.NEED_SCROLL_MOUSE) {
      robot.scrollMouse(
        process.env.MOUSE_X_POSITION,
        process.env.MOUSE_Y_POSITION
      );
    }
    //move mouse
    if (process.env.NEED_MOVE_MOUSE) {
      robot.moveMouse(0, 0);
      robot.mouseToggle("down");
      robot.dragMouse(100, 100);
      robot.mouseToggle("up");
    }
    if (process.env.NEED_CLICK_MOUSE) {
      robot.mouseClick();
    }
    //mouse click
  }, process.env.REPEAT_TIME);
};
work();
