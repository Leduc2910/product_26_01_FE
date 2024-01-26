function showHome() {
    axios.get('http://localhost:8080/products')
        .then(function (response) {
            let productList = response.data;
            let html = ` <table border="1">
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Category</th>
            <th colspan="2">Action</th>
        </tr>`
            for (let i = 0;i < productList.length; i++) {
                html += `        
        <tr>
            <td>${productList[i].id}</td>
            <td>${productList[i].name}</td>
            <td>${productList[i].price}</td>
            <td>${productList[i].quantity}</td>
            <td>${productList[i].category.name}</td>
            <td><button onclick="showFormEdit(${productList[i].id})">Sửa</button></td>
            <td><button onclick="remove(${productList[i].id})">Xóa</button></td>
        </tr>`
            }
            html += '</table>'
            document.getElementById("main").innerHTML = html;
        })
}
showHome()

function remove(id) {
    let isConfirm = confirm("Bạn có chắc chắn muốn xóa không?");
    if (isConfirm) {
        axios.delete(`http://localhost:8080/products/${id}`).then((response) => {
            alert("Xóa thành công")
            showHome()
        })
    } else {
        alert("haizz")
    }
}

function searchByName() {
    let inSearch = document.getElementById("search").value;
    axios.get(`http://localhost:8080/products/search?name=${inSearch}`)
        .then(function (response) {
            let productList = response.data;
            let html = ` <table border="1">
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Category</th>
            <th colspan="2">Action</th>
        </tr>`
            for (let i = 0;i < productList.length; i++) {
                html += `        
        <tr>
            <td>${productList[i].id}</td>
            <td>${productList[i].name}</td>
            <td>${productList[i].price}</td>
            <td>${productList[i].quantity}</td>
            <td>${productList[i].category.name}</td>
            <td><button onclick="showFormEdit(${productList[i].id})">Sửa</button></td>
            <td><button onclick="remove(${productList[i].id})">Xóa</button></td>
        </tr>`
            }
            html += '</table>'
            document.getElementById("main").innerHTML = html;
        })
}