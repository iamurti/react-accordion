import React from 'react';
import AccordionItem from './AccordionItem';

const Accordion = ({ items }) => (
  <div className="accordion">
    {items.map((item, index) => (
      <AccordionItem
        key={index}
        title={item.title}
        content={item.content}
        open={item.open}
      />
    ))}
  </div>
);

export default Accordion;