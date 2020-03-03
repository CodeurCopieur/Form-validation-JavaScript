var form =  document.querySelector('#register');
var containerErrors =  document.querySelector('#register .errors');

var formInput = document.querySelectorAll('.input-group input')

form.addEventListener('submit', valideForm);

function valideForm(e) {
  e.preventDefault();

  let tabErrors = [];
  //tableau d'erreurs sous d'objet pour chaque champs
  const email_reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
 const pass_reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

  var elts = form.elements; // grâce à la propriété éléments de form, elle permet d'accéder a un champs à partir de son attribut "name"

  const tabElts = Array.from(elts) //convertion de l'HTMLCollection en tableau

  //Avec la méthode map je parse le tableau tabElts
  tabElts.map((i, elt) => {
    if(i.value == "") {
      //on remplie le tableau d'erreur avec un objet qui va contenir le nom du champs(attribut name) concerné et el : les champs à remplir
      tabErrors.push({name: i.name, el: i});
    }
  });

  console.log(elts.email.name);
  

  if(!email_reg.test(elts.email.value)){
    tabErrors.push({name: "email > incorrecte", el: elts.email});
  }

  if (!pass_reg.test(password.value)) {
    tabErrors.push({name: "mot de passe > incorrecte", el: elts.password});
   }

      console.log(tabErrors);
    //si le tableau d'erreurs est superieur à 0 on lance la fonction handle_errors
  if (tabErrors.length > 0) {
    //en paramètre de la function handle_errors c'est le tableau d'erreur : tabErrors
    handle_errors(tabErrors);
    return false;
  }else {
    console.log(tabErrors);
    
  }

  alert('c\'est bon !');
  return true;
}



function handle_errors(errs) {
  let str = "Vous avez une erreur sur les champs suivants : ";

  errs.map((er, i)=> {
    er.el.classList.add('error');
    
    if( i == errs.length-1 ){
      str += er.name + ".";
    }else {
      str += er.name + ",   ";
    }
  });

  let containerError = document.createElement('div');
  containerError.classList.add('error');
  containerError.innerText = str;

  containerErrors.appendChild(containerError);

  containerError.addEventListener('click', ()=> {
    containerErrors.removeChild(containerError);
  });

}
