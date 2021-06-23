


function addList(){
    var input = document.getElementById('input')
   var ul = document.getElementById('ul')
   var li = document.createElement('li');
//    var listInput = document.createElement('textarea');
//    listInput.setAttribute("row", "10")
   var text = document.createTextNode(input.value)
//    listInput.value = input.value
   
    
    var btndiv = document.createElement('div')
    var textdiv = document.createElement('div')
    textdiv.className = "textdiv"
    btndiv.className = "btndiv"
    var btn1 = document.createElement('button')
    var btn2 = document.createElement('button')
    var img1 = document.createElement('img')
    var img2 = document.createElement('img')
    img1.src = 'icons/edit-regular.svg'
    img2.src = 'icons/trash-solid.svg'

textdiv.appendChild(text)
    li.appendChild(textdiv)
    btn1.appendChild(img1)
    btn2.appendChild(img2)

    btndiv.appendChild(btn1)
    btndiv.appendChild(btn2)
    li.appendChild(btndiv)
    console.log(ul)

    

ul.appendChild(li)

input.value = ""

}