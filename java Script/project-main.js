var btn_post = document.getElementById("post-btn");
btn_post.addEventListener("click", function () {
  var todo_delete = document.getElementById("todo-table");
  var post_table = document.getElementById("post-table");
  var users_table = document.getElementById("users-table");
  todo_delete.style.display = "none";
  post_table.style.display = "block";
  users_table.style.display = "none";
});

var btn_post = document.getElementById("todo-btn");
btn_post.addEventListener("click", function () {
  var todo_delete = document.getElementById("todo-table");
  var post_table = document.getElementById("post-table");
  var users_table = document.getElementById("users-table");
  todo_delete.style.display = "block";
  post_table.style.display = "none";
  users_table.style.display = "none";
});

var btn_post = document.getElementById("users-btn");
btn_post.addEventListener("click", function () {
  var todo_delete = document.getElementById("todo-table");
  var post_table = document.getElementById("post-table");
  var users_table = document.getElementById("users-table");
  todo_delete.style.display = "none";
  post_table.style.display = "none";
  users_table.style.display = "block";
});

var btn_post = document.getElementById("post-btn");
btn_post.addEventListener("click", function () {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((json) => print(json));
  function print(result) {
    //  console.log(result)
    var body = document.getElementById("post-table");
    var table = document.createElement("table");
    var table1 = document.getElementById("table1");
    for (let i = 0; i < result.length; i++) {
      var tr = document.createElement("tr");
      tr.id = result[i].id;
      let a = tr.id;
      // console.log(a)
      var td1 = document.createElement("td");
      td1.className = "td1";
      var text1 = document.createTextNode(result[i].userId);
      td1.appendChild(text1);
      tr.appendChild(td1);
      // var tr2=document.createElement("tr")
      var td2 = document.createElement("td");
      var text2 = document.createTextNode(result[i].id);

      td2.appendChild(text2);
      tr.appendChild(td2);
      // var tr3=document.createElement('tr')
      var td3 = document.createElement("td");
      var text3 = document.createTextNode(result[i].title);
      td3.appendChild(text3);
      tr.appendChild(td3);
      // var tr4=document.createElement('tr')
      var td4 = document.createElement("td");
      var text4 = document.createTextNode(result[i].body);
      td4.appendChild(text4);
      tr.appendChild(td4);
      console.log(table);
      body.appendChild(tr);

      var edit_td = document.createElement("td");
      var edit_btn = document.createElement("button");
      edit_btn.textContent = "Edit";
      edit_td.appendChild(edit_btn);
      tr.appendChild(edit_td);
      // let fet1="https://jsonplaceholder.typicode.com/posts/" + i;
      edit_btn.addEventListener("click", function (e) {
        // var input=document.createElement("input")
        var input = prompt("enter the msg to be change in title");
        console.log(input);
        var change = document.getElementById(a);
        // console.log(result[i].id)
        console.log(change);
        var row = change.querySelectorAll("td")[2];
        row.innerHTML = input;
        // console.log(row)
        fetch(("https://jsonplaceholder.typicode.com/posts/" + i), {
          method: "PUT",
          body: JSON.stringify({ title: input }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
          .then((response1) => response1.json())
          .then((json) => {
            if (json.status == 200) {
              row.innerHTML = input;
            }
            console.log(json);
          });
      });

      var delete_td = document.createElement("td");
      var delete_btn = document.createElement("button");
      delete_btn.textContent = "Delete";
      delete_td.appendChild(delete_btn);
      tr.appendChild(delete_td);
      //  delete_btn.id="delete"+i
      let fet = "https://jsonplaceholder.typicode.com/posts/" + i;
      delete_btn.addEventListener("click", function (event) {
        fetch(fet, { method: "DELETE" })
          .then((Response) => {
            console.log(Response);
            if (Response.status == 200) {
              var value_ = event.target.closest("tr");
              value_.remove();
            }
            console.log();
          })
          .then((error) => {
            console.log(error);
          });
        body.appendChild(tr);
      });
    }
  }
});

//todos

//todos

var btn_post = document.getElementById("todo-btn");
btn_post.addEventListener("click", function () {
  // var todo=document.getElementById("todo-table")
  // var post=document.getElementById("post-add")
  // post.style.display="none"
  // todo.style.display="block"

  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res) => res.json())
    .then((json) => print(json));
  function print(result) {
    //  console.log(result)
    var body = document.getElementById("todo-table");
    var table = document.createElement("table");
    var table1 = document.getElementById("table1");
    for (let i = 0; i < result.length; i++) {
      var tr = document.createElement("tr");
      var td1 = document.createElement("td");
      var text1 = document.createTextNode(result[i].userId);
      var btn = td1.appendChild(text1);
      tr.appendChild(td1);
      // var tr2=document.createElement("tr")
      var td2 = document.createElement("td");
      var text2 = document.createTextNode(result[i].id);
      td2.appendChild(text2);
      tr.appendChild(td2);
      // var tr3=document.createElement('tr')
      var td3 = document.createElement("td");
      var text3 = document.createTextNode(result[i].title);
      td3.appendChild(text3);
      tr.appendChild(td3);
      // var tr4=document.createElement('tr')
      var td4 = document.createElement("td");
      var text4 = document.createTextNode(result[i].completed);
      td4.appendChild(text4);
      tr.appendChild(td4);
      console.log(table);
      body.appendChild(tr);

      var edit_td = document.createElement("td");
      var edit_btn = document.createElement("button");
      edit_btn.textContent = "Edit";
      edit_td.appendChild(edit_btn);
      tr.appendChild(edit_td);
      let fet1 = "https://jsonplaceholder.typicode.com/todos/" + i;
      edit_btn.addEventListener("click", function (e) {
        // var input=document.createElement("input")
        var input = prompt("enter the msg to be change in title");
        console.log(input);
        result[i].title = input;
        fetch(fet1, {
          method: "PUT",
          body: JSON.stringify({ title: input }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
          .then((response1) => response1.json())
          .then((json) => {
            if (json.status == 200) {
            }
            console.log(json);
          });
      });

      var delete_td = document.createElement("td");
      var delete_btn = document.createElement("button");
      delete_btn.textContent = "Delete";
      delete_td.appendChild(delete_btn);
      tr.appendChild(delete_td);
      //  delete_btn.id="delete"+i
      let fet = "https://jsonplaceholder.typicode.com/todos/" + i;
      delete_btn.addEventListener("click", function (event) {
        fetch(fet, { method: "DELETE" })
          .then((Response) => {
            console.log(Response);
            if (Response.status == 200) {
              var value_ = event.target.closest("tr");
              value_.remove();
            }
            console.log();
          })
          .then((error) => {
            // console.log(error);
          });
        body.appendChild(tr);
      });
    }
  }
});

//users

var btn_post = document.getElementById("users-btn");
btn_post.addEventListener("click", function () {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((json) => print(json));
  function print(result) {
    //  console.log(result)
    var body = document.getElementById("users-table");
    var table = document.createElement("table");
    var table1 = document.getElementById("table1");
    for (let i = 0; i < result.length; i++) {
      var tr = document.createElement("tr");
      var td1 = document.createElement("td");
      var text1 = document.createTextNode(result[i].id);
      var btn = td1.appendChild(text1);
      tr.appendChild(td1);
      // var tr2=document.createElement("tr")
      var td2 = document.createElement("td");
      var text2 = document.createTextNode(result[i].name);
      td2.appendChild(text2);
      tr.appendChild(td2);
      // var tr3=document.createElement('tr')
      var td3 = document.createElement("td");
      var text3 = document.createTextNode(result[i].username);
      td3.appendChild(text3);
      tr.appendChild(td3);
      // var tr4=document.createElement('tr')
      var td4 = document.createElement("td");
      var text4 = document.createTextNode(result[i].email);
      td4.appendChild(text4);
      tr.appendChild(td4);
      console.log(table);
      body.appendChild(tr);

      var td5 = document.createElement("td");
      var text5 = document.createTextNode(result[i].address);
      td5.appendChild(text5);
      tr.appendChild(td5);
      console.log(table);
      body.appendChild(tr);

      var edit_td = document.createElement("td");
      var edit_btn = document.createElement("button");
      edit_btn.textContent = "Edit";
      edit_td.appendChild(edit_btn);
      tr.appendChild(edit_td);
      let fet1 = "https://jsonplaceholder.typicode.com/users/" + i;
      edit_btn.addEventListener("click", function (e) {
        // var input=document.createElement("input")
        var input = prompt("enter the msg to be change in title");
        console.log(input);
        result[i].title = input.value;
        fetch(fet1, {
          method: "PUT",
          body: JSON.stringify({ title: input }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
          .then((response1) => response1.json())
          .then((json) => {
            if (json.status == 200) {
            }
            console.log(json);
          });
      });

      var delete_td = document.createElement("td");
      var delete_btn = document.createElement("button");
      delete_btn.textContent = "Delete";
      delete_td.appendChild(delete_btn);
      tr.appendChild(delete_td);
      //  delete_btn.id="delete"+i
      let fet = "https://jsonplaceholder.typicode.com/users/" + i;
      delete_btn.addEventListener("click", function (event) {
        fetch(fet, { method: "DELETE" })
          .then((Response) => {
            console.log(Response);
            if (Response.status == 200) {
              var value_ = event.target.closest("tr");
              value_.remove();
            }
            console.log();
          })
          .then((error) => {
            console.log(error);
          });
        body.appendChild(tr);
      });
    }
  }
});
