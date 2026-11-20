export const profile = {
  name: 'Jonathan Amzalag',
  headline: 'Junior developer. I build web apps.',
  status: 'Interning now. Open to roles from February 2027.',
  location: 'the Netherlands',
  photo: 'assets/photo.jpg',
  intro:
    'I like working with Java, Python, and anything else really, I am always up to learn new languages. ' +
    'Right now I am building a study app that turns any page of notes into quiz cards.',

  about: [
    'I am a developer finishing an internship and looking for role that I can fit in. ' +
      'I like both the frontend and backend work, and I like understanding what happens behind the screen.',
  ],

  experience: [
    {
      role: 'Software intern',
      org: 'Tible',
      period: '2026 – now',
      summary:
        'Working in a team on a real codebase. Replace this with one concrete thing you built or fixed.',
    },
  ],

  skills: [
    {
      group: 'Use at work',
      items: ['Java', 'Angular', 'JavaScript', 'Git'],
    },
    { group: 'Learning', items: ['Python', 'FastAPI', 'SQL'] },
  ],

  links: [
    { label: 'Email', href: 'mailto:amzalagjonatan@gmail.com' },
    { label: 'GitHub', href: 'https://github.com/DispySK' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/username' },
  ],

  resume: null,
};

export const projects = [
  {
    id: 'quiz-cards',
    title: 'Quiz cards',
    status: 'In progress',
    summary:
      'Simple webapp, paste a page of study material and get flashcards and a quiz back. ' +
      'Gemini writes the questions, the backend checks the answers it returns.',
    tags: ['Angular', 'Python', 'AI'],
    links: {
      demo: null,
      repo: 'https://github.com/DispySK/quiz-cards',
    },
    caseStudy: {
      problem: 'Using another AI quiz apps is very limited to 3 per day or so, so I decided to make my own.',
      approach:
        'An Angular app sends the text to a Python backend. The backend asks Gemini for cards and returns only cards that pass validation.',
      decisions: [
        'The backend holds the Gemini key, so it never reaches the browser.',
        'Gemini must answer in JSON. The backend checks the shape and retries when the answer is broken.',
        'Missed cards are shown again sooner, using a simple review schedule.',
      ],
      next: 'PDF upload, and a progress page that shows weak topics.',
    },
  },
];
