
let datosPersona = {
    nombre: "",
    edad: 0,
    ciudad: "",
    interesPorJs: "",
  };
  
  const listado = [{
      imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
      lenguajes: "HTML y CSS",
      bimestre: "1er bimestre",
    },
    {
      imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
      lenguajes: "Javascript",
      bimestre: "2do bimestre",
    },
    {
      imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
      lenguajes: "React JS",
      bimestre: "3er bimestre",
    },
  ];
  
  const profileBtn = document.querySelector("#completar-perfil");
  const materiasBtn = document.querySelector("#obtener-materias");
  const verMasBtn = document.querySelector("#ver-mas");
  const cambiarTema = document.querySelector('#cambiar-tema');
  
  profileBtn.addEventListener("click", renderizarDatosUsuario);
  materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
  cambiarTema.addEventListener("click", alternarColorTema);
 
  
  function obtenerDatosDelUsuario() {
   
    do{
        
        datosPersona.nombre = prompt("Ingrese su nombre");
        console.log(datosPersona.nombre);
        datosPersona.nombre = datosPersona.nombre.charAt(0).toUpperCase() + datosPersona.nombre.slice(1);
      
      } while (!isNaN(datosPersona.nombre));
      
      do{
        const edad = parseInt(prompt("Ingrese el año de su nacimiento. Ej. 1986"));
        datosPersona.edad = 2023 - edad;
        console.log(datosPersona.edad);
      } while (isNaN(datosPersona.edad));
      
     
      do {
        datosPersona.ciudad = prompt("Ingresa la ciudad donde vives");
        console.log(datosPersona.ciudad);
        
        let palabrasMayuscula = datosPersona.ciudad.split(' '); 
        
        for (let i = 0; i < palabrasMayuscula.length; i++) {
            palabrasMayuscula[i] = palabrasMayuscula[i].charAt(0).toUpperCase() + palabrasMayuscula[i].slice(1);
        }
        
        datosPersona.ciudad = palabrasMayuscula.join(' '); 
        
    } while (!isNaN(datosPersona.ciudad));
    
  
      datosPersona.interesPorJs = confirm("Te interesa JavaScript?");
      console.log(datosPersona.interesPorJs);
  
  }
  
  function renderizarDatosUsuario() {
   
    obtenerDatosDelUsuario();
  
      let nombre = document.querySelector("#nombre");
      nombre.innerText = datosPersona.nombre;
  
      let edad = document.querySelector("#edad");
      edad.innerText = datosPersona.edad;
  
      let ciudad = document.querySelector("#ciudad");
      ciudad.innerText = datosPersona.ciudad;
  
      let interesPorJs = document.querySelector("#javascript");
      interesPorJs.innerText = datosPersona.interesPorJs ? "Si" :  "No";
    
  }
  
  function recorrerListadoYRenderizarTarjetas() {
    
      const fila = document.querySelector("#fila");
      fila.innerHTML = "";
      listado.forEach(function(tarjeta){
  
        const li = document.createElement("li");
        const img = document.createElement("img");
        const alt = document.createElement("alt");
        const pLenguaje = document.createElement("p");
        const pBimestre = document.createElement("p");
  
        li.setAttribute("class", "caja");
        img.setAttribute("src", tarjeta.imgUrl);
        img.setAttribute("alt", tarjeta.lenguajes);
  
        pLenguaje.textContent = tarjeta.lenguajes;
        pBimestre.textContent = tarjeta.bimestre;
  
        pLenguaje.classList.add("lenguajes");
        pBimestre.classList.add("bimestre");
  
        li.appendChild(img);
        li.appendChild(pLenguaje);
        li.appendChild(pBimestre);
        
        fila.appendChild(li);
        
      })
  
  }
  
  function alternarColorTema() {
          
      let sitio = document.querySelector("#sitio");
      sitio.classList.toggle("dark");
    
  }
    
  document.addEventListener("keydown", function(e){
  
      if(e.key == "f" || e.key == "F"){
        let sobreMi = document.querySelector("#sobre-mi");          
        sobreMi.classList.remove("oculto");
      }
  })
  
  