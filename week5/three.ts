interface Pet {
  type: string;
  name: string;
  age: number;
  weight: number;
  breed?: string;
  color?: string;
}

const data = [
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

function createCat(type: string, name: string, age: number, weight: number, breed?: string, color?: string) {
  return {
    type,
    name,
    age,
    weight,
    breed,
    color
  };
}

function printCatInfo(pet: Pet) {
    // 데이터가 없을때 예외처리
  const breedInfo = pet.breed ? `, 품종: ${pet.breed}` : '';
  const colorInfo = pet.color ? `, 색깔: ${pet.color}` : '';
  
  console.log(`종: ${pet.type} 이름: ${pet.name}, 나이: ${pet.age}, 몸무게: ${pet.weight}${breedInfo}${colorInfo}`);
}

data.forEach((item) => {
  // type이 고양이일 때만 출력하도록 설정
  if (item.type === "cat") {
    const cat = createCat(item.type, item.name, item.age, item.weight, item.breed, item.color);
    printCatInfo(cat);
  }
  if (item.type === "dog") {
    const dog = createCat(item.type, item.name, item.age, item.weight, item.breed, item.color);
    printCatInfo(dog);
  }
});
