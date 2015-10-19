
var totalFrames = 18;
var frameWidth = 174;
var speed = 1.5;
  
var walkEase = new SteppedEase(totalFrames)
var finalPosition = '-' + (frameWidth * totalFrames) + 'px 0px';

var walkTL = new TimelineMax()
walkTL.to('#walker', speed, {
    backgroundPosition: finalPosition,
    ease: walkEase,
    repeat: -1
})
