function printBoard(result: {
  RNUM_DESC: string;
  CATEGORY_NM: string;
  WRITE_DATE: string;
  HITS: number;
  FILE_CNT: number;
}) 
{
  const { RNUM_DESC, CATEGORY_NM, WRITE_DATE, HITS, FILE_CNT } = result;
  console.log(`${RNUM_DESC} - ${CATEGORY_NM} - ${WRITE_DATE} - 조회 ${HITS} - 첨부파일수 ${FILE_CNT}`);
}

fetch('https://static-contents-serve.s3.ap-northeast-2.amazonaws.com/response.json')
  .then((result) => result.json())
  .then((list) => {
    list.forEach((data: {
      RNUM_DESC: string;
      CATEGORY_NM: string;
      WRITE_DATE: string;
      HITS: number;
      FILE_CNT: number;
    }) => {
      printBoard(data);
    });
  })
  .catch((err) => {
    console.log(err);
  }
);
