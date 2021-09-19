
const formADD= document.querySelector(".formAdd");
const ul= document.querySelector(".ul");
const formPesquisar= document.querySelector(".formPesquisar");

formADD.addEventListener('submit', event => {
    
    event.preventDefault();
    let inputValue= event.target.add.value.trim();
    
    if(inputValue.length !== 0){
        
        ul.innerHTML += ` <li class="lista d-flex justify-content-between align-items-center p-3 border-bottom">
        <span>${inputValue}</span>
        <i class="far fa-trash-alt lixeira rounded"></i>
        </li>`;
    }

    formADD.reset();
});

ul.addEventListener('click', event => {
    let classListArray= Array.from(event.target.classList);

    if(classListArray[0] === "far"){
        
        let excluirLi= event.target.parentElement;
        excluirLi.remove();
    }

});

formPesquisar.addEventListener("submit", event => {
    event.preventDefault();
    let inputValue= event.target.pesquisar.value.toLowerCase();

    let arrayLi= Array.from(ul.children);

    arrayLi.forEach(item => {
        
        if(!item.innerText.toLowerCase().includes(inputValue)){
            
            item.classList.remove("d-flex")
            item.classList.add("d-none")
        }
    })

    arrayLi.forEach(item => {
        
        if(item.innerText.toLowerCase().includes(inputValue)){
            
            item.classList.remove("d-none")
            item.classList.add("d-flex")
        }
    })
    
    
})


