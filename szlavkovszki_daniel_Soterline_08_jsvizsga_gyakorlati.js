var tabla = [
    ['alma', "banán", "körte"],
    {segítő:"Janos", kor: 31},
    "Dani"
]

var szamok = [1,2,3,4,5,6,7,8,9,10]

function login() {
    var username = document.getElementById("Neve").value
    var valasz = document.getElementById("valasz")
    
  
    for(i = 0; i < Object.keys(tabla[i]).length; i++){
      if(username == tabla[i]){
        valasz.innerHTML = username + "  Benne vagy a rendszerünkben.";
      }
      else {
        valasz.innerHTML = username + "  Nem vagy benne a rendszerben"+ "<br>" + "A te segítőd  " + tabla[1].segítő + "  " + tabla[1].kor + " éves"
      }
      
     
    }
    
  };

  function keres() {
    var szamos = document.getElementById("Szam").value
    var valasz = document.getElementById("valasz")

    const found = szamok.find(element => element > szamos);

        console.log(found);
     
      
    
    
  };