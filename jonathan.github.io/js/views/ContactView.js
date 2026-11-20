import { html, render } from '../utils/html.js';

export class ContactView {
  constructor(root) {
    this.root = root;
  }

  render(links, resume) {
    const all = resume ? [...links, resume] : links;
    render(
      this.root,
      html`
        <p class="contact__lead">Looking for a junior developer? Send me a message.</p>
        <ul class="contact__links">
          ${all.map((link) => html`<li><a href="${link.href}">${link.label}</a></li>`)}
        </ul>
      `
    );
  }
}
