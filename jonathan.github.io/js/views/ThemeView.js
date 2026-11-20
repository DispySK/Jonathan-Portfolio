export class ThemeView {
  constructor(button, root = document.documentElement) {
    this.button = button;
    this.root = root;
  }

  render(theme) {
    this.root.dataset.theme = theme;
    const next = theme === 'dark' ? 'light' : 'dark';
    this.button.textContent = `${next[0].toUpperCase()}${next.slice(1)} theme`;
  }

  onToggle(handler) {
    this.button.addEventListener('click', handler);
  }
}
