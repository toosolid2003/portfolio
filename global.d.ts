declare global {
  interface Window {
    umami: {
      track: (event: string) => void;
    };
  }

  var umami: {
    track: (event: string) => void;
  };
}

export {};