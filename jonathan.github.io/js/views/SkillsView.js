import { html, render } from '../utils/html.js';

export class SkillsView {
  constructor(root) {
    this.root = root;
  }

  render(groups) {
    render(
      this.root,
      html`<dl class="skills">
        ${groups.map(
          (group) => html`
            <div class="skills__group">
              <dt>${group.group}</dt>
              <dd>${group.items.join(', ')}</dd>
            </div>
          `
        )}
      </dl>`
    );
  }
}
