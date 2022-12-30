let temp = 0;
let temp2 = 0;
let p = 0;
let q = 60;
let h = 1;
let score = 0;
document.onkeydown = function (e) {
    console.log("key code is:", e.keyCode)
    if (e.keyCode == 32) {
        fire();
    }

    if (e.keyCode == 40) {
        down();
    }
    if (e.keyCode == 38) {
        up();
    }
}


function fire() {
    // if (temp == 0) {
    // console.log("hi");
    //     tank = document.querySelector('.tank');
    //     tank.classList.add('animatetank');
    //     temp++;
    // }
    // else{
    // tank.classList.remove('animatetank');
    // temp--;
    // }



    if (temp2 == 0) {
        console.log("hi");
        bullet = document.querySelector('.bullet');
        bullet.classList.add('animatebullet');
        setTimeout(() => {
            bullet.classList.remove('animatebullet');
        }, 1000)
        temp2++;
    }

    else {
        console.log("hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii");
        bullet = document.querySelector('.bullet');
        bullet.classList.add('animatebullet2');

        setTimeout(() => {
            bullet.classList.remove('animatebullet2');
        }, 1000)
        temp2--;
    }

    // setTimeout(( bullet.classList.remove('animatebullet')),1000);
    // bullet.classList.remove('animatebullet');
}
let m = 20;
function down() {
    if (p < 420) {
        p = p + m;
        q = q + m;
        document.querySelector('.tank').style.top = p + "px";
        document.querySelector('.bullet').style.top = q + "px";
    }


}
function up() {
    if (p > -10) {
        p = p - m;
        q = q - m;

        document.querySelector('.tank').style.top = p + "px";
        document.querySelector('.bullet').style.top = q + "px";
    }

}
setInterval(() => {
    ufo = document.querySelector('.tank');
    gameover = document.querySelector('.gameover');
    obstacle = document.querySelector('.obstacle');
    obstacle1 = document.querySelector('.obstacle1');
    bullet = document.querySelector('.bullet');

    dx = parseInt(window.getComputedStyle(bullet, null).getPropertyValue('left'));
    px = parseInt(window.getComputedStyle(ufo, null).getPropertyValue('left'));
    py = parseInt(window.getComputedStyle(ufo, null).getPropertyValue('top'));
    dy = parseInt(window.getComputedStyle(bullet, null).getPropertyValue('top'));
    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));
    ox1 = parseInt(window.getComputedStyle(obstacle1, null).getPropertyValue('left'));
    oy1 = parseInt(window.getComputedStyle(obstacle1, null).getPropertyValue('top'));
    offsetX = Math.abs(dx - ox);
    offsetY = Math.abs(dy - oy);
    offsetXX = Math.abs(px - ox);
    offsetYY = Math.abs(py - oy);
    offsettX = Math.abs(dx - ox1);
    offsettY = Math.abs(dy - oy1);
    offsettXX = Math.abs(px - ox1);
    offsettYY = Math.abs(py - oy1);

    console.log(offsetXX, offsetYY);

    if (obstacle.style.visibility != 'hidden') {

        if (offsetXX < 93 && offsetYY < 52) {
            gameover.style.visibility = 'visible';
            obstacle.style.visibility = 'hidden';
            obstacle1.style.visibility = 'hidden';
            bullet.style.visibility = 'hidden';
        }

        else if (offsetX < 100 && offsetY < 120) {
            score++;
            document.querySelector('.score').innerHTML = 'Score :- ' + score;
            obstacle.style.visibility = 'hidden';
            setTimeout(() => {
                obstacle.style.visibility = 'visible';

            }, 4000);
 
            //    obstacle.classList.remove('animateobstacle');  

            // setTimeout(() => {
            //h++;
            //     obstacle.style.visibility='visible';
            //     obstacle.style.animationIterationCount=h;     

            // }, 3000)


            // gameover.style.visibility = 'visible';
            // obstacle.classList.remove('obstacleAni');
        }

    }

    if (obstacle1.style.visibility != 'hidden') {

        if (offsettXX < 93 && offsettYY < 52) {
            gameover.style.visibility = 'visible';
            obstacle.style.visibility = 'hidden';
            obstacle1.style.visibility = 'hidden';
            bullet.style.visibility = 'hidden';
        }

        else if (offsettX < 100 && offsettY < 120) {
            score++;
            document.querySelector('.score').innerHTML = 'Score :- ' + score;
            obstacle1.style.visibility = 'hidden';
            setTimeout(() => {
                obstacle1.style.visibility = 'visible';
            }, 4000);
        }
    }


}, 100);


function resetanimation() {
    var el = document.querySelector('.obstacle');
    el.style.animation = 'none';
    el.offsetHeight; /* trigger reflow */
    el.style.animation = null;
}