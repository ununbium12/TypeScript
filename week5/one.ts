interface User {
  name: string;
  age: number;
  email: string;
  address: string;
}

function createUsers(name: string, age: number, email: string, address: string): User {
  return {
    name,
    age,
    email,
    address
  };
}

function printUserInfos(user: User) {
  console.log(`이름: ${user.name}, 나이: ${user.age}, Email: ${user.email}, 주소: ${user.address}`);
}

const user = createUsers("홍길동", 25, "hong@example.com", "서울");
printUserInfos(user);