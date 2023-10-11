var data = [
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
function formatProduct(product) {
    var id = product.id, name = product.name, price = product.price, discount = product.discount, stock = product.stock, category = product.category, size = product.size, spec = product.spec;
    var formattedPrice = price;
    var formattedDiscount = '';
    if (discount) {
        if (typeof discount === "string") {
            // 할인가가 있는 목록 예외처리
            var discountAmount = (parseInt(discount) / 100) * price;
            formattedPrice -= discountAmount;
            formattedDiscount = ", \uD560\uC778\uAC00: ".concat(formattedPrice.toLocaleString(), "\uC6D0");
        }
        else {
            formattedPrice -= discount;
            formattedDiscount = ", \uD560\uC778\uAC00: ".concat(formattedPrice.toLocaleString(), "\uC6D0");
        }
    }
    // 전자제품일 경우 스팩이 있으므로 포함하도록 예외처리
    var specInfo = category === '전자제품' && spec ? ", \uC0AC\uC591: ".concat(spec) : '';
    // 의류일 경우 사이즈가 있으므로 포함 하도록 예외 처리
    var sizeInfo = category === '의류' && size ? ", \uC0AC\uC774\uC988: ".concat(size) : '';
    return "ID: ".concat(id, ", \uC774\uB984: ").concat(name, ", \uAC00\uACA9: ").concat(price.toLocaleString(), "\uC6D0").concat(formattedDiscount, ", \uC7AC\uACE0: ").concat(stock, ", \uCE74\uD14C\uACE0\uB9AC: ").concat(category).concat(specInfo).concat(sizeInfo);
}
data.forEach(function (product) {
    console.log(formatProduct(product));
});
