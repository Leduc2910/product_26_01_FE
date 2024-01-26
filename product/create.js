function showFormCreate() {
    axios.get('http://localhost:8080/categories')
        .then(function (response) {
            let categories = response.data;
            let html = ` <div>
    <input type="text" id="name" placeholder="Name"><br>
    <input type="text" id="price" placeholder="Price"><br>
    <input type="text" id="quantity" placeholder="Quantity"><br>
    <select id="categoryID">`;
            for (let i = 0; i < categories.length; i++) {
                html += `<option value="${categories[i].id}">${categories[i].name}</option>`
            }
            html += `</select><br>
            <button onclick="create()">Thêm mới</button>
            </div>`
            document.getElementById("main").innerHTML = html;
        })

}

function create() {
    let name = document.getElementById("name").value;
    let price = +document.getElementById("price").value;
    let quantity = +document.getElementById("quantity").value;
    let categoryID = +document.getElementById("categoryID").value;
    let newProduct = {
        name : name,
        price : price,
        quantity : quantity,
        category : {
            id : categoryID
        }
    }
    axios.post('http://localhost:8080/products', newProduct).then(function (response) {
        showHome();
    })
        }