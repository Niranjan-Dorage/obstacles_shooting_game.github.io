let temp = 0;
let temp2 = 0;
let p = 0;
let q=72;
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
let m=20;
function down() {
  if(p<420)
    {  p = p + m;
    q=q+m;
    document.querySelector('.tank').style.top = p + "px";
    document.querySelector('.bullet').style.top = q + "px";}


}
function up() {
    if(p>-10)
   { p = p -m;
    q=q-m;

    document.querySelector('.tank').style.top = p + "px";
    document.querySelector('.bullet').style.top = q + "px";}

} 