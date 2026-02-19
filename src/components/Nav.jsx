import { useEffect, useState } from "react";

export default function Nav({ sections }) {
  const [activeId, setActiveId] = useState(sections[0].id);

  useEffect(() => {
    const handleScroll = () => {
      let current = sections[0].id;
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const sectionTop = element.offsetTop - 80;
          if (window.pageYOffset >= sectionTop) {
            current = section.id;
          }
        }
      });
      setActiveId(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  return (
    <nav>
      <ul>
        {sections.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className={activeId === section.id ? "active" : ""}
            >
              {section.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
