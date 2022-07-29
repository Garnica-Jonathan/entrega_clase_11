class Familia{
    constructor(nombre, apellido, edad){
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
    }
}

let grupoFamiliar = []

if(localStorage.getItem("grupoFamiliar")){
    grupoFamiliar = JSON.parse(localStorage.getItem("grupoFamiliar"))
}else{
    localStorage.setItem("grupoFamiliar", JSON.stringify(grupoFamiliar))
}

const form = document.getElementById("form")
const button = document.getElementById("buttonFamilt")
const family = document.getElementById("familiares")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    let datfamilia = new FormData(e.target)
    
    let familias = new Familia(datfamilia.get("Nombre"),datfamilia.get("Apellido"),datfamilia.get("Edad"))
    
    grupoFamiliar.push(familias)
    console.log(grupoFamiliar)
    localStorage.setItem("grupoFamiliar", JSON.stringify(grupoFamiliar))
    form.reset()

})

button.addEventListener("click", () => {
    let arrayStorage = JSON.parse(localStorage.getItem("grupoFamiliar"))

    family.innerHTML = ""
    arrayStorage.forEach((familia, indice) => {
        family.innerHTML += `
        <div class="card" id="familia${indice}"style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${familia.nombre}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${familia.apellido}</h6>
                <p class="card-text">${familia.edad}</p>
                <button class="btn btn-danger">Eliminar Tarea</button>
            </div>
        </div>
        `
    });

    arrayStorage.forEach((familia, indice) => {
        let buttonDanger = document.getElementById(`familia${indice}`).lastElementChild.lastElementChild
        buttonDanger.addEventListener("click", () =>{
            document.getElementById(`familia${indice}`).remove()
            grupoFamiliar.splice(indice,1)
            localStorage.setItem("grupoFamiliar", JSON.stringify(grupoFamiliar))

        })
    });

})





















