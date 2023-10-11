function createUsers(name, age, email, address) {
    return {
        name: name,
        age: age,
        email: email,
        address: address
    };
}
function printUserInfos(user) {
    console.log("\uC774\uB984: ".concat(user.name, ", \uB098\uC774: ").concat(user.age, ", Email: ").concat(user.email, ", \uC8FC\uC18C: ").concat(user.address));
}
var user = createUsers("홍길동", 25, "hong@example.com", "서울");
printUserInfos(user);
