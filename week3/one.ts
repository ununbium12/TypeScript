function calculateAverage(scores: number[]) {
  let total = 0;
  let count = 0;
  for (const score of scores) {
    if (typeof score === 'number') { // 만일 숫자가 아닌 문자가 입력되었을 경우의 예외처리하고서 계산한다.
      total += score;
      count++;
    }
  }
  
  return total / count;
}

// 예제 데이터로 테스트
// const scores = [85, 90, 78, 92, 'abc'];
const scores = [85, 90, 78, 92];
const average = calculateAverage(scores);
console.log(`평균: ${average}`);