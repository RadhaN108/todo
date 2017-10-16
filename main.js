function addNewList() {
    alert('hello world!');
}

function addListItem() {
    console.log('hello world');
    // get the grocery list ol
    var list = document.getElementById("grocery-list");
    console.log(list);
    // get the value input field and it's value
    var itemInput = document.getElementById("new-list-item");
    console.log(itemInput.value);
    // create an new li item and add the text field input to it
    var newItem = document.createElement("li");
    newItem.appendChild(document.createTextNode(itemInput.value));
    console.log(newItem);
    // add the li item to the list
    list.appendChild(newItem);
}

function deleteListItem(item) {
    console.log (item);
    //remove li element (item) from ol element (item.parentNode)
    item.parentNode.removeChild(item);
}

function completeListItem(item) {
    console.log (item.parentNode);
    if (item.checked) { // true if the input box is checked
        item.parentNode.style.textDecoration = "line-through";
        // in css, this would be: "text-decoration: line-through"
    } else {
        item.parentNode.style.textDecoration = "none";
        // in css, this would be: "text-decoration: none"
    }
}

$(document).on("click", ".delete-item", function() {
    $(this).parent().remove();
});

$(document).on("click", "#add-item", function() {
    var list = $("#grocery-list");
    var itemInput = $("#new-list-item");
    list.append("<li>" + itemInput.val() + " <button class='delete-item'>X</button></li>");
});


/*
$(document).ready(function() {
    $("#add-item").click(function() { // bind handler for click event
        var list = $("#grocery-list"); // get the ol list by id
        var itemInput = $("#new-list-item"); // get the new item input
        // append the input value within an li element
        list.append("<li>" +  itemInput.val() + " <button class='delete-item'>X</button></li>");
    });

    $(".delete-item").click(function () {
        $(this).parent().remove();
        console.log("test");
    })
});
*/