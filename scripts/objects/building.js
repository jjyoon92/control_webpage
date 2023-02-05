// // let canvas = document.getElementById('canvas');
// // let ctx = canvas.getContext('2d');
//
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight * 0.7;
// const buildingWidth = canvas.width * 0.2;
// const buildingHeight = buildingWidth * 0.75;
//
// window.addEventListener('resize', function () {
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight * 0.7;
//
//     const buildingWidth = canvas.width * 0.2;
//     const buildingHeight = buildingWidth * 0.75;
//
//     building.y = canvas.height - buildingHeight;
//     building.width = buildingWidth;
//     building.height = buildingHeight;
//
//     building2.y = canvas.height - buildingHeight;
//     building2.width = buildingWidth;
//     building2.height = buildingHeight;
// });
//
// let b1 = {
//     x: 600,
//     y: canvas.height - buildingHeight,
//     width: buildingWidth,
//     height: buildingHeight,
//     speed: 1,
//     color : 'skyblue',
//     draw() {
//         ctx.fillStyle = this.color;
//         ctx.fillRect(this.x, this.y, this.width, this.height);
//     }
// }
//
// let b2 = {
//     x: 300,
//     y: canvas.height - buildingHeight,
//     width: buildingWidth,
//     height: buildingHeight,
//     speed: 1,
//     color : 'red',
//     draw() {
//         ctx.fillStyle = this.color;
//         ctx.fillRect(this.x, this.y, this.width, this.height);
//     }
// }
//
// let buildingArr = { b1, b2 }
//
// // export { building , building2 };
// export { buildingArr };