 function addList(){
    var input = document.getElementById('input')
   var ul = document.getElementById('ul')
   var li = document.createElement('li');

   var text = document.createTextNode(input.value)


    var listInput = document.createElement('input')
    listInput.setAttribute("disabled","disabled")
    listInput.setAttribute("class","listInput")
    listInput.value = text.nodeValue
    var span1 = document.createElement('span')
    span1.setAttribute("onclick","edit(this)")
    var span2 = document.createElement('span')
    span2.setAttribute("onclick","delList(this)")
    var img1 = document.createElement('img')
    var img2 = document.createElement('img')
    img1.src = 'icons/edit-regular.svg'
    img2.src = 'icons/trash-solid.svg'
    span1.appendChild(img1)
    span2.appendChild(img2)


    li.appendChild(listInput)
    li.appendChild(span1)
    li.appendChild(span2)

    if(input.value === ""){
        alert("Nothing to add")
    }
    else if(input.value === " "){
        alert("Nothing to add")
    }
    else{

        ul.appendChild(li)
    }


input.value = ""

}




var startstop = 0;

function edit(e){

    startstop = startstop + 1;

    if (startstop === 1) {
        
        e.firstChild.src = "icons/share-square-regular.svg"
        e.parentNode.firstChild.disabled = false
        e.parentNode.firstChild.style.borderBottom = "2px solid red"

    } else if (startstop === 2) {
        e.firstChild.src = "icons/edit-regular.svg"
        e.parentNode.firstChild.disabled = true
        e.parentNode.firstChild.style.borderBottom = "none"
        startstop = 0;
        
    }

}
    

function delList(e){
e.parentNode.remove()
}

function empty(){
    document.getElementById('ul').innerHTML = ""
}