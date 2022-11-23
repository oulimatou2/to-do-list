//let's get our object
let input = document.querySelector('#add');
let btn = document.querySelector('#btn');
let list = document.querySelector('#list');
let el = document.getElementsByTagName('li');
// now we will create a function that will allow us to add element on button click
btn.addEventListener('click',() =>{
    let txt = input.ariaValueMax;
    if(txt,=== ""){
        alert('you must write something');
    }else{
        let li = document.createElement('li');
        li.innerHTML = txt;
        list.insertBefore(li, list.hasChildNodes[0]);
        input.value = '';
    }

})

// now we will create a function that will allow us to add element on button click
list.addEventListener('click', e =>{
    if(e.target.tagName == 'li'){
        e.target.classlist.toggle('checked');
    }
})

