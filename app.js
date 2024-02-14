let btn = document.querySelector('button');
btn.addEventListener('click', function(event){
  //récupération des champs du formulaire
  let newFirstName = document.getElementById("first-name");
  let newName = document.getElementById("last-name");
  let newMessage = document.getElementById("message");

  //modification des informations du bloc à copier
  let newIdentity = document.getElementById("identity");
  newIdentity.innerHTML = (newFirstName.value +' '+ newName.value);
  let newComment = document.getElementById("commentaire");
  newComment.innerHTML = newMessage.value;

  //création d'un nouveau bloc de commentaire
  let blocPrincipal = document.getElementById("comment-list");
  let item1 = document.getElementById("blocNiv-1");
  var sousBloc = item1.cloneNode(true);
  blocPrincipal.appendChild(sousBloc);
    
  
    
