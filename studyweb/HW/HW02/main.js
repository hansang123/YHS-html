var canvas = document.getElementById("GameScreenCanvas");
var ctx = canvas.getContext("2d");

var studentID = 202127066;

// Draw number using lines
function drawNum(num) {
    var numStr = num.toString(); // 학생 ID를 문자열로 변환
    var startX = canvas.width - (numStr.length * 70); // 시작 x 좌표
    var startY = 20; // 시작 y 좌표
    var lineLength = 50; // 선 길이
    var spacing = 20; // 숫자 간 간격

    ctx.beginPath();

    // 오른쪽 상단에 숫자 그리기
    for (var i = 0; i < numStr.length; i++) {
        var digit = numStr[i]; // 한 자리 수 추출
        ctx.strokeStyle = getColor(i); // 각 숫자에 색상 적용

        drawDigit(startX, startY, digit, lineLength); // 숫자 그리기

        // 다음 숫자를 그릴 위치로 이동
        startX += (lineLength + spacing);
    }

    ctx.closePath();
}

// 각 숫자 그리기 함수
function drawDigit(x, y, digit, lineLength) {
    ctx.beginPath();
    if (digit === '0') {
        ctx.moveTo(x, y);
        ctx.lineTo(x + lineLength, y);
        ctx.lineTo(x + lineLength, y + lineLength * 2);
        ctx.lineTo(x, y + lineLength * 2);
        ctx.lineTo(x, y);
        ctx.stroke();
    } else if (digit === '1') {
        ctx.moveTo(x + lineLength / 2, y);
        ctx.lineTo(x + lineLength / 2, y + lineLength * 2);
        ctx.stroke();
    } else if (digit === '2') {
        ctx.moveTo(x, y);
        ctx.lineTo(x + lineLength, y);
        ctx.lineTo(x + lineLength, y + lineLength);
        ctx.lineTo(x, y + lineLength);
        ctx.lineTo(x, y + lineLength * 2);
        ctx.lineTo(x + lineLength, y + lineLength * 2);
        ctx.stroke();
    } else if (digit === '3') {
        ctx.moveTo(x, y);
        ctx.lineTo(x + lineLength, y);
        ctx.lineTo(x + lineLength, y + lineLength);
        ctx.lineTo(x, y + lineLength);
        ctx.lineTo(x + lineLength, y + lineLength);
        ctx.lineTo(x + lineLength, y + lineLength * 2);
        ctx.lineTo(x, y + lineLength * 2);
        ctx.stroke();
    } else if (digit === '4') {
        ctx.moveTo(x, y);
        ctx.lineTo(x, y + lineLength);
        ctx.lineTo(x + lineLength, y + lineLength);
        ctx.lineTo(x + lineLength, y);
        ctx.lineTo(x + lineLength, y + lineLength * 2);
        ctx.stroke();
    } else if (digit === '5') {
        ctx.moveTo(x + lineLength, y);
        ctx.lineTo(x, y);
        ctx.lineTo(x, y + lineLength);
        ctx.lineTo(x + lineLength, y + lineLength);
        ctx.lineTo(x + lineLength, y + lineLength * 2);
        ctx.lineTo(x, y + lineLength * 2);
        ctx.stroke();
    } else if (digit === '6') {
        ctx.moveTo(x + lineLength, y);
        ctx.lineTo(x, y);
        ctx.lineTo(x, y + lineLength * 2);
        ctx.lineTo(x + lineLength, y + lineLength * 2);
        ctx.lineTo(x + lineLength, y + lineLength);
        ctx.lineTo(x, y + lineLength);
        ctx.lineTo(x + lineLength, y + lineLength);
        ctx.stroke();
    } else if (digit === '7') {
        ctx.moveTo(x, y);
        ctx.lineTo(x + lineLength, y);
        ctx.lineTo(x, y + lineLength * 2);
        ctx.stroke();
    } else if (digit === '8') {
        ctx.moveTo(x, y);
        ctx.lineTo(x + lineLength, y);
        ctx.lineTo(x + lineLength, y + lineLength * 2);
        ctx.lineTo(x, y + lineLength * 2);
        ctx.lineTo(x, y + lineLength);
        ctx.lineTo(x + lineLength, y + lineLength);
        ctx.stroke();
    } else if (digit === '9') {
        ctx.moveTo(x + lineLength, y);
        ctx.lineTo(x, y);
        ctx.lineTo(x, y + lineLength);
        ctx.lineTo(x + lineLength, y + lineLength);
        ctx.lineTo(x + lineLength, y + lineLength * 2);
        ctx.lineTo(x, y + lineLength * 2);
        ctx.stroke();
    }
    ctx.closePath();
}

// 숫자에 대한 색상 설정 함수
function getColor(index) {
    var colors = ["red", "green", "blue", "orange", "purple", "yellow", "cyan", "magenta", "brown", "black"];
    return colors[index % colors.length];
}

drawNum(studentID); // 숫자 그리기

