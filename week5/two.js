function createUser(name, age, email, address) {
    return {
        name: name,
        age: age,
        email: email,
        address: address
    };
}
function printUserInfo(user) {
    console.log("\uC774\uB984: ".concat(user.name, ", \uB098\uC774: ").concat(user.age, ", Email: ").concat(user.email, ", \uC8FC\uC18C: ").concat(user.address));
}
var users = createUser("홍길동", 25, "hong@example.com", "서울");
printUserInfo(users);
