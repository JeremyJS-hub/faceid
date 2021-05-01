import { Finger, FingerCurl, FingerDirection } from '/node_modules/fingerpose/src/FingerDescription.js'
import GestureDescription from '/node_modules/fingerpose/src/GestureDescription.js';

export default function threeZeroGesture(){
    const cg = new GestureDescription('3Zero');

    //left hand thumb curve:
    cg.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1.0);
    cg.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);

    //left hand thumb direction:
    cg.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);

    //left hand index curve:
    cg.addCurl(Finger.Index, FingerCurl.FullCurl, 1.0);
    cg.addCurl(Finger.Index, FingerCurl.HalfCurl, 1.0);

    //left hand index direction:
    cg.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);

    //left hand middle curve:
    cg.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);

    //left hand middle direction:
    cg.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 1.0);

    //left hand ring curve:
    cg.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);

    //left hand ring direction:
    cg.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 1.0);

    //left hand pinky curve:
    cg.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);

    //left hand pinky direction:
    cg.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 1.0);

    // give additional weight to index and ring fingers
    cg.setWeight(Finger.Index, 2);
    cg.setWeight(Finger.Middle, 2);

    return cg;
}

export function thumpUpGesture(){
    const cg = new GestureDescription('thump_up');

    //left hand thumb curve:
    cg.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);

    //left hand thumb direction:
    cg.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);

    //left hand index curve:
    cg.addCurl(Finger.Index, FingerCurl.FullCurl, 1.0);

    //left hand index direction:
    cg.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 1.0);

    //left hand middle curve:
    cg.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);

    //left hand middle direction:
    cg.addDirection(Finger.Middle, FingerDirection.HorizontalLeft, 1.0);

    //left hand ring curve:
    cg.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);

    //left hand ring direction:
    cg.addDirection(Finger.Ring, FingerDirection.HorizontalLeft, 1.0);

    //left hand pinky curve:
    cg.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);

    //left hand pinky direction:
    cg.addDirection(Finger.Pinky, FingerDirection.HorizontalLeft, 1.0);

    // give additional weight to index and ring fingers
    cg.setWeight(Finger.Index, 2);
    cg.setWeight(Finger.Middle, 2);

    return cg;
}

export function victoryGesture(){
    const cg = new GestureDescription('victory');

    //left hand thumb curve:
    cg.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
    cg.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1.0);

    //left hand thumb direction:
    cg.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);

    //left hand index curve:
    cg.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);

    //left hand index direction:
    cg.addDirection(Finger.Index, FingerDirection.VerticalUp, .75);
    cg.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);

    //left hand middle curve:
    cg.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);

    //left hand middle direction:
    cg.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);
    cg.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, .75);

    //left hand ring curve:
    cg.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);

    //left hand ring direction:
    cg.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 1.0);

    //left hand pinky curve:
    cg.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);

    //left hand pinky direction:
    cg.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 1.0);

    // give additional weight to index and ring fingers
    cg.setWeight(Finger.Index, 2);
    cg.setWeight(Finger.Middle, 2);

    return cg;
}

export function closedFistGesture(){
    const cg = new GestureDescription('closedFist');

    //left hand thumb curve:
    cg.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
    cg.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1.0);

    //left hand thumb direction:
    cg.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);
    cg.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 1.0);

    //left hand index curve:
    cg.addCurl(Finger.Index, FingerCurl.FullCurl, 1.0);

    //left hand index direction:
    cg.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);

    //left hand middle curve:
    cg.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);

    //left hand middle direction:
    cg.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);

    //left hand ring curve:
    cg.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);

    //left hand ring direction:
    cg.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1.0);

    //left hand pinky curve:
    cg.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);

    //left hand pinky direction:
    cg.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1.0);

    // give additional weight to index and ring fingers
    cg.setWeight(Finger.Index, 2);
    cg.setWeight(Finger.Middle, 2);

    return cg;
}

export function callGesture(){
    const cg = new GestureDescription('call');

    //left hand thumb curve:
    cg.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);

    //left hand thumb direction:
    cg.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1.0);

   //left hand index curve:
   cg.addCurl(Finger.Index, FingerCurl.FullCurl, 1.0);

   //left hand index direction:
   cg.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);

   //left hand middle curve:
   cg.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);

   //left hand middle direction:
   cg.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 1.0);

   //left hand ring curve:
   cg.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);

   //left hand ring direction:
   cg.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 1.0);

    //left hand pinky curve:
    cg.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);

    //left hand pinky direction:
    cg.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 1.0);

    // give additional weight to index and ring fingers
    cg.setWeight(Finger.Index, 2);
    cg.setWeight(Finger.Middle, 2);

    return cg;
}