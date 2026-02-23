import { useState, useEffect } from "react";

const messages = [
  "Free Delivery on Orders Over 49$",
  "100% Natural Ingredients",
  "Cash on Delivery Available",
];

const AnnouncementBar = () => {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % messages.length);
        setVisible(true);
      }, 400);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center py-2.5 px-4" style={{ backgroundColor: '#FEFEFA' }}>
      <p
        className={`text-xs font-sans tracking-widest uppercase text-foreground transition-opacity duration-400 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        {messages[index]}
      </p>
    </div>
  );
};

export default AnnouncementBar;
