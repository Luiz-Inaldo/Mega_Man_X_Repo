// JavaScript code //

// Script de redirecionamento de páginas

const links = {
    mmx1: document.getElementById('megaman1'),
    mmx2: document.getElementById('megaman2'),
    mmx3: document.getElementById('megaman3'),
    mmx4: document.getElementById('megaman4'),
    mmx5: document.getElementById('megaman5'),
    mmx6: document.getElementById('megaman6'),
    mmx7: document.getElementById('megaman7'),
    mmx8: document.getElementById('megaman8')
};

links.mmx1.addEventListener('click', () => {
    window.location.href = 'src/pages/megaman-x-informations.html';
});

links.mmx2.addEventListener('click', () => {
    window.location.href = 'src/pages/megaman-x2-informations.html';
});

links.mmx3.addEventListener('click', () => {
    window.location.href = 'src/pages/megaman-x3-informations.html';
});

links.mmx4.addEventListener('click', () => {
    window.location.href = 'src/pages/megaman-x4-informations.html';
});

links.mmx5.addEventListener('click', () => {
    window.location.href = 'src/pages/megaman-x5-informations.html';
});
