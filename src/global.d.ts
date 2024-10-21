// src/global.d.ts
declare global {
  interface Window {
    togglePageFlip: (el: HTMLElement) => void;
  }
}

export {};
