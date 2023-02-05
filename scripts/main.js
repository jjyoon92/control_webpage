// import {building, building2} from "./objects/building.js";

// import {buildingArr} from "./objects/building.js";


// let buildings = buildingArr;

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight * 0.7;


// 캐릭터 생성
const playerImg = new Image();
playerImg.src = '../../resources/sprite_image/character.png';
playerImg.onload = function () {
    initPlayer();
};

const playerScale = 4;
const playerWidth = 16;
const playerHeight = 18;
const playerScaledWidth = playerScale * playerWidth;
const playerScaledHeight = playerScale * playerHeight;
const playerSpeed = 30;
let playerMoveDistance = 0;

function drawFrame(frameX, frameY, canvasX, canvasY) {
    ctx.drawImage(
        playerImg,             // 캐릭터 이미지
        frameX * playerWidth,  // 이미지 내 X 좌표
        frameY * playerHeight, // 이미지 내 Y 좌표
        playerWidth,           // 가로 사이즈
        playerHeight,          // 세로 사이즈
        canvasX, canvasY,      // 캐릭터 X 좌표, 캐릭터 Y 좌표
        playerScaledWidth,     // X 시이즈 스케일
        playerScaledHeight     // Y 사이즈 스케일
    );
}

function initPlayer() {
    window.requestAnimationFrame(frameAnimation);
}

const cycleLoop = [0, 0, 1, 1, 0,0, 2,2];
let currentLoopIndex = 0;
let frameCount = 0;
let currentDirection = 3;
let playerCurrentX = 10;
let playerCurrentY = canvas.height - playerHeight * playerScale;

// 현재 플레이어의 행동여부
let isJumping = false;
let isRightMoving = false;
let isLeftMoving = false;



let jumpTimer = 0;

function animation() {
    frameCount++;

    if (frameCount < 5) {
        window.requestAnimationFrame(animation);
        return;
    }
    frameCount = 0;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawFrame(cycleLoop[currentLoopIndex], currentDirection, playerCurrentX, playerCurrentY);
    currentLoopIndex++;
    if (currentLoopIndex >= cycleLoop.length) {
        currentLoopIndex = 0;
    }

    // 점프
    if (isJumping == true) {
        playerCurrentY -= playerSpeed*2;
        jumpTimer++;
        console.log(isJumping);
        console.log("timer : " + jumpTimer);
    } else if (isJumping == false && playerCurrentY < canvas.height - playerScaledHeight) {
        console.log(isJumping);
        playerCurrentY += playerSpeed*2;
        jumpTimer--;
    }
    // 점프 후 착지
    if (jumpTimer >= 2 || jumpTimer < 0) {
        isJumping = false;
    }

    // 오른쪽으로 움직이기
    if (isRightMoving == true) {
        // 플레이어가 화면의 중간까지 이동했을 때
        if (playerCurrentX >= window.innerWidth / 2 - playerWidth / 2) {
            playerMoveDistance += playerSpeed;
        } else {
            playerCurrentX += playerSpeed;
            playerMoveDistance += playerSpeed;
        }
    }

    // 왼쪽으로 움직이기
    if (isLeftMoving == true) {
        // 화면의 가장 왼쪽에 도달했을 떄
        if (playerCurrentX <= 10 && playerMoveDistance != 0) {
            // buildings.b1.x += buildings.b1.speed;
            // building2.x += building.speed;
            playerMoveDistance -= playerSpeed;
        } else if (playerMoveDistance > 0) {
            playerCurrentX -= playerSpeed;
            playerMoveDistance -= playerSpeed;
        }
    }


    window.requestAnimationFrame(animation);
}


// const buildingWidth = canvas.width * 0.2;
// const buildingHeight = buildingWidth * 0.75;

// 창 사이즈 변경시 캔버스 사이즈 조정
window.addEventListener('resize', function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight * 0.7;

    // const characterWidth = canvas.width * 0.05;
    // const characterHeight = characterWidth;
    // const buildingWidth = canvas.width * 0.2;
    // const buildingHeight = buildingWidth * 0.75;
    //
    // building.y = canvas.height - buildingHeight;
    // building.width = buildingWidth;
    // building.height = buildingHeight;



    playerCurrentY = canvas.height - playerHeight * playerScale;

    // ctx.clearRect(0, 0, canvas.width, canvas.height);
    // building.draw();
    // player.draw();
});

