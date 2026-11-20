import { html, render } from '../utils/html.js';

export class ProjectsView {
  constructor(filtersRoot, listRoot) {
    this.filtersRoot = filtersRoot;
    this.listRoot = listRoot;
  }

  renderFilters(tags, activeTag) {
    render(
      this.filtersRoot,
      html`${tags.map(
        (tag) =>
          html`<button type="button" data-tag="${tag}" aria-pressed="${tag === activeTag}">${tag}</button>`
      )}`
    );
  }

  renderList(projects) {
    if (projects.length === 0) {
      render(this.listRoot, html`<p class="empty">No projects with this tag yet.</p>`);
      return;
    }
    render(
      this.listRoot,
      html`<ul class="projects">
        ${projects.map(projectRow)}
      </ul>`
    );
  }

  onFilter(handler) {
    this.filtersRoot.addEventListener('click', (event) => {
      const button = event.target.closest('button[data-tag]');
      if (button) handler(button.dataset.tag);
    });
  }
}

const projectRow = (project) => html`
  <li class="project">
    <div class="project__main">
      <h3>${project.title}</h3>
      <p>${project.summary}</p>
      ${project.caseStudy ? caseStudy(project.caseStudy) : ''}
    </div>
    <div class="project__side">
      <p class="project__meta">${project.status}. ${project.tags.join(', ')}.</p>
      <p class="project__links">
        ${linkIfSet('Live demo', project.links.demo)}${linkIfSet('Source code', project.links.repo)}
      </p>
    </div>
  </li>
`;

const caseStudy = ({ problem, approach, decisions, next }) => html`
  <details class="case">
    <summary>Read the case study</summary>
    <dl>
      <dt>Problem</dt>
      <dd>${problem}</dd>
      <dt>Approach</dt>
      <dd>${approach}</dd>
      <dt>Decisions</dt>
      <dd>
        <ul>
          ${decisions.map((decision) => html`<li>${decision}</li>`)}
        </ul>
      </dd>
      <dt>Next</dt>
      <dd>${next}</dd>
    </dl>
  </details>
`;

const linkIfSet = (label, href) =>
  href ? html`<a href="${href}" target="_blank" rel="noopener noreferrer">${label}</a>` : '';
