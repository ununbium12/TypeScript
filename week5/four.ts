interface Product {
  id: string,
  name: string,
  price: number,
  stock: number,
  category: "식품" | "전자제품" | "의류",
  discount?: number | string,
  spec?: string,
  size?: string,
}

const data: Product[] = [{
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
}]

function discountValue(discount: string|number, price:number){
  let resultString : string= '';

  if(typeof discount === 'number'){
      resultString += `,할인가: ${(price - discount).toLocaleString()}원`;
    } else if(typeof discount === 'string'){
      resultString += `, 할인가 : ${(price * (1 - parseInt(discount)/100)).toLocaleString()}원`;
    }
  return resultString
}

data.forEach((product : {id:string, name:string, price:number, stock:number, category:string, discount?:string|number, size?:string, spec?:string}) => {
  const { id, name, price, discount, stock, category, size, spec } = product;
  let resultString = `ID:${id}, 이름:${name}, 가격:${price.toLocaleString()}원`;

  if(discount) resultString += discountValue(discount,price);
  
  resultString += `, 재고:${stock}, 카테고리:${category}`

  if(size) resultString += `, 사이즈:${size}`
  if(spec) resultString += `, 사양:${spec}`

  console.log(resultString)
})