// TODO : 캐릭터, 건물 최소,최대 사이즈 지정하기. <- window 크기에 따라서


// TODO : 건물 배열에서 빼서 다루기. 건물 2개 추가
// console.log(buildings.b1.x);
// console.log(buildings.b2.x);




document.addEventListener("keydown", keyDownHandler,);
document.addEventListener("keyup", keyUpHandler, false);

// 키다운
function keyDownHandler(e) {

    let isDown = e.key;

    if (isDown == "d" || isDown == "ㅇ" || isDown == "ArrowRight") { // 우로 이동
        isRightMoving = true;
        currentDirection = 3;
    } else if (isDown == "a" || isDown == "ㅁ" || isDown == "ArrowLeft") { // 좌로 이동
        isLeftMoving = true;
        currentDirection = 2;
    } else if (jumpTimer == 0 && (isDown == "w" || isDown == "ㅈ")) { // 점프
        isJumping = true;
    } else if (e.keyCode == 32 || isDown == "ArrowUp" || isDown == "w" || isDown == "ㅈ") {
        e.preventDefault();
        if (jumpTimer <= 0) {
            isJumping = true;
        }
    } else if (isDown == "ArrowDown") {
        e.preventDefault();
    }
}

// 키업
function keyUpHandler(e) {
    let isUp = e.key;

    if (isUp == "d" || isUp == "ㅇ" || isUp == "ArrowRight") {
        isRightMoving = false;
    } else if (isUp == "a" || isUp == "ㅁ" || isUp == "ArrowLeft") {
        isLeftMoving = false;
    }
}



function frameAnimation() {

    frameCount++;

    if (frameCount < 30) {
        window.requestAnimationFrame(frameAnimation);
        return;
    }

    frameCount = 0;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawFrame(cycleLoop[currentLoopIndex], currentDirection, playerCurrentX, playerCurrentY);
    currentLoopIndex++;
    if (currentLoopIndex >= cycleLoop.length) {
        currentLoopIndex = 0;
    }



    // 점프
    if (isJumping == true) {
        playerCurrentX -= playerSpeed;
        jumpTimer++;
        // }
    } else if (isJumping == false && playerCurrentY != canvas.height - playerHeight) {
        // console.log("timer : " + jumpTimer);
        playerCurrentX += playerSpeed;
        jumpTimer--;
    }
    // 점프 후 착지
    if (jumpTimer > 50 || jumpTimer <= 0) {
        isJumping = false;
    }

    // 오른쪽으로 움직이기
    if (isRightMoving == true) {
        // 플레이어가 화면의 중간까지 이동했을 때
        if (playerCurrentX >= window.innerWidth / 2 - playerWidth / 2) {
            // buildings.b1.x -= buildings.b1.speed;
            // building2.x -= building.speed;
            playerMoveDistance += playerSpeed;
        } else {
            playerCurrentX += playerSpeed;
            console.log(playerCurrentX);
            playerMoveDistance += playerSpeed;
        }
    }

    // 왼쪽으로 움직이기
    if (isLeftMoving == true) {
        // 화면의 가장 왼쪽에 도달했을 떄
        if (player.x <= 10 && playerMoveDistance != 0) {
            // buildings.b1.x += buildings.b1.speed;
            // building2.x += building.speed;
            playerMoveDistance -= playerSpeed;
        } else if (playerMoveDistance > 0) {
            playerCurrentX -= playerSpeed;
            playerMoveDistance -= playerSpeed;
        }
    }

    // 건물과의 상호작용
    // if (player.x > buildings.b1.x - player.width &&
    //     player.x < buildings.b1.x + buildings.b1.width
    // ) {
    //     player.color = "yellow";
    // } else {
    //     player.color = "green";
    // }


    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // buildings.b1.draw();
    // building2.draw();
    // player.draw();

    window.requestAnimationFrame(animation);

}

// step();

// frameAnimation();


