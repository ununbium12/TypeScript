var data = [
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
];
function formatProduct(product) {
    var id = product.id, name = product.name, age = product.age, address = product.address, department = product.department, grade = product.grade, activities = product.activities;
    var clubActivities = activities.filter(function (activity) { return activity.type === "club"; });
    var contestActivities = activities.filter(function (activity) { return activity.type === "contest"; });
    // 동아리와 대회 활동에 대한 이름을 가져옵니다.
    var clubActivityNames = clubActivities.map(function (activity) { return activity.name; }).join();
    var contestActivityNames = contestActivities.map(function (activity) { return activity.name; }).join();
    // 빈 문자열로 대체합니다.
    var clubText = clubActivityNames ? ", \uB3D9\uC544\uB9AC: ".concat(clubActivityNames) : "";
    var contestText = contestActivityNames ? ", \uB300\uD68C: ".concat(contestActivityNames) : "";
    return "ID: ".concat(id, ", \uC774\uB984: ").concat(name, ", \uB098\uC774: ").concat(age, ", \uB3C4\uC2DC: ").concat(address.city, ", \uC9C0\uC5ED\uAD6C: ").concat(address.district, ", \uD559\uACFC: ").concat(department, ", \uD559\uB144: ").concat(grade, " ").concat(clubText, " ").concat(contestText);
}
data.forEach(function (product) {
    console.log(formatProduct(product));
});
