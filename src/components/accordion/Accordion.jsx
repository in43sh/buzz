import React, { useState, useRef, useEffect } from 'react';
import Chevron from './Chevron';

const Accordion = (props) => {
  const [active, setActive] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    contentRef.current.style.maxHeight = active ? `${contentRef.current.scrollHeight}px` : '0px';
  }, [contentRef, active]);

  const toggleActive = () => {
    setActive(!active);
  };

  return (
    <div className="accordion-section">
      <button
        className={active ? 'accordion accordion--active pointer' : 'accordion pointer'}
        onClick={toggleActive}
      >
        <p className="accordion__title">{props.title}</p>
        <Chevron
          className={active ? 'accordion__icon accordion__icon--rotate' : 'accordion__icon'}
          width={10}
          fill={'#777'}
        />
      </button>
      <div ref={contentRef} className="accordion__content">
        <div className="accordion__text">{props.children}</div>
      </div>
    </div>
  );
};

export default Accordion;
