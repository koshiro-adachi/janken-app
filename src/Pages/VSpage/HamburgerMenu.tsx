import React, { useRef, useState } from "react";

export const HamburgerMenu = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [hamburger, setHamburger] = useState(false);
  const onClickHamburger = () => {
    setHamburger(!hamburger);
    if (hamburger === true) {
      ref.current?.animate([{ left: 50 }, { left: -50 }], {});
    }
  };
  return (
    <div>
      <button onClick={onClickHamburger}>button</button>
      <div ref={ref}>contents</div>
    </div>
  );
};
