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

  //réattribution des anciennes informations au bloc de départ
  let ancientComment = document.getElementById("commentaire");
  ancientComment.innerHTML = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae accusantium quae doloribus. Nobis ipsam libero asperiores a velit ab nemo facere molestias quisquam. Libero, repudiandae dignissimos. Doloribus hic placeat soluta?";
  let ancientIdentity = document.getElementById("identity");
  ancientIdentity.innerHTML = "Mark Edwards";

  document.getElementById("first-name").value='';
  document.getElementById("last-name").value='';
  document.getElementById("message").value='';

  event.preventDefault();
    
    
  
    
