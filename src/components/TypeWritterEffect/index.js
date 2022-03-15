import React, { useEffect, useState } from "react";
import "./style.css";

const words = ["Designer", "Developer"];

export default function TypeWritterEffect() {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  const [reverse, setReverse] = useState(false);

  // Blink Letter every 0.5sec
  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(timeout2);
  }, [blink]);

  // TypeWriter Effect
  useEffect(() => {
    if (index === words.length - 1 && subIndex === words[index].length) {
      setReverse(true);
      return;
    }

    if (
      subIndex === words[index].length + 1 &&
      index !== words.length - 1 &&
      !reverse
    ) {
      setReverse(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => prev + 1);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 75 : subIndex === words[index].length ? 1000 : 150, parseInt(Math.random() * 350)));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  return (
    <h1 className="neo-h1">
      <span>@</span>
      Web {`${words[index].substring(0, subIndex)}${blink ? "|" : ""}`}
    </h1>
  );
}
