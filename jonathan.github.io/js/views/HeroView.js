import { html, render } from '../utils/html.js';

export class HeroView {
  constructor(root) {
    this.root = root;
  }

  render({ name, headline, intro, status, location, actions, photo }) {
  render(
    this.root,
    html`
      <div class="hero__layout${photo ? ' hero__layout--photo' : ''}">
        <div class="hero__text">
          <h1 id="hero-name" class="hero__name">${name}</h1>
          <p class="hero__headline">${headline}</p>
          <p class="hero__intro">${intro}</p>
          <p class="hero__actions">${actions.map(actionLink)}</p>
          <p class="hero__status">${status} Based in ${location}.</p>
        </div>
        ${photo ? portrait(photo, name) : ''}
      </div>
    `
  );
 }
}

const portrait = (src, name) => html`
  <figure class="hero__photo">
    <img src="${src}" alt="Portrait of ${name}" decoding="async" fetchpriority="high" />
  </figure>
`;

const actionLink = ({ label, href, primary }) =>
  html`<a class="button${primary ? ' button--primary' : ''}" href="${href}">${label}</a>`;
