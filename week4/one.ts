interface Product {
  id: string;
  name: string;
  price: number;
  stock: number;
  category: string;
  discount?: string | number;
  spec?: string;
  size?: string;
}

const data: Product[] = [
  {
    "id": "p1",
    "name": "사과",
    "price": 1500,
    "stock": 10,
    "category": "식품",
    "discount": "10%"
  },
  {
    "id": "p2",
    "name": "노트북",
    "price": 1500000,
    "stock": 5,
    "category": "전자제품",
    "spec": "i7, 16GB RAM"
  },
  {
    "id": "p3",
    "name": "티셔츠",
    "price": 20000,
    "stock": 20,
    "category": "의류",
    "size": "M"
  },
  {
    "id": "p4",
    "name": "식빵",
    "price": 2500,
    "stock": 30,
    "category": "식품",
    "discount": 500
  },
  {
    "id": "p5",
    "name": "휴대폰",
    "price": 1000000,
    "stock": 10,
    "category": "전자제품",
    "discount": "5%"
  }
];

function formatProduct(product: Product): string {
  const { id, name, price, discount, stock, category, size, spec } = product;
  let formattedPrice = price;
  let formattedDiscount = '';

  if (discount) {
    if (typeof discount === "string") {
      // 할인가가 있는 목록 예외처리
      const discountAmount = (parseInt(discount) / 100) * price;
      formattedPrice -= discountAmount;
      formattedDiscount = `, 할인가: ${formattedPrice.toLocaleString()}원`;
    } else {
      formattedPrice -= discount;
      formattedDiscount = `, 할인가: ${formattedPrice.toLocaleString()}원`;
    }
  }

  // 전자제품일 경우 스팩이 있으므로 포함하도록 예외처리
  const specInfo = category === '전자제품' && spec ? `, 사양: ${spec}` : '';

  // 의류일 경우 사이즈가 있으므로 포함 하도록 예외 처리
  const sizeInfo = category === '의류' && size ? `, 사이즈: ${size}` : '';

  return `ID: ${id}, 이름: ${name}, 가격: ${price.toLocaleString()}원${formattedDiscount}, 재고: ${stock}, 카테고리: ${category}${specInfo}${sizeInfo}`;
}

data.forEach((product) => {
  console.log(formatProduct(product));
});
  