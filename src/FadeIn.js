import React, { useState, useRef, useEffect } from "react";

function FadeIn(props) {
  const [isVisible, setVisible] = useState(false);

  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
         // Not possible to set it back to false like this:
         setVisible(true);

         // No need to keep observing:
         observer.unobserve(domRef.current);
     }
    });
    observer.observe(domRef.current);
    return () => observer.unobserve(domRef.current);
  }, []);

  return (
    <div className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}

export default FadeIn;
