// 1. Pegamos todos os cards da página

const cards = document.querySelectorAll(".card");

// 2. Para cada card, ouvimos a entrada e a saída do mouse

cards.forEach(function (card) {

card.addEventListener("mouseenter", function () {

card.classList.add("card-expanded");

    });

card.addEventListener("mouseleave", function () {

card.classList.remove("card-expanded");

    });

});

// PHOTO CARD

// 3. Pegamos a galeria

const photoGallery = document.querySelector(".photo-gallery");

// 4. Pegamos todas as fotos dentro da galeria

const photos = photoGallery.querySelectorAll("img");

// 5. Pegamos a modal

const photoModal = document.querySelector("#photo-modal");

// 6. Pegamos a imagem que fica dentro da modal

const photoModalImage = document.querySelector("#photo-modal-image");

// 7. Pegamos o botão X

const photoClose = document.querySelector("#photo-close");

// BIO

// 8. PEGAMOS O CARD DA BIO

const bioCard = document.querySelector(".bio-card");

// 9. PEGAMOS O CONTEUDO DA BIO

const bioContent = document.querySelector(".bio-content");

// 10. PEGAMOS O MODAL DA BIO

const bioModal = document.querySelector("#bio-modal");

// 11. PEGAMOS O BOTAO X DA BIO

const bioClose = document.querySelector("#bio-close");

//. GUARDAMOS O LUGAR ORIGINAL DO CONTEUDO DA BIO

const bioOriginalParent = bioContent.parentElement;

// 12. ESPERAMOS ALGUEM CLICAR NO CARD

bioCard.addEventListener("click", function () {

// 13. ABRIMOS O MODAL DA BIO

  bioModal.classList.add("is-open");

  bioModal.querySelector(".bio-modal-content").appendChild(bioContent);

});


// 14. QUANDO CLICAR NO X DA BIO

  bioClose.addEventListener("click", function() {

    bioModal.classList.remove("is-open");

    bioOriginalParent.appendChild(bioContent);

});

// 15. CLICK FORA PARA FECHAR BIO E PHOTO

document.addEventListener("click", function(event){

// 16. SE O CLICK FOR DIRETAMENTE NO FUNDO

  if (event.target === bioModal) {

// 17. FECHAMOS O MODAL

    bioModal.classList.remove("is-open");

    bioOriginalParent.appendChild(bioContent);

  }

// 18. SE O CLICK FOR NO FUNDO DO MODAL DA FOTO

  if (event.target === photoModal) {

// 19. FECHAMOS O MODAL

    photoModal.classList.remove("is-open");

  }

});

// 20. NAVEGAÇAO DENTRO DA BIO

// 21. SETA PARA SUBIR

const bioUp = document.querySelector("#bio-up");

// 22. SETA PARA BAIXO

const bioDown = document.querySelector("#bio-down");

// 23. QUANDO CLICAR NA SETA PARA CIMA

bioUp.addEventListener("click", function (){

// 24. SUBIMOS O CONTEUDO

  bioContent.scrollBy({

    top: -300,

    behavior: "smooth"

  });

});

// 25. QUANDO CLICAR NA SETA PARA BAIXO

bioDown.addEventListener("click", function(){

// 26. DESCEMOS O CONTEUDO

  bioContent.scrollBy({

    top: 300,

    behavior: "smooth"

  });

});

// 27. SCROLL DO MOUSE

bioContent.addEventListener("wheel", function (event){

// 28. VERIFICAMOS SE O MODAL DA BIO ESTA ABERTO

  if (!bioModal.classList.contains("is-open")) {

    return;

  }

// 29. IMPEDIMOS O SCROLL PADRAO DA PAGINA

event.preventDefault();

// 30. MOVEMOS O CONTEUDO DA BIO DE ACORDO COMO SCROLL

  bioContent.scrollBy({

    top:event.deltaY,

    behavior: "smooth"

  });

});





// 31. Para cada foto da galeria

photos.forEach(function (photo, index) {

// 32. Esperamos alguém clicar nela

photo.addEventListener("click", function () {

// 33. Guardamos qual foto foi clicada

        currentPhotoIndex = index;

// 34. Colocamos na modal a mesma imagem que foi clicada

        photoModalImage.src = photo.src;

// 35. Copiamos também o texto alternativo

        photoModalImage.alt = photo.alt;

// 36. Abrimos a modal

        photoModal.classList.add("is-open");

    });

});



// 37. Quando clicar no X

photoClose.addEventListener("click", function () {

// 38. Fechamos a modal

    photoModal.classList.remove("is-open");

});



// 39. Pegamos a seta para voltar

const photoPrev = document.querySelector("#photo-prev");

// 40. Pegamos a seta para avançar

const photoNext = document.querySelector("#photo-next");

// 41. Guardamos o número da foto que está sendo exibida

let currentPhotoIndex = 0;

// 42. Criamos uma função para mostrar uma determinada foto

function showPhoto(index) {

// 43. Colocamos a imagem escolhida dentro da modal

    photoModalImage.src = photos[index].src;

// 44. Colocamos o texto alternativo da imagem

    photoModalImage.alt = photos[index].alt;

}



// 45. Quando clicar na seta pra voltar

photoPrev.addEventListener("click", function (){

// 46. Diminuimos o indice da foto

currentPhotoIndex--;

// 47. Se chegarmos antes da primeira foto

if (currentPhotoIndex < 0) {

// 48. Vamos para a ultima foto

  currentPhotoIndex = photos.length - 1;

}

// 49. Mostramos a nova foto

showPhoto(currentPhotoIndex);

});



// 50. Quando clicar na seta para avançar

photoNext.addEventListener("click", function () {

// 51. Aumentamos o indice da foto

currentPhotoIndex++;

// 52. Se passarmos da ultima foto

if (currentPhotoIndex >= photos.length) {

// 53. Voltamos para a primeira foto

  currentPhotoIndex = 0;

}

// 54. Mostramos a nova foto

showPhoto(currentPhotoIndex);

});

// 55. Esperamos alguem apertar uma tecla

document.addEventListener("keydown", function (event){

// 56. Se apertar a seta esquerda

    if (event.key == "ArrowLeft") {

// 57. Diminua o indice da foto

        currentPhotoIndex--;

// 58. Se chegarmos antes da primeira foto

        if (currentPhotoIndex <0) {

// 59. Vamos para ultima foto

          currentPhotoIndex = photos.length - 1;

        }

// 60. Mostramos a nova foto

      showPhoto(currentPhotoIndex);  

    }

// 61. Se apertar a seta direita

      if (event.key == "ArrowRight") {

// 62. Aumente o indice da foto

        currentPhotoIndex++;

// 63. Se passarmos da foto

        if (currentPhotoIndex >= photos.length) {

// 64. Voltamos para a primeira foto

          currentPhotoIndex = 0;

        }

// 65. Mostramos a nova foto

        showPhoto(currentPhotoIndex);

      }

// 66. Quando apertamos ESC para fechar

if (event.key == "Escape") {

  photoModal.classList.remove("is-open");

  bioModal.classList.remove("is-open");

  bioOriginalParent.appendChild(bioContent);

}

});