const { Router } = require("express");
const router = Router();
const faker = require("faker");
faker.locale = "es";

router.get("/", (req, res) => {
    const randomProduct = [];
    for (let index = 0; index < 5; index++) {
        randomProduct.push({
            id: index + 1,
            title: faker.commerce.product(),
            price: faker.commerce.price(),
            thumbnail: faker.image.imageUrl(),
        });
    }
    res.json(randomProduct);
});

module.exports = router;
