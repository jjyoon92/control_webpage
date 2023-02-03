let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = 150;

// 창 사이즈 변경시 캔버스 사이즈 조정
window.addEventListener('resize', function () {
    canvas.width = window.innerWidth;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

let building = {
    x: 200,
    y: 50,
    width: 70,
    height: 100,
    draw() {
        ctx.fillStyle = 'brown';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

let player = {
    x: 10,
    y: 100,
    width: 50,
    height: 50,
    speed : 1.5,
    draw() {
        ctx.fillStyle = 'green';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}




// 현재 플레이어의 행동여부
let isJumping = false;
let isRightMoving = false;
let isLeftMoving = false;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

// 키다운
function keyDownHandler(e) {

    let isDown = e.key;

    if (isDown == "d" || isDown == "ㅇ") { // D 입력
        isRightMoving = true;
    } else if (isDown == "a" || isDown == "ㅁ") { // A 입력
        isLeftMoving = true;
    } else if (jumpTimer == 0 && (isDown == "w" || isDown == "ㅈ")) { // W 입력
        isJumping = true;
    }
}

// 키업
function keyUpHandler(e) {
    let isUp = e.key;

    if (isUp == "d" || isUp == "ㅇ") { // D 입력
        isRightMoving = false;
    } else if (isUp == "a" || isUp == "ㅁ") { // A 입력
        isLeftMoving = false;
    }
}


let jumpTimer = 0;
function frameAnimation() {
    requestAnimationFrame(frameAnimation);

    // 점프
    if (isJumping == true) {
        player.y -= player.speed;
        jumpTimer++;
    } else if (isJumping == false && player.y != 100) {
        player.y += player.speed;
        jumpTimer--;
    }
    // 점프 후 착지
    if (jumpTimer > 50 || jumpTimer == 0) {
        isJumping = false;
    }

    // 오른쪽으로 움직이기
    if (isRightMoving == true) {
        player.x += player.speed;
    }

    // 왼쪽으로 움직이기
    if (isLeftMoving == true) {
        player.x -= player.speed;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    building.draw();
    player.draw();
}

frameAnimation();


