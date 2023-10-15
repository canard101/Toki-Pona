document.addEventListener("keydown", function (event) {
  if (event.keyCode === 37) {
    // Touche de direction gauche
    const currentPageNumber = getPageNumberFromURL();
    if (currentPageNumber > 1) {
      const previousPageNumber = currentPageNumber - 1;
      navigateToPage(previousPageNumber);
    }
  } else if (event.keyCode === 39) {
    // Touche de direction droite
    const currentPageNumber = getPageNumberFromURL();
    const lastPageNumber = 17; // Remplace par le numéro de la dernière leçon
    if (currentPageNumber < lastPageNumber) {
      const nextPageNumber = currentPageNumber + 1;
      navigateToPage(nextPageNumber);
    }
  }
});

function getPageNumberFromURL() {
  const matches = location.pathname.match(/lecon(\d+)/);
  if (matches && matches[1]) {
    return parseInt(matches[1]);
  }
  return 1; // Par défaut, si le numéro n'est pas trouvé, retourne 1.
}

function navigateToPage(pageNumber) {
  let pageString = pageNumber < 10 ? `0${pageNumber}` : pageNumber.toString();
  window.location.href = `lecon${pageString}.html`;
}

document.addEventListener("keydown", function (event) {
  if (event.keyCode === 37) {
    // Touche de direction gauche
    const currentPage = document.querySelector(".page.turning");
    if (currentPage) {
      currentPage.classList.remove("turning");
    }
    const previousPage = currentPage.previousElementSibling;
    if (previousPage) {
      previousPage.classList.add("turning");
    }
  } else if (event.keyCode === 39) {
    // Touche de direction droite
    const currentPage = document.querySelector(".page.turning");
    if (currentPage) {
      currentPage.classList.remove("turning");
    }
    const nextPage = currentPage.nextElementSibling;
    if (nextPage) {
      nextPage.classList.add("turning");
    }
  }
});
