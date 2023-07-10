const robot = require('robotjs')
require('dotenv').config()

const work = () => {
    setInterval(()=> {
        //typing
        robot.typeString(process.env.TYPING_STRING);
        robot.keyTap("enter");
        //mouse scroll
        robot.scrollMouse(process.env.MOUSE_X_POSITION, process.env.MOUSE_Y_POSITION);
        //move mouse
        // robot.moveMouse(0, 0);
        // robot.mouseToggle("down");
        // robot.dragMouse(100, 100);
        // robot.mouseToggle("up");
        //mouse click
        robot.mouseClick();
    }, process.env.REPEAT_TIME)  
    
}
work()
// Type "Hello World".
