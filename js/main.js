// Dulce Aroma - arma el menú y el pie de página en todas las páginas
const paginas = [
  ['index.html','Inicio'],['javascript.html','JavaScript'],['jquery.html','jQuery'],
  ['json.html','JSON'],['hosting.html','Hosting y Dominios'],['cuestionario.html','Cuestionario Web']
];
const logoSVG = `<svg width="42" height="42" viewBox="0 0 64 64" aria-label="Logo Dulce Aroma">
<circle cx="32" cy="32" r="30" fill="#F7B267"/>
<path d="M18 34h28l-4 16H22z" fill="#E8456B"/>
<path d="M17 34c0-9 7-15 15-15s15 6 15 15z" fill="#fff"/>
<circle cx="32" cy="15" r="4" fill="#E8456B"/>
<path d="M24 12c0-4 3-6 3-9M38 12c0-4 3-6 3-9" stroke="#3B2348" stroke-width="2" fill="none" stroke-linecap="round"/></svg>`;
const actual = location.pathname.split('/').pop() || 'index.html';
let menu = '';
paginas.forEach(p => { menu += `<a href="${p[0]}" class="${p[0]==actual?'activo':''}">${p[1]}</a>`; });
document.body.insertAdjacentHTML('afterbegin',
  `<header><a class="logo" href="index.html">${logoSVG}Dulce Aroma</a><nav>${menu}</nav></header>`);
document.body.insertAdjacentHTML('beforeend',
  `<footer>© 2026 Dulce Aroma · Proyecto de desarrollo web</footer>`);
