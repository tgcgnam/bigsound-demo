//
let idUpdate = null;
let isUpdate = false;
//create id
function createID() {;
    let id = Math.floor(Math.random() * 10000);
    return id;
};
let product = [

    {
        id: createID(),
        title: "PHP",
        status: true
    },
    {
        id: createID(),
        title: "Ruby",
        status: false
    },
    {
        id: createID(),
        title: "JavaScripts",
        status: true
    }
];
//delete todo
function deleteProduct(id) {
    for (let i = 0; i < product.length; i++) {
        if (product[i].id == id) {
            product.splice(i, 1)
        }
    }
    renderUI(product)
};
//render ui
function renderUI(arr) {
    $(".products-list").text("");

    if (arr.length == 0) {
        $(".products-list").html(`<p class="todos-empty">Khong co cong viec trong danh sach`);
        return;
    }

    for (let i = 0; i < todos.length; i++) {
        let t = arr[i];
        $(".products-list").append(`
                <div class="todo-item ${t.status?"active-todo":""}">
                    <div class="todo-item-title">
                        <input type="checkbox" ${t.status ? `checked` : ``} onclick="toggleStatus(${t.id})">
                        <p>${t.title}</p>
                    </div>
                    <div class="option">
                        <button class="btn btn-update" onclick="updateTodo(${t.id})">
                        <img src="./img/pencil.svg" alt="icon">
                    </button>
                        <button class="btn btn-delete" onclick="deleteTodo(${t.id})">
                        <img src="./img/remove.svg" alt="icon">
                    </button>
                    </div>
                </div>`)
    }
};

renderUI(todos);