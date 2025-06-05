document.addEventListener('DOMContentLoaded', async () => {
  const mainDiv = document.getElementById('main');

  const villagers = await fetchAllVillagers();

  displayVillagers(villagers, mainDiv);
});

async function fetchAllVillagers() {
  const response = await fetch('https://api.nookipedia.com/villagers', {
    headers: {
      'X-API-KEY': '4545bc8f-24d4-452d-bef1-79e6152c5544',
      'Accept-Version': '1.0.0'
    }
  });

  const data = await response.json();
  return data; // 
}

function displayVillagers(villagers, container) {
  // Check en cas de refresh
  container.innerHTML = '';

  for (let villager of villagers) {
    // Carte pour chaque villageois
    const card = document.createElement('div');
    // Ensuite on donne une classe à cette Div/Carte
    card.className = 'card';

    const image = document.createElement('img');
    image.src = villager.image_url;
    image.alt = villager.name;
    image.className = 'cardImg';

    const name = document.createElement('h3');
    name.textContent = villager.name;

    card.appendChild(image);
    card.appendChild(name);
    container.appendChild(card);
  }
}


