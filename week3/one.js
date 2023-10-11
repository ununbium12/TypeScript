function calculateAverage(scores) {
    var total = 0;
    var count = 0;
    for (var _i = 0, scores_1 = scores; _i < scores_1.length; _i++) {
        var score = scores_1[_i];
        if (typeof score === 'number') { // 만일 숫자가 아닌 문자가 입력되었을 경우의 예외처리하고서 계산한다.
            total += score;
            count++;
        }
    }
    return total / count;
}
// 예제 데이터로 테스트
// const scores = [85, 90, 78, 92, 'abc'];
var scores = [85, 90, 78, 92];
var average = calculateAverage(scores);
console.log("\uD3C9\uADE0: ".concat(average));
