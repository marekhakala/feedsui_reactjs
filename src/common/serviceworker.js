export default function register() {
  if (process.env.NODE_ENV === "production" && "serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;
      navigator.serviceWorker.register(swUrl).then(registration => {
          // Cache
          registration.onupdatefound = () => {
            const installingWorker = registration.installing;
            installingWorker.onstatechange = () => {
              if (installingWorker.state === "installed") {
                if (navigator.serviceWorker.controller) {
                  console.log("The new content is available. Please refresh.");
                } else {
                  console.log("Content is cached for offline mode.");
                }
              }
            };
          };
        }).catch(e => console.error("Error during service worker registration: ", e));
    });
  }
}

export function unregister() { if ("serviceWorker" in navigator) {
    navigator.serviceWorker.ready.then(registration => registration.unregister());
  }
}
