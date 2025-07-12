import { useState, useEffect } from "react";

const wrapStyle = {
  position: "fixed",
  top: "0",
  left: "0",
  right: "0",
  height: "10px",
};

const innerStyle = {
  position: "absolute",
  left: "0",
  height: "10px",
  backgroundColor: "red",
};

export const ScrollProgressBar = () => {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const scrollHandler = () => {
      const documentHeight = document.documentElement.scrollHeight;
      const viewportHeight = window.innerHeight;
      const scrollTop = window.scrollY;
      const totalScrollableHeight = documentHeight - viewportHeight;
      const scrollPercent = (scrollTop / totalScrollableHeight) * 100;
      setPercent(scrollPercent.toFixed(2));
    }

    window.addEventListener('scroll', scrollHandler);

    return (() => {
      window.removeEventListener('scroll', scrollHandler);
    })
  }, []);

  return (
    <div style={wrapStyle}>
      <div style={{ ...innerStyle, width: percent + '%' }}></div>
    </div>
  );
}