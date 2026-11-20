export class ProfileModel {
  #data;

  constructor(data) {
    this.#data = data;
  }

  get hero() {
    const { name, headline, intro, status, location } = this.#data;
    return { name, headline, intro, status, location, photo: this.#data.photo ?? null, actions: this.#heroActions() };  
  }

  get about() {
    return this.#data.about;
  }

  get experience() {
    return this.#data.experience;
  }

  get skills() {
    return this.#data.skills;
  }

  get links() {
    return this.#data.links;
  }

  get resume() {
    return this.#data.resume ?? null;
  }

  #heroActions() {
    const email = this.#data.links.find((link) => link.label === 'Email');
    return [
      { label: 'See projects', href: '#projects', primary: true },
      ...(email ? [{ label: 'Email me', href: email.href, primary: false }] : []),
    ];
  }
}
