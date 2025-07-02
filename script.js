// Dati dei concorrenti
const contestants = [
    {
        name: "Alessia Neri",
        age: 28,
        city: "Milano",
        specialty: "Pittura a olio",
        image: "https://via.placeholder.com/400x600?text=Alessia+Neri"
    },
    {
        name: "Marco Gialli",
        age: 32,
        city: "Roma",
        specialty: "Scultura",
        image: "https://via.placeholder.com/400x600?text=Marco+Gialli"
    },
    {
        name: "Elena Blu",
        age: 25,
        city: "Firenze",
        specialty: "Arte digitale",
        image: "https://via.placeholder.com/400x600?text=Elena+Blu"
    },
    {
        name: "Davide Verdi",
        age: 30,
        city: "Torino",
        specialty: "Street art",
        image: "https://via.placeholder.com/400x600?text=Davide+Verdi"
    },
    {
        name: "Sara Rossi",
        age: 27,
        city: "Napoli",
        specialty: "Fotografia",
        image: "https://via.placeholder.com/400x600?text=Sara+Rossi"
    },
    {
        name: "Luca Bianchi",
        age: 29,
        city: "Bologna",
        specialty: "Installazioni",
        image: "https://via.placeholder.com/400x600?text=Luca+Bianchi"
    }
];

// Dati degli episodi
const episodes = [
    {
        title: "Episodio 1: Il Primo Colpo di Pennello",
        description: "I 12 artisti si affrontano nella prima sfida di pittura veloce con un tema a sorpresa.",
        date: "15 Settembre 2023",
        image: "https://via.placeholder.com/300x180?text=Episodio+1"
    },
    {
        title: "Episodio 2: La Forma dell'Arte",
        description: "Sfida di scultura con materiali non convenzionali. Chi riuscirà a plasmare la propria visione?",
        date: "22 Settembre 2023",
        image: "https://via.placeholder.com/300x180?text=Episodio+2"
    },
    {
        title: "Episodio 3: Pixel e Fantasia",
        description: "L'arte digitale mette alla prova la creatività tecnologica dei nostri concorrenti.",
        date: "29 Settembre 2023",
        image: "https://via.placeholder.com/300x180?text=Episodio+3"
    }
];

// Popola i concorrenti
function loadContestants() {
    const grid = document.getElementById('contestantsGrid');
    
    contestants.forEach(contestant => {
        const card = document.createElement('div');
        card.className = 'contestant-card';
        
        card.innerHTML = `
            <img src="${contestant.image}" alt="${contestant.name}" class="contestant-img">
            <div class="contestant-info">
                <h3>${contestant.name}</h3>
                <p><span class="contestant-age">${contestant.age} anni</span>, ${contestant.city}</p>
                <p>Specialità: ${contestant.specialty}</p>
            </div>
        `;
        
        grid.appendChild(card);
    });
}

// Popola gli episodi
function loadEpisodes() {
    const list = document.getElementById('episodeList');
    
    episodes.forEach(episode => {
        const item = document.createElement('div');
        item.className = 'episode-item';
        
        item.innerHTML = `
            <img src="${episode.image}" alt="${episode.title}" class="episode-thumbnail">
            <div class="episode-content">
                <h3>${episode.title}</h3>
                <p>${episode.description}</p>
                <p><strong>Data:</strong> ${episode.date}</p>
                <button class="watch-button">GUARDA ORA</button>
            </div>
        `;
        
        list.appendChild(item);
    });
}

// Effetto scroll per il header
function setupHeaderAnimation() {
    const header = document.getElementById('header');
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll <= 0) {
            header.style.opacity = '1';
            header.style.transform = 'translateY(0)';
        } else if (currentScroll > lastScroll) {
            header.style.opacity = '0.8';
            header.style.transform = 'translateY(-20px)';
        } else {
            header.style.opacity = '1';
            header.style.transform = 'translateY(0)';
        }
        
        lastScroll = currentScroll;
    });
}

// Gestione del bottone CTA
function setupCTAButton() {
    const ctaButton = document.getElementById('ctaButton');
    
    ctaButton.addEventListener('click', () => {
        alert('Grazie per il tuo interesse! La pagina di iscrizione sarà disponibile a breve.');
    });
}

// Inizializzazione
document.addEventListener('DOMContentLoaded', () => {
    loadContestants();
    loadEpisodes();
    setupHeaderAnimation();
    setupCTAButton();
});