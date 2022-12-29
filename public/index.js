const socket = io.connect();

function MessagesRender(data) {
    const html = data
        .map(elem => {
            return `<div>
        <strong style='color: blue'>${elem.author.email}</strong>
        <span style='color: brown'>${elem.date}</span>:
        <i style='color: green'>${elem.text}</i>
        <img class='img' src=${elem.author.avatar} alt='imagen de avatar'>
        </div>`;
        })
        .join(" ");
    document.getElementById("messages").innerHTML = html;
}

socket.on("message", data => {
    MessagesRender(data);
});

function addMessage(e) {
    const message = {
        author: {
            id: document.getElementById("email").value,
            name: document.getElementById("name").value,
            lastName: document.getElementById("lastName").value,
            age: document.getElementById("age").value,
            aka: document.getElementById("aka").value,
            avatar: document.getElementById("avatar").value,
        },
        text: document.getElementById("text").value,
    };

    if (!message.author.id) {
        alert(
            "Por favor, introduzca un email para mandar un mensaje en el chat"
        );
    } else if (!message.author.name) {
        alert(
            "Por favor, introduzca un nombre para mandar un mensaje en el chat"
        );
    } else if (!message.author.lastName) {
        alert(
            "Por favor, introduzca un apellido para mandar un mensaje en el chat"
        );
    } else if (!message.author.age) {
        alert(
            "Por favor, introduzca una edad para mandar un mensaje en el chat"
        );
    } else if (!message.author.aka) {
        alert(
            "Por favor, introduzca un alias para mandar un mensaje en el chat"
        );
    } else if (!message.author.avatar) {
        alert(
            "Por favor, introduzca un link para su avatar para mandar un mensaje en el chat"
        );
    } else if (!message.text) {
        alert("Por favor, introduzca un mensaje para enviar");
    } else {
        socket.emit("new-message", message);
    }

    return false;
}

function addProduct(e) {
    const product = {
        title: document.getElementById("title").value,
        price: document.getElementById("price").value,
        thumbnail: document.getElementById("thumbnail").value,
    };
    if (!product.title) {
        alert("Por favor, introduzca el nombre del producto");
    } else if (!product.price) {
        alert("Por favor, introduzca el precio del producto");
    } else if (!product.thumbnail) {
        alert("Por favor, introduzca el link con la imagen del producto");
    } else {
        socket.emit("new-product", product);
    }

    return false;
}
