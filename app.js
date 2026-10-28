/* Add the next project to this registry and it will appear as a new card. */
const PROJECTS = [
  {
    name: 'Pythios docs',
    highlight: 'docs',
    url: 'docs.pythios.xyz',
    href: 'https://docs.pythios.xyz',
    description: 'A practical Python library for low-code machine learning on tabular data — from loading to evaluation.',
    status: 'Live'
  },
  {
    name: 'Delphi',
    highlight: 'Delphi',
    url: 'delphi.pythios.xyz',
    href: 'https://delphi.pythios.xyz',
    description: 'An interactive whiteboard for thinking in public, with AI woven into the canvas when you need it.',
    status: 'Live'
  },
  {
    name: 'Miletus',
    highlight: 'Miletus',
    url: 'miletus.pythios.xyz',
    href: 'https://miletus.pythios.xyz',
    description: 'An AI podcast generator that turns your notes into episodes you can listen to on the go.',
    status: 'Live'
  },
  {
    name: 'Kroton',
    highlight: 'Kroton',
    url: 'kroton.pythios.xyz',
    href: 'https://kroton.pythios.xyz',
    description: 'An interactive 3D simulator for exploring how an electrical transformer works.',
    status: 'Live'
  }
];

const grid = document.querySelector('#project-grid');
document.querySelector('#project-count').textContent = String(PROJECTS.length).padStart(2, '0');

PROJECTS.forEach((project, index) => {
  const card = document.createElement('a');
  card.className = 'project-card';
  card.href = project.href;
  card.target = '_blank';
  card.rel = 'noopener noreferrer';
  card.innerHTML = `
    <div class="card-top">
      <span class="card-index">0${index + 1} / destination</span>
      <span class="card-status">${project.status}</span>
    </div>
    <h3>${project.name.replace(project.highlight, `<span>${project.highlight}</span>`)}</h3>
    <p>${project.description}</p>
    <div class="card-bottom">
      <span class="card-url">${project.url}</span>
      <span class="card-arrow" aria-hidden="true">↗</span>
    </div>
  `;
  grid.appendChild(card);
});

document.querySelector('#year').textContent = new Date().getFullYear();
