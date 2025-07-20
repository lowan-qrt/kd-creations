import { useEffect, useState } from "react";

export default function Home() {
    const [donnees, setDonnees] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/api/donnees")
            .then((res) => res.json())
            .then((data) => {
                console.log(data); // 👉 Résultat dans la console
                setDonnees(data); // 👉 Stocke le résultat dans ton state
            })
            .catch((err) => console.error(err));
    }, []);

    return (
        <h1 className="py-4 px-[5vw] text-left text-5xl font-semibold">
            Accueil
        </h1>
    );
}
