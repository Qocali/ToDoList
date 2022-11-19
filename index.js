const inp=document.querySelector(".inp")
const ul=document.querySelector("ul")
const sub=document.querySelector(".sub")
const sort=document.querySelector("#sort")
let html=""
let arr=[]
const data=()=>{
    if(inp.value.length>0){
        ul.style.display="block"
        arr.push(inp.value)
        arr.forEach((item)=>{
            html+=`<li>${item} <span class="li"><i class="fa-solid fa-x" style="color:#C4C4C4"></i></span></li> `
        })
        ul.innerHTML=html;
        html=""
        inp.value=""
    }
}
sub.addEventListener("click",data)
ul.addEventListener('click',(e)=>{
if(e.target.tagName=="I"){
    e.target.parentElement.parentElement.remove()
    let index=arr.findIndex(()=>e.target.parentElement.parentElement.textContent)
   console.log( arr.splice(index,1))
}
if(ul.children.length==0){
    ul.style.display="none"
    arr=[]
}
})
const sorter=()=>{
    let array=arr.sort()
    arr.forEach((item)=>{
        html+=`<li>${item} <span class="li"><i class="fa-solid fa-x" style="color:#C4C4C4"></i></span></li> `
    })
    ul.innerHTML=html;
    html=""
    array=[]
}
sort.addEventListener("click",sorter)
