var id1 = null;
var id2 = null;
var id3 = null;
var id4 = null;
var id5 = null;
var id6 = null;
var id7 = null;

function StartStop() {
  if(id1 == null) {
    id1 = setInterval(clockAnimate, 20);
    id2 = setInterval(milliAnimate, 20);
    id3 = setInterval(microAnimate, 20);
    id4 = setInterval(femtoAnimate, 20);
    id5 = setInterval(attoAnimate, 20);
    id6 = setInterval(zeptoAnimate, 20);
    id7 = setInterval(yoctoAnimate, 20);
  } else {
    clearInterval(id1);
    clearInterval(id2);
    clearInterval(id3);
    clearInterval(id4);
    clearInterval(id5);
    clearInterval(id6);
    clearInterval(id7);
    id1 = null;
    id2 = null;
    id3 = null;
    id4 = null;
    id5 = null;
    id6 = null;
    id7 = null;
  }
}

function clockAnimate() {

    const d = new Date();
    let time = d.getTime();
    let hours = d.getHours()
    let minutes = d.getMinutes()
    let seconds = d.getSeconds();

    var clock = document.getElementById("clock");
    var hhand = document.getElementById("hourshand");
    var mhand = document.getElementById("minuteshand");
    var shand = document.getElementById("secondshand");
    
    const hTransformList = hhand.transform.baseVal;
    const mTransformList = mhand.transform.baseVal;
    const sTransformList = shand.transform.baseVal;

    const hTransform = hhand.ownerSVGElement.createSVGTransform();
    const mTransform = mhand.ownerSVGElement.createSVGTransform();
    const sTransform = shand.ownerSVGElement.createSVGTransform();

    hTransform.setRotate( (hours + minutes/60 + seconds/3600) * 30, 0, 0);
    mTransform.setRotate( (minutes + seconds/60) * 6, 0, 0);
    sTransform.setRotate( seconds * 6, 0, 0);

    hTransformList.clear();
    mTransformList.clear();
    sTransformList.clear();

    hTransformList.appendItem(hTransform);
    mTransformList.appendItem(mTransform);
    sTransformList.appendItem(sTransform);

}

function milliAnimate() {

    const d = new Date();
    let time = d.getTime() % 1000;

    var clock = document.getElementById("milliclock");
    var hand = document.getElementById("millihand");
    
    const transformList = hand.transform.baseVal;

    const handTransform = hand.ownerSVGElement.createSVGTransform();
    handTransform.setRotate(time * 0.36, 0, 0);
    transformList.clear();
    transformList.appendItem(handTransform);

}

function microAnimate() {

    var clock = document.getElementById("microclock");
    var hand = document.getElementById("microhand");
    
    const transformList = hand.transform.baseVal;

    const handTransform = hand.ownerSVGElement.createSVGTransform();
    handTransform.setRotate(Math.random() * 360, 0, 0);
    transformList.appendItem(handTransform);

}



function femtoAnimate() {

    const d = new Date();
    let time = d.getTime() % 1000;

    var clock = document.getElementById("femtoclock");
    var hand = document.getElementById("femtohand");
    
    const transformList = hand.transform.baseVal;

    const handTransform = hand.ownerSVGElement.createSVGTransform();
    handTransform.setRotate(time * 0.36, 0, 0);
    transformList.clear();
    transformList.appendItem(handTransform);

}


function attoAnimate() {

    const d = new Date();
    let time = d.getTime() % 1000;

    var clock = document.getElementById("attoclock");
    var hand = document.getElementById("attohand");
    
    const transformList = hand.transform.baseVal;

    const handTransform = hand.ownerSVGElement.createSVGTransform();
    handTransform.setRotate(time * 0.36, 0, 0);
    transformList.clear();
    transformList.appendItem(handTransform);

}


function zeptoAnimate() {

    const d = new Date();
    let time = d.getTime() % 1000;

    var clock = document.getElementById("zeptoclock");
    var hand = document.getElementById("zeptohand");
    
    const transformList = hand.transform.baseVal;

    const handTransform = hand.ownerSVGElement.createSVGTransform();
    handTransform.setRotate(time * 0.36, 0, 0);
    transformList.clear();
    transformList.appendItem(handTransform);

}


function yoctoAnimate() {

    const d = new Date();
    let time = d.getTime() % 1000;

    var clock = document.getElementById("yoctoclock");
    var hand = document.getElementById("yoctohand");
    
    const transformList = hand.transform.baseVal;

    const handTransform = hand.ownerSVGElement.createSVGTransform();
    handTransform.setRotate(time * 0.36, 0, 0);
    transformList.clear();
    transformList.appendItem(handTransform);

}


StartStop();

