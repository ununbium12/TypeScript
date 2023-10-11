var data = [
    {
        "type": "dog",
        "name": "맥스",
        "age": 5,
        "weight": 20,
        "breed": "리트리버"
    },
    {
        "type": "dog",
        "name": "루루",
        "age": 2,
        "weight": 10,
        "breed": "푸들"
    },
    {
        "type": "cat",
        "name": "미미",
        "age": 3,
        "weight": 4,
        "color": "검정"
    },
    {
        "type": "cat",
        "name": "코코",
        "age": 1,
        "weight": 3,
        "color": "흰색"
    }
];
function createCat(type, name, age, weight, breed, color) {
    return {
        type: type,
        name: name,
        age: age,
        weight: weight,
        breed: breed,
        color: color
    };
}
function printCatInfo(pet) {
    // 데이터가 없을때 예외처리
    var breedInfo = pet.breed ? ", \uD488\uC885: ".concat(pet.breed) : '';
    var colorInfo = pet.color ? ", \uC0C9\uAE54: ".concat(pet.color) : '';
    console.log("\uC885: ".concat(pet.type, " \uC774\uB984: ").concat(pet.name, ", \uB098\uC774: ").concat(pet.age, ", \uBAB8\uBB34\uAC8C: ").concat(pet.weight).concat(breedInfo).concat(colorInfo));
}
data.forEach(function (item) {
    // type이 고양이일 때만 출력하도록 설정
    if (item.type === "cat") {
        var cat = createCat(item.type, item.name, item.age, item.weight, item.breed, item.color);
        printCatInfo(cat);
    }
    if (item.type === "dog") {
        var dog = createCat(item.type, item.name, item.age, item.weight, item.breed, item.color);
        printCatInfo(dog);
    }
});
