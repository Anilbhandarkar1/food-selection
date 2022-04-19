let textValue = document.querySelector('#txt');
let ani1 = document.querySelector('#container1')
let ani2 = document.querySelector('#container2')
let ani3 = document.querySelector('#container3')
let list1 = document.querySelector("#li1")
let list2 = document.querySelector("#li2")
let list3 = document.querySelector("#li3")





    textValue.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("btn").click();
    }
});

function show(){
    if(textValue.value.toLowerCase() === "fries"){
        ani1.style.animation = "myMove 4s 1"
        ani2.style.animation ="myBove 4s 1"
        ani3.style.animation ="myDove 4s 1"
        list1.style.display = "block"
    }else if(textValue.value.toLowerCase() === "pepsi"){
        ani2.style.animation = "bevre 4s 1"
        ani1.style.animation ="myDove 4s 1"
        ani3.style.animation ="myDove 4s 1"
        list2.style.display = "block"

    }else if(textValue.value.toLowerCase() === "popcorn"){
    ani3.style.animation = "pop 4s 1"
    ani2.style.animation ="myDove 4s 1"
    ani1.style.animation ="myDove 4s 1"
    list3.style.display = "block"

    }
    else{
        return ;
    }
}

