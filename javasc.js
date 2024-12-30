
const lists=document.getElementsByClassName("list");

const rightBox= document.getElementById("right");

const rightRightBox = document.getElementById("right-right");

const leftBox= document.getElementById("left");

const firstBox= document.getElementById("first");

const secondBox= document.getElementById("second");

const thirdBox= document.getElementById("third");

const boxes= document.getElementsByClassName("box");


let selected = null;



for(let list of lists){
    list.addEventListener("dragstart",function(e){
        selected=e.target;
    });
}

rightBox.addEventListener("dragover",function(e){
    e.preventDefault();
})

rightBox.addEventListener("drop",function(e){
    if(selected){
        rightBox.appendChild(selected);
        selected=null;
    }
})

leftBox.addEventListener("dragover",function(e){
    e.preventDefault();
})

leftBox.addEventListener("drop",function(e){
    if(selected){
        leftBox.appendChild(selected);
        selected=null;
    }
})

rightRightBox.addEventListener("dragover",function(e){
    e.preventDefault();
})

rightRightBox.addEventListener("drop",function(e){
    if(selected){
        rightRightBox.appendChild(selected);
        selected=null;
    }
})


for(let boxItem of boxes){
    boxItem.addEventListener("dragstart",function(e){
        selected=e.target;
    })
}

// firstBox.addEventListener("dragover",function(e){
//     e.preventDefault();
// })

secondBox.addEventListener("drop",function(e){
    if(selected){
    secondBox.appendChild(selected);
    selected=null;
    }
})

thirdBox.addEventListener("drop",function(e){
    if(selected){
    thirdBox.appendChild(selected);
    selected=null;
    }
})

firstBox.addEventListener("drop",function(e){
    if(selected){
    firstBox.appendChild(selected);
    selected=null;
    }
})