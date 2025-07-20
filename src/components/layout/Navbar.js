import { useState, useEffect } from "react";
import { Link  as RouterLink, useLocation } from "react-router-dom";
import Link from "../ui/Link";

export default function Navbar() {
    const location = useLocation();

    const [isLoggedIn, setIsLoggedIn] = useState(
        !!localStorage.getItem("token")
    );

    // Chaque fois que l’URL change, on vérifie le token
    useEffect(() => {
        setIsLoggedIn(!!localStorage.getItem("token"));
    }, [location]);

    const links = isLoggedIn
        ? [
              { href: "/dashboard", content: "Dashboard" },
              { href: "/mes-collections", content: "Mes collections" },
              { href: "/mes-oeuvres", content: "Mes Oeuvres" },
              { href: "/créer", content: "Créer" },
              { href: "/sécurité", content: "Sécurité" },
              { href: "/paramètres", content: "Paramètres" },
              { href: "!#", content: "Déconnexion" },
          ]
        : [
              { href: "/accueil", content: "Accueil" },
              { href: "/collections", content: "Collections" },
              { href: "/oeuvres", content: "Oeuvres" },
              { href: "/contact", content: "Contact" },
          ];

    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.href = "/accueil";
    };

    return (
        <>
            <nav className="py-4 px-[5vw]">
                <ul className="flex justify-between items-center">
                    <li>
                        <RouterLink to="/accueil">Karine Dubrulle</RouterLink>
                    </li>
                    <div className="flex gap-6">
                        {links.map((link, i) => (
                            <li key={i}>
                                {link.content === "Déconnexion" ? (
                                    <button
                                        onClick={handleLogout}
                                        className="underline underline-offset-2 decoration-[var(--bg-color)] transition-colors duration-500 ease-in-out hover:decoration-stone-600 opacity-30"
                                    >
                                        Déconnexion
                                    </button>
                                ) : (
                                    <Link {...link} />
                                )}
                            </li>
                        ))}
                    </div>
                </ul>
            </nav>
        </>
    );
}
