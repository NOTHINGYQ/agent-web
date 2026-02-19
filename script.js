const projects = [
  {
    title: 'Realtime Collaboration Board',
    description:
      'A collaborative whiteboard with presence indicators, shared cursors, and persistent sessions.',
    tags: ['TypeScript', 'WebSocket', 'React'],
    link: '#'
  },
  {
    title: 'AI Meeting Notes Assistant',
    description:
      'Summarizes meeting transcripts into action items with semantic search over past meetings.',
    tags: ['Python', 'LLM', 'FastAPI'],
    link: '#'
  },
  {
    title: 'Cloud Cost Analyzer',
    description:
      'Visual dashboard for infrastructure usage and spend with optimization recommendations.',
    tags: ['Node.js', 'Data Viz', 'AWS'],
    link: '#'
  }
];

const projectGrid = document.getElementById('project-grid');
if (projectGrid) {
  projects.forEach((project) => {
    const card = document.createElement('article');
    card.className = 'project-card';

    card.innerHTML = `
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <div class="tags">${project.tags.map((tag) => `<span>${tag}</span>`).join('')}</div>
      <p><a class="text-link" href="${project.link}">Learn more →</a></p>
    `;

    projectGrid.appendChild(card);
  });
}

const year = document.getElementById('year');
if (year) {
  year.textContent = new Date().getFullYear();
}

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}
