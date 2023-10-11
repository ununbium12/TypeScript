function printBoard(result) {
    var RNUM_DESC = result.RNUM_DESC, CATEGORY_NM = result.CATEGORY_NM, WRITE_DATE = result.WRITE_DATE, HITS = result.HITS, FILE_CNT = result.FILE_CNT;
    console.log("".concat(RNUM_DESC, " - ").concat(CATEGORY_NM, " - ").concat(WRITE_DATE, " - \uC870\uD68C ").concat(HITS, " - \uCCA8\uBD80\uD30C\uC77C\uC218 ").concat(FILE_CNT));
}
fetch('https://static-contents-serve.s3.ap-northeast-2.amazonaws.com/response.json')
    .then(function (result) { return result.json(); })
    .then(function (list) {
    list.forEach(function (data) {
        printBoard(data);
    });
})
    .catch(function (err) {
    console.log(err);
});
