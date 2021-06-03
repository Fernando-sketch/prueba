const datosPersonales = document.getElementById("datos-personales");
const antecedentesNoPatologicos = document.getElementById("antecedentes-personales-no-patologicos");
const antecedentesPatologicos = document.getElementById("antecedentes-personales-patologicos");
const antecedentesPostnatales = document.getElementById("antecedentes-pre-peri-y-postnatales");
const historiaDelDesarrollo = document.getElementById("historia-del-desarrollo");
const antecedentesEscolares = document.getElementById("antecedentes-escolares");
const dinamicaFamiliar = document.getElementById("dinamica-familiar");
const aspectoDePersonalidad = document.getElementById("aspecto-de-personalidad-emocionales");
const section = document.querySelector(".section");

section.addEventListener("click",(e)=>{
    if(e.target.classList.contains("section__name")){
        datosPersonales.style.display="none";
        antecedentesNoPatologicos.style.display="none";
        antecedentesPatologicos.style.display="none";
        antecedentesPostnatales.style.display="none";
        historiaDelDesarrollo.style.display="none";
        antecedentesEscolares.style.display="none";
        dinamicaFamiliar.style.display="none";
        aspectoDePersonalidad.style.display="none";
        if(e.target.classList.contains("section__datos-personales")){
            datosPersonales.style.display="flex";
        }
        else if(e.target.classList.contains("section__antecedentes-personales-no-patologicos")){
            antecedentesNoPatologicos.style.display="flex";
        }
        else if(e.target.classList.contains("section__antecedentes-personales-patologicos")){
            antecedentesPatologicos.style.display="flex";
        }
        else if(e.target.classList.contains("section__antecedentes-pre-peri-y-postnatales")){
            antecedentesPostnatales.style.display="flex";
        }
        else if(e.target.classList.contains("section__historia-del-desarrollo")){
            historiaDelDesarrollo.style.display="flex";
        }
        else if(e.target.classList.contains("section__antecedentes-escolares")){
            antecedentesEscolares.style.display="flex";
        }
        else if(e.target.classList.contains("section__dinamica-familiar")){
            dinamicaFamiliar.style.display="flex";
        }
        else if(e.target.classList.contains("section__aspecto-de-personalidad-emocionales")){
            aspectoDePersonalidad.style.display="flex";
        }
    }
});