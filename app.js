let btn = document.querySelector('button');
btn.addEventListener('click', function(event){
  
  //vérifie que le message d'erreur soit caché
  document.getElementById("error-message").style.display = "none";
  
  //récupération des champs du formulaire
  let newFirstName = document.getElementById("first-name");
  let newName = document.getElementById("last-name");
  let newMessage = document.getElementById("message");

  //apparition du message d'erreur si au moins un des champs ne soit pas renseigné
  if (!newFirstName.value||!newName.value||!newMessage.value){
        document.getElementById("error-message").style.display = "block";
        event.preventDefault();
  
  //execution du code si tous les champs sont bien renseignés
  }else{ 
        //modification des informations du bloc à copier
        let newIdentity = document.getElementById("identity");
        newIdentity.innerHTML = (newFirstName.value +' '+ newName.value);
        let newComment = document.getElementById("commentaire");
        newComment.innerHTML = newMessage.value;
      
        //création d'un nouveau bloc de commentaire à partir du bloc copié
        let blocPrincipal = document.getElementById("comment-list");
        let item1 = document.getElementById("blocNiv-1");
        var sousBloc = item1.cloneNode(true);
        blocPrincipal.appendChild(sousBloc);
      
        //réattribution des anciennes informations au bloc de départ
        let ancientComment = document.getElementById("commentaire");
        ancientComment.innerHTML = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae accusantium quae doloribus. Nobis ipsam libero asperiores a velit ab nemo facere molestias quisquam. Libero, repudiandae dignissimos. Doloribus hic placeat soluta?";
        let ancientIdentity = document.getElementById("identity");
        ancientIdentity.innerHTML = "Mark Edwards";
      
        //suppression des informations des champs
        document.getElementById("first-name").value='';
        document.getElementById("last-name").value='';
        document.getElementById("message").value='';
      
        //annulation du rafraichissement de la page
        event.preventDefault();
  }
});
    
    
  
    
