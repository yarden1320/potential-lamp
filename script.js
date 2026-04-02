// Sample character data
const characters = [
    { id: 1, name: "Eldrin the Wise", creator: "@wizard_creator", emoji: "🧙‍♂️", privacy: "public", likes: 1234, views: 5678 },
    { id: 2, name: "Cyber Nova", creator: "@neon_dreamer", emoji: "🤖", privacy: "public", likes: 892, views: 3421 },
    { id: 3, name: "Princess Luna", creator: "@fantasy_artist", emoji: "👸", privacy: "public", likes: 2341, views: 8902 },
    { id: 4, name: "Shadow Assassin", creator: "@dark_tales", emoji: "🥷", privacy: "private", likes: 0, views: 12 },
    { id: 5, name: "Sakura Chan", creator: "@anime_lover", emoji: "🌸", privacy: "public", likes: 3422, views: 12034 },
    { id: 6, name: "Drake the Dragon", creator: "@mythic_beasts", emoji: "🐉", privacy: "public", likes: 1567, views: 6789 }
];

document.addEventListener('DOMContentLoaded', () => {
    renderCharacters();
});

function renderCharacters() {
    const charactersList = document.getElementById('characters');
    if (!charactersList) return;
    charactersList.innerHTML = ''; 
    characters.forEach(character => {
        const listItem = document.createElement('li');
        listItem.className = 'character-item';
        listItem.innerHTML = `<div class="character-card"><div class="character-emoji">${character.emoji}</div><h3>${character.name}</h3><p>by ${character.creator}</p><p>❤️ ${character.likes.toLocaleString()} | 👁️ ${character.views.toLocaleString()}</p><button onclick="selectCharacter(${character.id})">View Profile</button></div>`;
        charactersList.appendChild(listItem);
    });
}

function selectCharacter(characterId) {
    const character = characters.find(c => c.id === characterId);
    if (character) {
        const quoteDisplay = document.getElementById('quote');
        if (quoteDisplay) {
            quoteDisplay.textContent = `You selected ${character.name}! Start chatting with ${character.emoji}`;
        }
        console.log('Selected character:', character);
    }
}

function filterByPrivacy(privacy) {
    const filtered = characters.filter(c => c.privacy === privacy);
    console.log(`Filtered characters (${privacy}):`, filtered);
}

function sortByLikes() {
    const sorted = [...characters].sort((a, b) => b.likes - a.likes);
    console.log('Sorted by likes:', sorted);
}

function searchCharacters(query) {
    const results = characters.filter(c => c.name.toLowerCase().includes(query.toLowerCase()) || c.creator.toLowerCase().includes(query.toLowerCase()));
    console.log(`Search results for "${query}":`, results);
    return results;
}