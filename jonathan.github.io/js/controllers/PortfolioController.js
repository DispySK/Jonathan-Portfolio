import { ALL } from '../models/ProjectModel.js';

export class PortfolioController {
  #activeTag = ALL;

  constructor(models, views) {
    this.models = models;
    this.views = views;
  }

  init() {
    const { profile, theme } = this.models;
    const { hero, projects, about, skills, contact, themeView } = this.views;

    hero.render(profile.hero);
    about.render(profile.about, profile.experience);
    skills.render(profile.skills);
    contact.render(profile.links, profile.resume);
    this.#renderProjects();
    themeView.render(theme.current);

    projects.onFilter((tag) => this.#selectTag(tag));
    themeView.onToggle(() => themeView.render(theme.toggle()));
  }

  #selectTag(tag) {
    this.#activeTag = tag;
    this.#renderProjects();
  }

  #renderProjects() {
    const { projects: projectModel } = this.models;
    const { projects: projectsView } = this.views;
    projectsView.renderFilters(projectModel.tags, this.#activeTag);
    projectsView.renderList(projectModel.byTag(this.#activeTag));
  }
}
