// Date 객체 생성
// heap 메모리
let today = new Date(); // 현재일
let theDay = new Date("2023-1-1"); // 1월 1일

// 지나온 날 = 오늘 - 새해 첫날
let passedTime = today.getTime() - theDay.getTime();
console.log(passedTime + "ms");

// 일로 환산
// 정적(static) 메모리
passedTime = Math.round(passedTime/(24*60*60*1000));

// '일' 앞에 위치
document.getElementById("day").innerHTML = passedTime;