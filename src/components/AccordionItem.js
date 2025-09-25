import React, { useState } from 'react';

const AccordionItem = ({ title, content, open }) => {
  const [isOpen, setIsOpen] = useState(open);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-item">
      <button className="accordion-header" onClick={toggle}>
        <span className="accordion-title">{title}</span>
        <span className={`accordion-icon ${isOpen ? 'open' : ''}`}>
          {isOpen ? '−' : '+'}
        </span>
      </button>
      {isOpen && (
        <div className="accordion-content">
          <div className="accordion-body">
            {content}
          </div>
        </div>
      )}
    </div>
  );
};

export default AccordionItem;