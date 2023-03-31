// 상세 설명 보기
function showText(){
    // let text = document.getElementById("detail");
    // text.style.display = "block"
    document.getElementById("detail").style.display = "block";

    // let btn = document.getElementById("show");
    // btn.style.display = "none"
    document.getElementById('show').style.display = "none"
}

// 상세 설명 닫기
function hideText(){
    document.getElementById("detail").style.display = "none";
    document.getElementById('show').style.display = "block"
}