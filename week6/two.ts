interface SubCategory {
  type: "상의" | "하의" | "운동화" | "구두",
  material: "면" | "데님" | "고무" | "폴리에스터" | "가죽"
}

interface Tags {
  type: string,
  value: string
}

interface Product {
  itemId: number,
  productName: string,
  price: number,
  category: string,
  subCategory: SubCategory,
  tags: Tags[]
}

const data: Product[] = [
  {
    "itemId": 1,
    "productName": "빨간 맨투맨",
    "price": 30000,
    "category": "의류",
    "subCategory": {
      "type": "상의",
      "material": "면"
    },
    "tags": [
      {
        "type": "color",
        "value": "빨강"
      },
      {
        "type": "style",
        "value": "캐주얼"
      }
    ]
  },
  {
    "itemId": 2,
    "productName": "블루 청바지",
    "price": 40000,
    "category": "의류",
    "subCategory": {
      "type": "하의",
      "material": "데님"
    },
    "tags": [
      {
        "type": "color",
        "value": "파랑"
      },
      {
        "type": "style",
        "value": "데일리"
      }
    ]
  },
  {
    "itemId": 3,
    "productName": "스포츠 운동화",
    "price": 100000,
    "category": "신발",
    "subCategory": {
      "type": "운동화",
      "material": "고무"
    },
    "tags": [
      {
        "type": "color",
        "value": "흰색"
      },
      {
        "type": "function",
        "value": "운동용"
      }
    ]
  },
  {
    "itemId": 4,
    "productName": "흰색 맨투맨",
    "price": 28000,
    "category": "의류",
    "subCategory": {
      "type": "상의",
      "material": "면"
    },
    "tags": [
      {
        "type": "color",
        "value": "흰색"
      },
      {
        "type": "style",
        "value": "심플"
      }
    ]
  },
  {
    "itemId": 5,
    "productName": "검정 슬랙스",
    "price": 45000,
    "category": "의류",
    "subCategory": {
      "type": "하의",
      "material": "폴리에스터"
    },
    "tags": [
      {
        "type": "color",
        "value": "검정"
      },
      {
        "type": "style",
        "value": "정장"
      }
    ]
  },
  {
    "itemId": 6,
    "productName": "갈색 로퍼",
    "price": 120000,
    "category": "신발",
    "subCategory": {
      "type": "구두",
      "material": "가죽"
    },
    "tags": [
      {
        "type": "color",
        "value": "갈색"
      },
      {
        "type": "style",
        "value": "정장용"
      }
    ]
  },
  {
    "itemId": 7,
    "productName": "네이비 맨투맨",
    "price": 29000,
    "category": "의류",
    "subCategory": {
      "type": "상의",
      "material": "면"
    },
    "tags": [
      {
        "type": "color",
        "value": "파랑"
      },
      {
        "type": "style",
        "value": "심플"
      }
    ]
  },
  {
    "itemId": 8,
    "productName": "데님 청바지",
    "price": 38000,
    "category": "의류",
    "subCategory": {
      "type": "하의",
      "material": "데님"
    },
    "tags": [
      {
        "type": "color",
        "value": "파랑"
      },
      {
        "type": "style",
        "value": "데일리"
      }
    ]
  },
  {
    "itemId": 9,
    "productName": "레드 스니커즈",
    "price": 85000,
    "category": "신발",
    "subCategory": {
      "type": "운동화",
      "material": "고무"
    },
    "tags": [
      {
        "type": "color",
        "value": "빨강"
      },
      {
        "type": "style",
        "value": "스트릿"
      }
    ]
  },
  {
    "itemId": 10,
    "productName": "그린 티셔츠",
    "price": 20000,
    "category": "의류",
    "subCategory": {
      "type": "상의",
      "material": "면"
    },
    "tags": [
      {
        "type": "color",
        "value": "초록"
      },
      {
        "type": "style",
        "value": "캐주얼"
      }
    ]
  }
]

function formatProduct(product: Product): string {
  const { itemId, productName, price, category, subCategory, tags } = product;

  const colorTags = tags.filter(tag => tag.type === "color");
  const styleTags = tags.filter(tag => tag.type === "style");

  const colorTagsName = colorTags.map(tag => tag.value).join("");
  const styleTagsName = styleTags.map(tag => tag.value).join("");

  const colorText = colorTagsName ? `, 색깔: ${colorTagsName}` : "";
  const styleText = styleTagsName ? `, 스타일: ${styleTagsName}` : "";

  return `ID: ${itemId}, 이름: ${productName}, 가격: ${price}, 종류: ${category}, 부위: ${subCategory.type}, 재질: ${subCategory.material}${colorText}${styleText}`
}

data.forEach((product) => {
  console.log(formatProduct(product));
});