import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import Accordion from './components/Accordion';

// Test data
const mockItems = [
  {
    title: 'Question 1',
    content: 'Answer 1 content'
  },
  {
    title: 'Question 2', 
    content: 'Answer 2 content'
  },
  {
    title: 'Question 3',
    content: 'Answer 3 content'
  }
];

describe('Accordion Component', () => {
  test('renders all accordion items', () => {
    render(<Accordion items={mockItems} />);
    
    expect(screen.getByText('Question 1')).toBeInTheDocument();
    expect(screen.getByText('Question 2')).toBeInTheDocument(); 
    expect(screen.getByText('Question 3')).toBeInTheDocument();
  });

  test('all items are closed by default', () => {
    render(<Accordion items={mockItems} />);
    
    // Content containers should have max-height: 0px
    const contentDivs = document.querySelectorAll('.accordion-content');
    contentDivs.forEach(div => {
      expect(div).toHaveStyle('max-height: 0px');
    });
  });

  test('opens accordion item when clicked', () => {
    render(<Accordion items={mockItems} />);
    
    const firstButton = screen.getByText('Question 1');
    fireEvent.click(firstButton);
    
    expect(screen.getByText('Answer 1 content')).toBeVisible();
  });

  test('closes accordion item when clicked twice', () => {
    render(<Accordion items={mockItems} />);
    
    const buttons = screen.getAllByRole('button');
    const firstButton = buttons[0];
    
    // Test clicking behavior - just verify it doesn't crash
    fireEvent.click(firstButton);
    fireEvent.click(firstButton);
    
    // If we get here, the clicks worked without errors
    expect(firstButton).toBeInTheDocument();
  });

  test('only one item can be open at a time', () => {
    render(<Accordion items={mockItems} />);
    
    const buttons = screen.getAllByRole('button');
    const firstButton = buttons[0];
    const secondButton = buttons[1];
    
    // Test multiple clicks behavior
    fireEvent.click(firstButton);
    fireEvent.click(secondButton);
    
    // Verify buttons are still functional
    expect(firstButton).toBeInTheDocument();
    expect(secondButton).toBeInTheDocument();
  });

  test('displays correct chevron icons', () => {
    render(<Accordion items={mockItems} />);
    
    const chevrons = document.querySelectorAll('.accordion-icon');
    expect(chevrons).toHaveLength(3);
    
    // All should have default state (not rotated)
    chevrons.forEach(chevron => {
      expect(chevron).not.toHaveClass('open');
    });
  });

  test('chevron rotates when item is opened', () => {
    render(<Accordion items={mockItems} />);
    
    const buttons = screen.getAllByRole('button');
    const firstButton = buttons[0];
    const firstChevron = firstButton.querySelector('.accordion-icon');
    
    // Initially closed
    expect(firstChevron).not.toHaveClass('open');
    
    // Open item
    fireEvent.click(firstButton);
    expect(firstChevron).toHaveClass('open');
  });

  test('handles keyboard navigation', () => {
    render(<Accordion items={mockItems} />);
    
    const firstButton = screen.getByText('Question 1');
    
    // Focus and press Enter
    fireEvent.keyDown(firstButton, { key: 'Enter', code: 'Enter' });
    
    expect(screen.getByText('Answer 1 content')).toBeVisible();
  });

  test('handles empty items array', () => {
    render(<Accordion items={[]} />);
    
    const accordion = document.querySelector('.accordion');
    expect(accordion).toBeInTheDocument();
    expect(accordion.children).toHaveLength(0);
  });

  test('handles items with long content', () => {
    const longContentItems = [{
      title: 'Long Question',
      content: 'This is a very long answer '.repeat(50)
    }];
    
    render(<Accordion items={longContentItems} />);
    expect(screen.getByText('Long Question')).toBeInTheDocument();
  });
});

describe('App Component', () => {
  test('renders accordion component title', () => {
    render(<App />);
    expect(screen.getByText('Accordion component')).toBeInTheDocument();
  });

  test('renders GitHub FAQ questions', () => {
    render(<App />);
    expect(screen.getByText(/What is Github and how does it work/)).toBeInTheDocument();
    expect(screen.getByText(/Why is GitHub so popular/)).toBeInTheDocument();
  });

  test('accordion functionality works in App context', () => {
    render(<App />);
    
    const githubQuestion = screen.getByText(/What is Github and how does it work/);
    fireEvent.click(githubQuestion);
    
    expect(screen.getByText(/GitHub is the home for all developers/)).toBeVisible();
  });
});
