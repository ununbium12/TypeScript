# 1번 내용의 주어진 지침

```ts
const data = [
  {
    "id": 1,
    "name": "김지훈",
    "age": 21,
    "address": {
      "city": "서울",
      "district": "강남구"
    },
    "department": "컴퓨터 공학과",
    "grade": "2학년",
    "activities": [
      {
        "type": "club",
        "name": "프로그래밍 동아리"
      },
      {
        "type": "contest",
        "name": "SW 챌린지"
      }
    ]
  },
  {
    "id": 2,
    "name": "이하은",
    "age": 22,
    "address": {
      "city": "부산",
      "district": "해운대구"
    },
    "department": "디자인 학과",
    "grade": "3학년",
    "activities": [
      {
        "type": "club",
        "name": "디자인 스터디"
      }
    ]
  },
  {
    "id": 3,
    "name": "박준영",
    "age": 23,
    "address": {
      "city": "인천",
      "district": "남동구"
    },
    "department": "경영학과",
    "grade": "4학년",
    "activities": [
      {
        "type": "contest",
        "name": "경영 아이디어 대회"
      },
      {
        "type": "club",
        "name": "경영 연구 동아리"
      }
    ]
  },
  {
    "id": 4,
    "name": "정민서",
    "age": 20,
    "address": {
      "city": "서울",
      "district": "강남구"
    },
    "department": "컴퓨터 공학과",
    "grade": "1학년",
    "activities": [
      {
        "type": "club",
        "name": "프로그래밍 동아리"
      }
    ]
  },
  {
    "id": 5,
    "name": "최수진",
    "age": 24,
    "address": {
      "city": "부산",
      "district": "해운대구"
    },
    "department": "디자인 학과",
    "grade": "4학년",
    "activities": [
      {
        "type": "club",
        "name": "디자인 스터디"
      }
    ]
  },
  {
    "id": 6,
    "name": "김현수",
    "age": 21,
    "address": {
      "city": "인천",
      "district": "남동구"
    },
    "department": "경영학과",
    "grade": "2학년",
    "activities": [
      {
        "type": "contest",
        "name": "경영 아이디어 대회"
      }
    ]
  },
  {
    "id": 7,
    "name": "박지영",
    "age": 22,
    "address": {
      "city": "서울",
      "district": "강남구"
    },
    "department": "컴퓨터 공학과",
    "grade": "3학년",
    "activities": [
      {
        "type": "club",
        "name": "프로그래밍 동아리"
      }
    ]
  },
  {
    "id": 8,
    "name": "이지아",
    "age": 23,
    "address": {
      "city": "부산",
      "district": "해운대구"
    },
    "department": "디자인 학과",
    "grade": "2학년",
    "activities": [
      {
        "type": "club",
        "name": "디자인 스터디"
      }
    ]
  },
  {
    "id": 9,
    "name": "장서현",
    "age": 21,
    "address": {
      "city": "인천",
      "district": "남동구"
    },
    "department": "경영학과",
    "grade": "1학년",
    "activities": [
      {
        "type": "contest",
        "name": "경영 아이디어 대회"
      }
    ]
  },
  {
    "id": 10,
    "name": "이재훈",
    "age": 20,
    "address": {
      "city": "서울",
      "district": "강남구"
    },
    "department": "컴퓨터 공학과",
    "grade": "1학년",
    "activities": [
      {
        "type": "club",
        "name": "프로그래밍 동아리"
      }
    ]
  }
]
```

위 링크의 데이터 구조를 파악하고 type을 정의해보세요.

- type, interface 사용
- 리터럴 타입 사용

---

<br>

# 2번 내용의 주어진 지침

```ts
const data = [
  {
    "itemId": 1,
    "productName": "빨간 맨투맨",
    "price": 30000,
    "category": "의류",
    "subCategory": {
      "type": "상의",
      "material": "면"
    },
    "tags": [
      {
        "type": "color",
        "value": "빨강"
      },
      {
        "type": "style",
        "value": "캐주얼"
      }
    ]
  },
  {
    "itemId": 2,
    "productName": "블루 청바지",
    "price": 40000,
    "category": "의류",
    "subCategory": {
      "type": "하의",
      "material": "데님"
    },
    "tags": [
      {
        "type": "color",
        "value": "파랑"
      },
      {
        "type": "style",
        "value": "데일리"
      }
    ]
  },
  {
    "itemId": 3,
    "productName": "스포츠 운동화",
    "price": 100000,
    "category": "신발",
    "subCategory": {
      "type": "운동화",
      "material": "고무"
    },
    "tags": [
      {
        "type": "color",
        "value": "흰색"
      },
      {
        "type": "function",
        "value": "운동용"
      }
    ]
  },
  {
    "itemId": 4,
    "productName": "흰색 맨투맨",
    "price": 28000,
    "category": "의류",
    "subCategory": {
      "type": "상의",
      "material": "면"
    },
    "tags": [
      {
        "type": "color",
        "value": "흰색"
      },
      {
        "type": "style",
        "value": "심플"
      }
    ]
  },
  {
    "itemId": 5,
    "productName": "검정 슬랙스",
    "price": 45000,
    "category": "의류",
    "subCategory": {
      "type": "하의",
      "material": "폴리에스터"
    },
    "tags": [
      {
        "type": "color",
        "value": "검정"
      },
      {
        "type": "style",
        "value": "정장"
      }
    ]
  },
  {
    "itemId": 6,
    "productName": "갈색 로퍼",
    "price": 120000,
    "category": "신발",
    "subCategory": {
      "type": "구두",
      "material": "가죽"
    },
    "tags": [
      {
        "type": "color",
        "value": "갈색"
      },
      {
        "type": "style",
        "value": "정장용"
      }
    ]
  },
  {
    "itemId": 7,
    "productName": "네이비 맨투맨",
    "price": 29000,
    "category": "의류",
    "subCategory": {
      "type": "상의",
      "material": "면"
    },
    "tags": [
      {
        "type": "color",
        "value": "파랑"
      },
      {
        "type": "style",
        "value": "심플"
      }
    ]
  },
  {
    "itemId": 8,
    "productName": "데님 청바지",
    "price": 38000,
    "category": "의류",
    "subCategory": {
      "type": "하의",
      "material": "데님"
    },
    "tags": [
      {
        "type": "color",
        "value": "파랑"
      },
      {
        "type": "style",
        "value": "데일리"
      }
    ]
  },
  {
    "itemId": 9,
    "productName": "레드 스니커즈",
    "price": 85000,
    "category": "신발",
    "subCategory": {
      "type": "운동화",
      "material": "고무"
    },
    "tags": [
      {
        "type": "color",
        "value": "빨강"
      },
      {
        "type": "style",
        "value": "스트릿"
      }
    ]
  },
  {
    "itemId": 10,
    "productName": "그린 티셔츠",
    "price": 20000,
    "category": "의류",
    "subCategory": {
      "type": "상의",
      "material": "면"
    },
    "tags": [
      {
        "type": "color",
        "value": "초록"
      },
      {
        "type": "style",
        "value": "캐주얼"
      }
    ]
  }
]
```

- type, interface 사용
- 리터럴 타입 사용

---