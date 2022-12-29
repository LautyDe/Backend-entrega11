const { Router } = require("express");
const router = Router();
const faker = require("faker");
faker.locale = "es";

router.get("/", (req, res) => {
    const randomProducts = [];
    for (let index = 0; index < 5; index++) {
        randomProducts.push({
            title: faker.commerce.product(),
            price: faker.commerce.price(),
            thumbnail: faker.image.imageUrl(),
        });
        console.log(randomProducts);
    }
    res.render("test", {
        products: randomProducts,
        style: "test.css",
        title: "Productos-test",
    });
});

module.exports = router;
