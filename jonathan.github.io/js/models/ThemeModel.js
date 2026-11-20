const KEY = 'portfolio-theme';
const THEMES = ['dark', 'light'];

export class ThemeModel {
  #current;

  constructor(storage = globalThis.localStorage, prefersLight = false) {
    this.storage = storage;
    this.#current = this.#load() ?? (prefersLight ? 'light' : 'dark');
  }

  get current() {
    return this.#current;
  }

  toggle() {
    this.#current = this.#current === 'dark' ? 'light' : 'dark';
    this.#save();
    return this.#current;
  }

  #load() {
    try {
      const saved = this.storage?.getItem(KEY);
      return THEMES.includes(saved) ? saved : null;
    } catch {
      return null;
    }
  }

  #save() {
    try {
      this.storage?.setItem(KEY, this.#current);
    } catch {
    }
  }
}
