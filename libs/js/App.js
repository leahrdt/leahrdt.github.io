let compoListaBuenas;
let compoListaRegular;
let compoListaMalas;

//JS GENERAL DE LA WEB, TANTO INICIO, COMO FORMULARIO Y LA SECCIÓN DE "CRITICA" ESTAN HECHAS CON OBJETOS EXTERNOS. LA IDEA ES APLICAR LA POO

(function(){

  const compoInicio = new Inicio({
    elemRoot: document.getElementById("Inicio"),
  });


  const compoForm = new formOpinion({
    elemRoot: document.getElementById("formOpinion"),
  });

  compoListaBuenas = new Listado({
    titulo: "Buena",
    elemRoot: document.getElementById("listadoBuenas")
  });


  compoListaRegular = new Listado({
    titulo: "Regular",
    elemRoot: document.getElementById("listadoRegular")
  });

  compoListaMalas = new Listado({
    titulo: "Mala",
    elemRoot: document.getElementById("listadoMalas")
  });


  console.dir(compoForm);

  compoForm.subscribe("buena", ()=>alert("Gracias"));
  compoForm.subscribe("buena", compoListaBuenas.agregar.bind(compoListaBuenas));

  
  compoForm.subscribe("regular", ()=>alert("Gracias"));
  compoForm.subscribe("regular", compoListaRegular.agregar.bind(compoListaRegular));

  
  compoForm.subscribe("mala", ()=>alert("Gracias"));
  compoForm.subscribe("mala", compoListaMalas.agregar.bind(compoListaMalas));


})();

(function(){

  const compoForma = new Formulario({
    elemRoot: document.getElementById("Formulario"),
  });


})();

  // (function(){

  //   const compoGame = new KeyGame({
  //     elemRoot: document.getElementById("KeyGame"),
  //   });


  // })()
;