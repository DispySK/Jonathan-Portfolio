import { profile, projects } from './data/profile.js';
import { ProfileModel } from './models/ProfileModel.js';
import { ProjectModel } from './models/ProjectModel.js';
import { ThemeModel } from './models/ThemeModel.js';
import { HeroView } from './views/HeroView.js';
import { ProjectsView } from './views/ProjectsView.js';
import { AboutView } from './views/AboutView.js';
import { SkillsView } from './views/SkillsView.js';
import { ContactView } from './views/ContactView.js';
import { ThemeView } from './views/ThemeView.js';
import { PortfolioController } from './controllers/PortfolioController.js';

const $ = (selector) => document.querySelector(selector);

const models = {
  profile: new ProfileModel(profile),
  projects: new ProjectModel(projects),
  theme: new ThemeModel(globalThis.localStorage, matchMedia('(prefers-color-scheme: light)').matches),
};

const views = {
  hero: new HeroView($('#hero')),
  projects: new ProjectsView($('#project-filters'), $('#project-list')),
  about: new AboutView($('#about-text'), $('#experience')),
  skills: new SkillsView($('#skills-list')),
  contact: new ContactView($('#contact-body')),
  themeView: new ThemeView($('#theme-toggle')),
};

new PortfolioController(models, views).init();
