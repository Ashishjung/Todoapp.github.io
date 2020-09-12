let textval=document.querySelector('#txt');
let Addbut=document.getElementById('square');
let ul=document.getElementById('ul');
let container=document.querySelector('.container')
let twm=new TimelineMax()
twm.fromTo(container,1,{height:"0%"},{height:"60%",ease:Power2.easeInOut});
const TodoAPP=()=>{
    let createli=document.createElement('li')
    let deletebutt=document.createElement('button');
    deletebutt.innerHTML='<i class="fa fa-trash" aria-hidden="true"></i>'
    deletebutt.classList.add('delete-but');
    let complete=document.createElement('button');
    complete.innerHTML='<i class="fa fa-check" aria-hidden="true"></i>'
    complete.classList.add('complete-but');
    createli.innerHTML=textval.value;
    createli.appendChild(deletebutt);
    createli.appendChild(complete)
    ul.appendChild(createli);
    textval.value="";
    ul.addEventListener('click',deleteitem)
    function deleteitem(e){
        const item=e.target;
        if(item.classList[0]==='delete-but'){
        const todo=item.parentElement
        todo.classList.add('todoanim');
        todo.addEventListener('transitionend',()=>{
             todo.remove();
        })
        }
        if(item.classList[0]==='complete-but'){
        item.parentElement.classList.add('comp');
        }
  }
}

Addbut.addEventListener('click',TodoAPP)

