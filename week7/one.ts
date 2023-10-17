interface Address {
  city: string,
  district: string
}

interface Activities {
  type: "club" | "contest",
  name: string
}

interface Product {
  id: number,
  name: string,
  age: number,
  address: Address,
  department: string,
  grade: "1학년" | "2학년" | "3학년" | "4학년",
  activities: Activities[]
}

let data: Product[] = [
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

const addStudentData: Product = {
  id: 11,
  name: "정우성",
  age: 24,
  address: {
    city: "서울",
    district: "영등포구"
  },
  department: "컴퓨터 정보학부",
  grade: "3학년",
  activities: [
    {
      type: "club",
      name: "캡스톤디자인"
    }
  ]
}

// 데이터 추가
function addStudent(student: Product): Product[] {
  // const addIdData = {
  //   ...student,
  //   id: data.length +1,
  // }
  return [...data, student]
}

// const datas = addStudent(addStudentData);

data = addStudent(addStudentData);

// console.log(datas);

console.log(data);

// 데이터 업데이트



function formatProduct(product: Product): string {
  const { id, name, age, address, department, grade, activities } = product;

  const clubActivities = activities.filter(activity => activity.type === "club");
  const contestActivities = activities.filter(activity => activity.type === "contest");

  // 동아리와 대회 활동에 대한 이름을 가져옵니다.
  const clubActivityNames = clubActivities.map(activity => activity.name).join("");
  const contestActivityNames = contestActivities.map(activity => activity.name).join("");

  // 빈 문자열로 대체합니다.
  const clubText = clubActivityNames ? `, 동아리: ${clubActivityNames}` : "";
  const contestText = contestActivityNames ? `, 대회: ${contestActivityNames}` : "";

  return `ID: ${id}, 이름: ${name}, 나이: ${age}, 도시: ${address.city}, 지역구: ${address.district}, 학과: ${department}, 학년: ${grade} ${clubText} ${contestText}`;
}

data.forEach((product) => {
  console.log(formatProduct(product));
});
