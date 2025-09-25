import './App.css';
import Accordion from './components/Accordion';

const App = () => {
  const items = [
    {
      title: 'What is Github and how does it work?',
      content: 'GitHub is the home for all developers—a platform where you can share code, contribute to open source projects, or even automate your workflow with tools like GitHub Actions and Packages. If you\'re just getting started with GitHub, you may know us best as a place for version control and collaboration. With over 100 million repositories and millions of users worldwide, GitHub has become the standard platform for software development.',
      open: false,
    },
    {
      title: 'How do I see GitHub\'s availability?',
      content: 'Check our real-time status report at status.github.com for current information.',
      open: false,
    },
    {
      title: 'Why is GitHub so popular?',
      content: 'GitHub is built by developers for developers, and we\'re proud to be home to the world\'s largest open source community. With 50 million developers and millions more open source projects, GitHub has become the go-to place to collaborate and build software together. The platform offers powerful features like pull requests, issues, project management, and continuous integration that make development workflows more efficient.',
      open: false,
    },
    {
      title: 'Who is GitHub for?',
      content: 'GitHub is for everyone! Whether you\'re a student learning to code, an open source maintainer, or part of a team at a large enterprise, GitHub provides tools and features designed to improve your workflow.',
      open: false,
    },
    {
      title: 'Do people use GitHub only for code?',
      content: 'No! While GitHub started as a platform for code, people use it for much more. You can host websites with GitHub Pages, manage documentation, collaborate on research papers, create project wikis, and even use it for non-technical projects like writing books, managing recipes, or organizing events. The version control and collaboration features make it useful for any project that involves files and teamwork.',
      open: false,
    },
  ];

  return (
    <div className="App">
      <div className="App-content">
        <h1>Accordion component</h1>
        <Accordion items={items} />
      </div>
    </div>
  );
};

export default App;