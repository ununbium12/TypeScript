type UserType = {
  name: string,
  age: number,
  email: string,
  address: string
}

function createUser(name: string, age: number, email: string, address: string) : UserType {
  return {
    name,
    age,
    email,
    address
  };
}

function printUserInfo(user: UserType) {
  console.log(`이름: ${user.name}, 나이: ${user.age}, Email: ${user.email}, 주소: ${user.address}`);
}

const users = createUser("홍길동", 25, "hong@example.com", "서울");
printUserInfo(users);