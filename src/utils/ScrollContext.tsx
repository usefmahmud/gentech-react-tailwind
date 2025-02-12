import { createContext, useContext, useRef, ReactNode } from "react";

type SectionRefs = {
  hero: React.RefObject<HTMLElement | null>
  about: React.RefObject<HTMLElement | null>
  services: React.RefObject<HTMLElement | null>
  contact: React.RefObject<HTMLElement | null>
};

const ScrollContext = createContext<SectionRefs | null>(null)

export function ScrollProvider({ children }: { children: ReactNode }) {
  const sectionsRef: SectionRefs = {
    hero: useRef<HTMLElement>(null),
    about: useRef<HTMLElement>(null),
    services: useRef<HTMLElement>(null),
    contact: useRef<HTMLElement>(null),
  };

  return <ScrollContext.Provider value={sectionsRef}>{children}</ScrollContext.Provider>;
}

export function useScroll() {
  return useContext(ScrollContext)
}
