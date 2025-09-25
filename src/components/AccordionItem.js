import React, { useRef, useEffect } from 'react';

const AccordionItem = ({ title, content, isOpen, onToggle }) => {
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      if (isOpen) {
        // Obtener la altura real del contenido
        const scrollHeight = contentRef.current.scrollHeight;
        contentRef.current.style.maxHeight = scrollHeight + "px";
        
        // Después de la animación, quitar la restricción de altura
        setTimeout(() => {
          if (contentRef.current && isOpen) {
            contentRef.current.style.maxHeight = "none";
          }
        }, 400);
      } else {
        // Primero establecer altura específica antes de animar a 0
        contentRef.current.style.maxHeight = contentRef.current.scrollHeight + "px";
        
        // Forzar un reflow y luego animar a 0
        setTimeout(() => {
          if (contentRef.current) {
            contentRef.current.style.maxHeight = "0px";
          }
        }, 10);
      }
    }
  }, [isOpen]);

  return (
    <div className="accordion-item">
      <button className="accordion-header" onClick={onToggle}>
        <span className="accordion-title">{title}</span>
        <svg
          className={`accordion-icon ${isOpen ? 'open' : ''}`}
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div 
        ref={contentRef} 
        className="accordion-content"
        style={{ 
          maxHeight: '0px'
        }}
      >
        <div className="accordion-body">
          {content}
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
