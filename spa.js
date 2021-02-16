let openMenu = false;


var tabs = document.querySelectorAll('a[data-tab-for]') 
var contenidos = document.querySelectorAll('.content > div') 

tabs.forEach(tab => tab.addEventListener('click',mostrarContenido))  
window.addEventListener('popstate',evento => { 
    console.log(evento.state)
    console.log(evento.state.tabFor)
    if(evento.state){ 
        administrarParrafos(evento.state.tabFor)
    }
})

document.querySelector("#menu").addEventListener("click", () => {
    if (openMenu)  //si openMenu == true
        {document.querySelector(".menu").classList.add('openMenu'); //agrega la clase openMenu al menu.
        openMenu = false;} //cambia el valor de la variable a false, para la proxima q le haga click haga el else
    else 
        {document.querySelector(".menu").classList.remove('openMenu'); 
        openMenu = true;}
})


history.replaceState({ 
    tabFor: tabs[0].dataset.tabFor
},null, 'tab-'+tabs[0].dataset.tabFor)

function mostrarContenido(evento) {
    evento.preventDefault()
    var id_contenido = evento.target.dataset.tabFor 
    console.log(id_contenido)
    administrarParrafos(id_contenido)
    window.history.pushState({ 
        tabFor: id_contenido 
    },null,'tab-' + id_contenido) 
}   

function administrarParrafos(id_contenido){
    contenidos.forEach(contenido =>{
        if(contenido.getAttribute('id') === id_contenido){
            contenido.classList.remove('hide')
            
        }else{
            contenido.classList.add('hide')
        }
    })
    tabs.forEach(tab => {
        if(tab.dataset.tabFor === id_contenido){
            tab.classList.add('active')
        }else{
            tab.classList.remove('active')
        }
    })
}

//-------------------------efect Typing


