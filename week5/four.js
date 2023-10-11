var data = [{
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
    }];
function discountValue(discount, price) {
    var resultString = '';
    if (typeof discount === 'number') {
        resultString += ",\uD560\uC778\uAC00: ".concat((price - discount).toLocaleString(), "\uC6D0");
    }
    else if (typeof discount === 'string') {
        resultString += ", \uD560\uC778\uAC00 : ".concat((price * (1 - parseInt(discount) / 100)).toLocaleString(), "\uC6D0");
    }
    return resultString;
}
data.forEach(function (product) {
    var id = product.id, name = product.name, price = product.price, discount = product.discount, stock = product.stock, category = product.category, size = product.size, spec = product.spec;
    var resultString = "ID:".concat(id, ", \uC774\uB984:").concat(name, ", \uAC00\uACA9:").concat(price.toLocaleString(), "\uC6D0");
    if (discount)
        resultString += discountValue(discount, price);
    resultString += ", \uC7AC\uACE0:".concat(stock, ", \uCE74\uD14C\uACE0\uB9AC:").concat(category);
    if (size)
        resultString += ", \uC0AC\uC774\uC988:".concat(size);
    if (spec)
        resultString += ", \uC0AC\uC591:".concat(spec);
    console.log(resultString);
});
