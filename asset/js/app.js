
const navSlide = ()=>{
    const burger = document.querySelector(".burger"); 
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener("click", ()=>{
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) =>{
            
            if(link.style.animation)
            {
                link.style.animation = '';
            }
            else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7+0.3}s`;
            }
            
        });
        burger.classList.toggle('toggle');
    });

}

navSlide();
/*********************************Colocar aca el desarrollo de su ejercicio***************************/

var cont = 1;
var bitacoras = [];
var formulario = document.getElementById("bitacora");

formulario.addEventListener("submit", (evt) => {
    bandera = 1;
    evt.preventDefault();
    let bitacora = {
        cant: cont,
        fecha: formulario[1].value.trim(),
        descripcion: formulario[2].value.trim(),
        cantidad: formulario[3].value.trim()
    };

    if(bitacora.fecha === "" || bitacora.fecha == null){
        bandera = 0;
        formulario[1].style = "border-color: #FF0000";
    }
    if(bitacora.descripcion === "" || bitacora.descripcion == null){
        bandera = 0;
        formulario[2].style = "border-color: #FF0000";
    }
    if(bitacora.cantidad === "" || bitacora.cantidad == null){
        bandera = 0;
        formulario[3].style = "border-color: #FF0000";
    }

    if(bandera == 1){
        formulario[1].style = "border-color: #00FF00";
        formulario[2].style = "border-color: #00FF00";
        formulario[3].style = "border-color: #00FF00";
        bitacoras.push(bitacora);
        cont++;
        mostrar();
    }
});

const crearElemento = (bitacora, tbody) => {
    let tr = document.createElement("tr");
    Object.values(bitacora).forEach(item => {
        let td = document.createElement("td");
        let content = document.createTextNode(item);
        td.appendChild(content);
        tr.setAttribute("class", "click");
        tr.appendChild(td); 
    });
    let opc = document.createElement("td");
    let btnDel = document.createElement("button");
    btnDel.innerText = "Eliminar";
    btnDel.addEventListener("click", (evt) =>{
        eliminarElemento(tbody, tr, bitacora);
    });
    opc.appendChild(btnDel);
    tr.appendChild(opc);
    tbody.appendChild(tr);
};

const eliminarElemento = (tbody, elemento, bitacora) =>{
    tbody.removeChild(elemento);
    bitacoras.splice(bitacoras.indexOf(bitacora), 1);
};

const eliminar = (tbody) => {
    while(tbody.firstChild){
        tbody.removeChild(tbody.firstChild);
    }
}

const agregar= ()=>{
    var eventtr = document.querySelectorAll(".click");
        eventtr.forEach((item, index) => {
        item.addEventListener("click", () => {
        document.querySelector("#fecha").value = item.childNodes[1].textContent;
        document.querySelector("#descp").value = item.childNodes[2].textContent;
        document.querySelector("#cant").value = item.childNodes[3].textContent;
        });
    })
} 

const mostrar = () =>{
    if(document.querySelector(".tabla-btc tbody").childElementCount > 0){
        eliminar(document.querySelector(".tabla-btc tbody"));
    }
    bitacoras.forEach(item => {
        crearElemento(item, document.querySelector(".tabla-btc tbody"));
    });
    
    agregar(); 
};

