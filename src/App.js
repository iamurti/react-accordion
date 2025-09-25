import './App.css';

import Accordion from './components/Accordion';

const App = () => {
  const items = [
    {
      title: 'What is Github and how does it work?',
      content: 'GitHub is the home for all developers...',
      open: true, // Inicialmente abierto
    },
    {
      title: 'How do I see GitHub’s availability?',
      content: 'Check our real-time status report',
      open: false,
    },
    {
      title: 'Why is GitHub so popular?',
      content: 'GitHub is built by developers for developers...',
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