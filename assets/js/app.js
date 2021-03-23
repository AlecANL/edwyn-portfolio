import { CardProject } from './components/CardProject.js';
import { CardReview } from './components/CardReview.js';
import { dataProjects } from './dataProjects.js';
import { dataReview } from './dataReview.js';

const $projectsContainer = document.getElementById('list-projects'),
  $reviewsContainer = document.getElementById('reviews-container'),
  $iconMenu = document.getElementById('icon-menu'),
  $listMenu = document.getElementById('list-menu'),
  $overlay = document.getElementById('overlay');

function loadComponent(element, component) {
  const el = document.createElement('div');
  el.innerHTML = component(element);
  return el.firstElementChild;
}

function render($container, listElements, component) {
  listElements.forEach(el => {
    $container.appendChild(loadComponent(el, component));
  });
}
function renderDOM() {
  render($projectsContainer, dataProjects, CardProject);
  render($reviewsContainer, dataReview, CardReview);
}

function showMenu() {
  $iconMenu.classList.toggle('active');
  $listMenu.classList.toggle('active');
  $overlay.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', renderDOM);
$iconMenu.addEventListener('click', showMenu);
