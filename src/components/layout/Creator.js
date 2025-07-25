import { useState, useEffect } from "react";
import { Label } from "../ui/FormFields";
import { Input } from "../ui/FormFields";
import { Textarea } from "../ui/FormFields";
import Button from "../ui/Button";

export function Artworks_creator() {
    const [selected, setSelected] = useState(null);
    const [isLucrative, setIsLucrative] = useState(false);

    useEffect(() => {
        if (selected === "more_description") {
            const anchor = document.querySelector("#creation_date");
            if (anchor) {
                anchor.scrollIntoView({ behavior: "smooth" });
            }
        } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }, [selected]);

    return (
        <>
            <form className="h-fit mt-12 grid gap-4 bg-white rounded-lg shadow-md p-6 max-w-md w-full">
                <div className="grid gap-2">
                    <Label htmlFor={"artwork"} content={"Nom de l'œuvre"} />
                    <Input id={"artwork"} required={true} />
                </div>

                <div className="grid gap-2">
                    <Label htmlFor={"image"} content={"Choisir une image"} />
                    <Input
                        id={"image"}
                        type="file"
                        required={true}
                        accept={"image/*"}
                    />
                </div>

                <div className="grid gap-2">
                    <Label htmlFor={"description"} content={"Description"} />
                    <Textarea
                        id={"description"}
                        placeholder={
                            "Décrivez votre œuvre en quelques phrases : inspiration, technique, histoire…"
                        }
                        required={true}
                    />
                </div>

                <div className="grid gap-2">
                    <Label
                        content={"Ajouter à une collection"}
                        optional={true}
                    />

                    <div className="grid gap-2 border rounded-md border-gray-300 p-2 max-h-24 overflow-y-scroll">
                        <label className="flex items-center p-2 gap-2 hover:bg-stone-100 rounded-md">
                            <input type="checkbox" />

                            <span className="text-sm font-medium text-gray-700">
                                Eté 2025
                            </span>
                        </label>

                        <label className="flex items-center p-2 gap-2 hover:bg-stone-100 rounded-lg">
                            <input type="checkbox" />

                            <span className="text-sm font-medium text-gray-700">
                                Art moderne
                            </span>
                        </label>

                        <label className="flex items-center p-2 gap-2 hover:bg-stone-100 rounded-lg">
                            <input type="checkbox" />

                            <span className="text-sm font-medium text-gray-700">
                                Art urbain
                            </span>
                        </label>
                    </div>
                </div>

                <div className="grid gap-4">
                    <Button
                        content={"Plus de descriptifs"}
                        variant={["outline", "full", "arrowDown"]}
                        onClick={(event) => {
                            event.preventDefault();
                            setSelected((prev) =>
                                prev === "more_description"
                                    ? null
                                    : "more_description"
                            );
                        }}
                        isOpen={selected === "more_description"}
                    />

                    {selected === "more_description" && (
                        <>
                            <div className="grid gap-2">
                                <Label
                                    htmlFor={"creation_date"}
                                    content={"Date de création"}
                                    optional={true}
                                />
                                <Input id={"creation_date"} type="date" />
                            </div>

                            <div className="grid gap-2">
                                <Label
                                    htmlFor={"type"}
                                    content={"Type d'œuvre"}
                                    optional={true}
                                />
                                <Input
                                    id={"type"}
                                    placeholder="Ex: peinture sur toile"
                                />
                            </div>

                            <div className="grid gap-2">
                                <Label
                                    htmlFor={"size"}
                                    content={"Dimensions"}
                                    optional={true}
                                />
                                <Input id={"size"} placeholder="L x l cm" />
                            </div>

                            <div className="grid gap-2">
                                <Label
                                    htmlFor={"materials"}
                                    content={"Matériaux"}
                                    optional={true}
                                />
                                <Input
                                    id={"materials"}
                                    placeholder="Ex : bois, peinture acrylique"
                                />
                            </div>

                            <div className="grid gap-2">
                                <Label
                                    content={"But"}
                                    htmlFor={"no-lucrative"}
                                />

                                <div className="grid gap-2 border rounded-md border-gray-300 p-2">
                                    <label
                                        htmlFor="no-lucrative"
                                        className="flex items-start pl-2 gap-2 hover:bg-stone-100 rounded-md"
                                    >
                                        <input
                                            id="no-lucrative"
                                            type="radio"
                                            className={"mt-2"}
                                            name="lucrative"
                                            value={false}
                                            checked={!isLucrative}
                                            onChange={() => {
                                                setIsLucrative(false);
                                            }}
                                        />
                                        <div className="flex flex-col">
                                            <span className="text-sm font-medium text-gray-700">
                                                Non lucratif
                                            </span>
                                            <span className="text-xs text-gray-500">
                                                N'exposez pas cette œuvre à la
                                                vente.
                                            </span>
                                        </div>
                                    </label>

                                    <label
                                        htmlFor="lucrative"
                                        className="flex items-start pl-2 gap-2 hover:bg-stone-100 rounded-lg"
                                    >
                                        <input
                                            id="lucrative"
                                            type="radio"
                                            className={"mt-2"}
                                            name="lucrative"
                                            value={true}
                                            checked={isLucrative}
                                            onChange={() => {
                                                setIsLucrative(true);
                                            }}
                                        />
                                        <div className="flex flex-col">
                                            <span className="text-sm font-medium text-gray-700">
                                                Lucratif
                                            </span>
                                            <span className="text-xs text-gray-500">
                                                Mettez cette œuvre en vente.
                                            </span>
                                        </div>
                                    </label>
                                </div>

                                {isLucrative && (
                                    <div className="grid gap-2">
                                        <Label
                                            htmlFor={"price"}
                                            content={"Prix"}
                                        />

                                        <div className="flex items-center border rounded-md border-gray-300 hover:bg-stone-50 focus-within:bg-stone-50 focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-500">
                                            <div className="px-2 select-none text-sm text-gray-500">
                                                €
                                            </div>
                                            <input
                                                id="price"
                                                name="price"
                                                type="number"
                                                step={0.01}
                                                placeholder="0,00"
                                                className="w-full py-2 text-sm focus:outline-none bg-transparent hover:cursor-default"
                                                required
                                            />
                                            <div className="px-2 select-none text-sm text-gray-500">
                                                <span>EUR</span>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </>
                    )}

                    <Button
                        content={"Ajouter"}
                        variant={["dark", "full", "more"]}
                    />
                </div>
            </form>
        </>
    );
}

export function Collections_creator() {
    const [collection, setCollection] = useState("");
    const [description, setDescription] = useState("");

    async function handleSubmit(event) {
        console.log(1)
        event.preventDefault();

        try {
            const response = await fetch("http://localhost:4000/api/collection", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    // Optionnel : à utiliser si tu veux envoyer un token JWT
                    // "Authorization": `Bearer ${token}`,
                },
                body: JSON.stringify({
                    collection,
                    description,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Erreur lors de la création");
            }

            alert("Collection ajoutée !");
            setCollection("");
            setDescription("");
        } catch (error) {
            console.error("Erreur création collection :", error);
            alert("Erreur lors de l'ajout : " + error.message);
        }
    }

    function getCurrentSeason() {
        const month = new Date().getMonth() + 1;
        if (month >= 3 && month <= 5) return "Printemps";
        if (month >= 6 && month <= 8) return "Été";
        if (month >= 9 && month <= 11) return "Automne";
        return "Hiver";
    }

    const season = getCurrentSeason();
    const year = new Date().getFullYear();

    const artwork_name_example = `Ex : ${season} ${year}`;

    return (
        <>
            <form
                onSubmit={handleSubmit} 
                className="h-fit mt-12 grid gap-6 bg-white rounded-lg shadow-md p-6 max-w-md w-full"
            >
                <div className="grid gap-2">
                    <Label
                        htmlFor={"collection"}
                        content={"Nom de la collection"}
                    />
                    <Input
                        id={"collection"}
                        required={true}
                        placeholder={artwork_name_example}
                        value={collection}
                        onChange={(e) => setCollection(e.target.value)}
                    />
                </div>

                <div className="grid gap-2">
                    <Label
                        htmlFor={"description"}
                        content={"Description"}
                        optional={true}
                    />
                    <Textarea
                        id={"description"}
                        placeholder={
                            "Présentez votre collection : thème, style, inspiration commune…"
                        }
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>

                <Button
                type="submit"
                    content={"Ajouter"}
                    variant={["dark", "full", "more"]}
                />
            </form>
        </>
    );
}
