import { html, render } from '../utils/html.js';

export class AboutView {
  constructor(textRoot, experienceRoot) {
    this.textRoot = textRoot;
    this.experienceRoot = experienceRoot;
  }

  render(paragraphs, experience) {
    render(this.textRoot, html`${paragraphs.map((p) => html`<p>${p}</p>`)}`);
    render(
      this.experienceRoot,
      html`${experience.map(
        (job) => html`
          <article class="job">
            <h3>${job.role}, ${job.org}</h3>
            <p class="job__period">${job.period}</p>
            <p>${job.summary}</p>
          </article>
        `
      )}`
    );
  }
}
