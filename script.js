function searchGoogle(event) {
    event.preventDefault();
    const searchInput = document.getElementById('search-input').value;
    const searchQuery = encodeURIComponent(searchInput);
    const searchUrl = `https://www.google.com/search?q=${searchQuery}`;
    window.location.href = searchUrl;
}

function feelingLucky() {
    console.log("feelingLucky() işlevi çağrıldı."); // Kontrol için console.log eklendi
    window.location.href = 'https://www.google.com/search?q=I%27m+kendimi+%C5%9Fansl%C4%B1+hissediyorum&btnI=';
  }

  function refreshPage() {
    location.reload();
    
  }
    
function searchImages() {
    const searchInput = document.getElementById('search-input').value;
    const searchQuery = encodeURIComponent(searchInput);
    const searchUrl = `https://www.google.com/search?tbm=isch&q=${searchQuery}`;
    window.location.href = searchUrl;
  }
  