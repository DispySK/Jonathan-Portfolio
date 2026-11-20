export const ALL = 'All';

export class ProjectModel {
  #projects;

  constructor(projects) {
    this.#projects = projects;
  }

  get tags() {
    const seen = new Set();
    this.#projects.forEach((project) => project.tags.forEach((tag) => seen.add(tag)));
    return [ALL, ...seen];
  }

  byTag(tag) {
    if (tag === ALL) return [...this.#projects];
    return this.#projects.filter((project) => project.tags.includes(tag));
  }
}
