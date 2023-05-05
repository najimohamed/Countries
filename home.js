function search() {
    const searchBox = document.getElementById('search-box');
    const searchTerm = searchBox.value.trim().toLowerCase();
    const cards = document.getElementsByClassName('card');
    const resultDiv = document.getElementById('result');
    let found = false;
    
    for (let i = 0; i < cards.length; i++) {
      const card = cards[i];
      const countryName = card.getElementsByTagName('h3')[0].textContent.toLowerCase();
      
      if (countryName.includes(searchTerm)) {
        card.style.display = 'block';
        found = true;
      } else {
        card.style.display = 'none';
      }
    }
    
    if (found) {
      resultDiv.textContent = '';
    } else {
      resultDiv.textContent = 'No results found.';
    }
  }
  
  