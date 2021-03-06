import { useState, useEffect } from "react";

const defaultSettings = {
  length: 30,
  ending: "...",
};

export const useTextTruncate = (str, settings = defaultSettings) => {
  const [text, setText] = useState(str);
  useEffect(() => {
    if (text.length > settings.length) {
      setText(
        text.substring(0, settings.length - settings.ending.length) +
          settings.ending
      );
    }
  }, [text]);

  return { text, setText };
};
