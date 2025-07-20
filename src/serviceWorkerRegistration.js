// fichier: src/serviceWorkerRegistration.js

// Ce fichier permet d’enregistrer le Service Worker pour activer la PWA

const isLocalhost = Boolean(
    window.location.hostname === "localhost" ||
        // [::1] est l’adresse localhost pour IPv6.
        window.location.hostname === "[::1]" ||
        // 127.0.0.0/8 pour IPv4.
        window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
        )
);

export function register(config) {
    if (process.env.NODE_ENV === "production" && "serviceWorker" in navigator) {
        const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);
        if (publicUrl.origin !== window.location.origin) {
            // Si PUBLIC_URL pointe vers un domaine différent, skip.
            return;
        }

        window.addEventListener("load", () => {
            const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;

            if (isLocalhost) {
                // Pour localhost : vérifie le Service Worker
                checkValidServiceWorker(swUrl, config);

                navigator.serviceWorker.ready.then(() => {
                    console.log(
                        "Cette app web est servie par un service worker en mode localhost."
                    );
                });
            } else {
                // Pour production : enregistre le Service Worker
                registerValidSW(swUrl, config);
            }
        });
    }
}

function registerValidSW(swUrl, config) {
    navigator.serviceWorker
        .register(swUrl)
        .then((registration) => {
            registration.onupdatefound = () => {
                const installingWorker = registration.installing;
                if (installingWorker == null) {
                    return;
                }
                installingWorker.onstatechange = () => {
                    if (installingWorker.state === "installed") {
                        if (navigator.serviceWorker.controller) {
                            console.log(
                                "Nouveau contenu dispo, veuillez recharger."
                            );
                            if (config && config.onUpdate) {
                                config.onUpdate(registration);
                            }
                        } else {
                            console.log(
                                "Contenu mis en cache pour utilisation offline."
                            );
                            if (config && config.onSuccess) {
                                config.onSuccess(registration);
                            }
                        }
                    }
                };
            };
        })
        .catch((error) => {
            console.error(
                "Erreur lors de l’enregistrement du service worker:",
                error
            );
        });
}

function checkValidServiceWorker(swUrl, config) {
    fetch(swUrl, {
        headers: { "Service-Worker": "script" },
    })
        .then((response) => {
            const contentType = response.headers.get("content-type");
            if (
                response.status === 404 ||
                (contentType != null &&
                    contentType.indexOf("javascript") === -1)
            ) {
                navigator.serviceWorker.ready.then((registration) => {
                    registration.unregister().then(() => {
                        window.location.reload();
                    });
                });
            } else {
                registerValidSW(swUrl, config);
            }
        })
        .catch(() => {
            console.log("Pas de connexion Internet. Mode offline uniquement.");
        });
}

export function unregister() {
    if ("serviceWorker" in navigator) {
        navigator.serviceWorker.ready
            .then((registration) => {
                registration.unregister();
            })
            .catch((error) => {
                console.error(error.message);
            });
    }
}
