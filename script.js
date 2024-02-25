function createItem(event) {
    event.preventDefault(); // Prevent form submission

    const name = document.getElementById('name').value; // Use .value instead of .textContent
    const price = document.getElementById('price').value;
    const color = document.getElementById('color').value;

    fetch('http://localhost:5555/Item', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "name": name, // Use the variables instead of accessing the DOM again
            "price": price,
            "color": color
        })
    }).then((response) => {
        window.location.href = "allItems.html"
    }).catch((error) => {
        console.error('Error:', error);
    });
}

function deleteItem(event) {
    event.preventDefault(); // Prevent form submission

    const name = document.getElementById('name').value; // Use .value instead of .textContent

    fetch('http://localhost:5555/Item', {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "name": name, // Use the variables instead of accessing the DOM again
        })
    }).then((response) => {
        window.location.href = "allItems.html"
    }).catch((error) => {
        console.error('Error:', error);
    });
}

function editItem(event) {
    event.preventDefault(); // Prevent form submission

    const name = document.getElementById('name').value; // Use .value instead of .textContent
    const price = document.getElementById('price').value;
    const color = document.getElementById('color').value;

    fetch('http://localhost:5555/Item', {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "name": name, // Use the variables instead of accessing the DOM again
            "price": price,
            "color": color
        })
    }).then((response) => {
        window.location.href = "allItems.html"
    }).catch((error) => {
        console.error('Error:', error);
    });
}