var started = false;

function moveImg(e){
    var x = e.clientX;
    var y = e.clientY;

    var doge = document.getElementById('img1');
    var topAxis = parseInt(doge.style.top.replace('px',''));
    var leftAxis = parseInt(doge.style.left.replace('px',''));
    var bottomAxis = topAxis + 100;
    var rightAxis = leftAxis + 100;

    if ((topAxis - 25 < y) && (topAxis + 25 > y)
            && (leftAxis - 25 < x) && (leftAxis + 125 > x)) {

        angryDonald();
        if (leftAxis - 25 < x && leftAxis + 15 > x) {
            doge.style.left = parseInt(doge.style.left || 0) + 14 + 'px';
        }
        else if (rightAxis - 15 < x && rightAxis + 25 > x) {
            doge.style.left = parseInt(doge.style.left + 100 || 0) - 14 + 'px';
        }
        doge.style.top = parseInt(doge.style.top || 0) + 14 + 'px';
    }
    else if ((leftAxis - 25 < x) && (leftAxis + 50 > x)
            && (topAxis + 25 < y) && (topAxis + 75 > y)) {

        angryDonald()
        doge.style.left = parseInt(doge.style.left || 0) + 14 + 'px';
    }
    else if ((rightAxis - 50 < x) && (rightAxis + 25 > x)
            && (topAxis + 25 < y) && (topAxis + 75 > y)) {

        angryDonald()
        doge.style.left = parseInt(doge.style.left + 100 || 0) - 14 + 'px';
    }
    else if ((bottomAxis - 25 < y) && (bottomAxis + 25 > y)
            && (rightAxis - 125 < x) && (rightAxis + 25 > x)) {

        angryDonald()
        if (leftAxis - 25 < x && leftAxis + 15 > x) {
            doge.style.left = parseInt(doge.style.left || 0) + 14 + 'px';
        }
        else if (rightAxis - 15 < x && rightAxis + 25 > x) {
            doge.style.left = parseInt(doge.style.left + 100 || 0) - 14 + 'px';
        }

        doge.style.top = parseInt(doge.style.top + 100 || 0) - 14 + 'px';
    }

    if (checkIfImgOut(topAxis, leftAxis, rightAxis, bottomAxis)) {
        document.getElementById('divCenter').style.visibility = "visible";
        document.getElementById('text1').innerHTML = "YOU LOST THE DOGE";
        document.getElementById('text1').style.color = "red";
        document.getElementById('restartBtn').innerHTML = "Restart";
    }
}

function restart() {
    document.getElementById('divCenter').style.visibility = "hidden"
    document.getElementById('img1').style.visibility = "visible";
    if (started == false) {
        started = true;
    }
    else {
        var img1 = document.getElementById('img1');
        var height = $(window).height();
        var width = $(window).width();

        document.getElementById('img1').style.top = getRndInt(215, height - 215) + 'px';
        document.getElementById('img1').style.left = getRndInt(215, width - 215) + 'px';
    }
}

function checkIfImgOut(topAxis, leftAxis, rightAxis, bottomAxis) {
    var height = $(window).height();
    var width = $(window).width();

    if (topAxis > (height - 7) && topAxis < (height + 8)) {
        return true;
    }
    else if (leftAxis > (width - 7) && leftAxis < (width + 8)) {
        return true;
    }
    else if (rightAxis > -8 && rightAxis < 7) {
        return true;
    }
    else if (bottomAxis > -8 && bottomAxis < 7) {
        return true;
    }
    return false;
}

function winner() {
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley', '_blank').focus();

  document.getElementById('divCenter').style.visibility = "visible";
  document.getElementById('text1').innerHTML = "YOU PET THE DOGO";
  document.getElementById('text1').style.color = "green";
  document.getElementById('restartBtn').innerHTML = "Play Again";
  document.getElementById('img1').style.visibility = "hidden";
}

function angryDonald() {
    document.getElementById('img1').src = "images/doge_angry.jpg";
}

function getRndInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function init() {
    var img1 = document.getElementById('img1');
    document.getElementById('img1').style.top = '100px';
    document.getElementById('img1').style.left = '100px';

    var timeout;
    document.onmousemove = function() {
      clearTimeout(timeout);
      timeout = setTimeout(function(){document.getElementById('img1').src = "images/doge.jpg";}, 100);;
    }
}

document.addEventListener('DOMContentLoaded', init);

var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);
