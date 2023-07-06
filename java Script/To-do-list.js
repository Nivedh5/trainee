var add_btn = document.getElementById("add-item");
var list = document.getElementById("main-list");
var Update_btn = document.getElementById("update-item");
var remove_btn = document.getElementById("remove-item");

// add_btn.addEventListener('click', function () {
//   var new_list = document.createElement("li");
//   new_list.appendChild(document.createTextNode("List item " + (list.childElementCount+1)))
//   new_list.className = 'lists'
//   list.appendChild(new_list)

//   console.log("hello")
// });
// var count=0
add_btn.addEventListener("click", function () {
  var inp = document.getElementById("inp");
  inp.value = inp.value.trim();
  var img = document.createElement("img");
  img.src = "delete_FILL0_wght400_GRAD0_opsz48.png";
  if (inp.value == "") {
    swal("Invalid or Input field is Empty");
  } else {
    var new_list = document.createElement("li");
    img.classList.add("img");
    // new_list.id="id-img-del"+count

    new_node = document.createTextNode(inp.value);
    new_list.appendChild(new_node);
    new_list.appendChild(img);
    new_list.className = "lists";
    list.appendChild(new_list);
    // console.log("hello")

    img.addEventListener("click", function (e) {
      var value_ = e.target.closest("li");
      value_.remove();
    });

    //     var del_img=document.getElementById(new_list.id)
    //     del_img.addEventListener('click',function(){
    //     console.log(new_list.id+count)
    //     count++
    // })
  }
});
remove_btn.addEventListener("click", function () {
  if (list.firstElementChild == null) {
    alert("there is nothing to remove");
  } else {
    var first_element = list.firstElementChild;
    list.removeChild(first_element);
  }
});

Update_btn.addEventListener("click", function () {
  var inp = document.getElementById("inp");
  var img = document.createElement("img");
  img.src = "delete_FILL0_wght400_GRAD0_opsz48.png";

  inp.value = inp.value.trim();
  if (inp.value == "") {
    alert("inp msg is empty");
  } else {
    if (list.firstElementChild == null) {
      alert("there is no list to update");
    } else {
      var first_element = list.firstElementChild;
      var new_list = document.createElement("li");
      var img = document.createElement("img");
      img.src = "delete_FILL0_wght400_GRAD0_opsz48.png";
      img.classList.add("img");
      new_node = document.createTextNode(inp.value);
      new_list.appendChild(new_node);
      new_list.appendChild(img);
      new_list.className = "lists";
      // list.appendChild(new_list);
      list.replaceChild(new_list, first_element);
    }
  }
  img.addEventListener("click", function (e) {
    var value_ = e.target.closest("li");
    value_.remove();
  });
});
