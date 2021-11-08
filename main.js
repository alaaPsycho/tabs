let tabs = document.querySelectorAll('.tabs li');
//let arrayTabs =  Array.from(tabs);
let divs  = document.querySelectorAll('.content div')
//console.log(tabs)
//console.log(arrayTabs)


tabs.forEach((el)=>{
    console.log(el)
    el.addEventListener('click',(e)=>{
        tabs.forEach((el)=>{
            el.classList.remove('active')
        })

        e.target.classList.add('active')//or currentTarget
        divs.forEach((div)=>{
            div.style.display ="none";
        })
        document.querySelector(e.target.dataset.content).style='display:block';
    })
})