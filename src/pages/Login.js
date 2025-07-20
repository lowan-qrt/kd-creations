import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Input } from "../components/ui/FormFields";
import { Label } from "../components/ui/FormFields";
import Button from "../components/ui/Button";

export default function Login() {
    const [identifiant, setIdentifiant] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();


    const isFormValid =
        identifiant.trim().length > 0 && password.trim().length > 0;

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!isFormValid) return;

        setLoading(true);
        setError("");

        try {
            const response = await fetch(
                "http://localhost:4000/api/login",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ identifiant, password }),
                }
            );

            const data = await response.json();

            if (!response.ok) {
                setError(data.message || "Erreur lors de la connexion");
            } else {
                // Connexion réussie, on stock le token
                localStorage.setItem("token", data.token);
                // Redirection
                navigate("/dashboard");
            }
        } catch (err) {
            setError("Erreur réseau, veuillez réessayer.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-white rounded-lg shadow-md p-6 max-w-md mx-auto my-auto"
        >
            <div className="mb-6">
                <h2 className="text-2xl font-semibold">
                    Connexion à votre compte
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                    Entrez votre identifiant ci-dessous pour vous connecter à
                    votre compte
                </p>
            </div>

            <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                    <Label htmlFor="identifiant" content="Identifiant" />
                    <Input
                        id="identifiant"
                        placeholder="email@exemple.com"
                        required
                        value={identifiant}
                        onChange={(e) => setIdentifiant(e.target.value)}
                    />
                </div>

                <div className="grid gap-2">
                    <div className="flex items-center">
                        <Label htmlFor="password" content="Mot de passe" />
                        <a
                            href="!#"
                            className="ml-auto text-sm text-blue-600 underline-offset-4 hover:underline"
                        >
                            Mot de passe oublié ?
                        </a>
                    </div>
                    <Input
                        id="password"
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <div className="flex gap-3">
                    <Button
                        type="submit"
                        content={loading ? "Connexion..." : "Connexion"}
                        variant={[isFormValid ? "primary" : "primary_disabled", "full"]}
                    />

                    <Button
                        content={"Connexion avec Google"}
                        variant={["outline", "full"]}
                    />
                </div>
            </div>

            <div className="mt-4 text-center text-sm text-gray-600">
                Vous n&apos;avez pas encore de compte ?{" "}
                <a
                    href="!#"
                    className="text-blue-600 underline underline-offset-4 hover:text-blue-800"
                >
                    Inscription
                </a>
            </div>
        </form>
    );
}
