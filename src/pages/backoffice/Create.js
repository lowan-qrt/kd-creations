import { useState } from "react";
import { Artworks_creator } from "../../components/layout/Creator";
import { Collections_creator } from "../../components/layout/Creator";
import Button from "../../components/ui/Button";

export default function Create() {
    const [selected, setSelected] = useState(null);

    return (
        <>
            <h1 className="py-4 px-[5vw] text-left text-5xl font-semibold">
                Créer
            </h1>

            <div className="flex justify-between px-[5vw]">
                <p className="text-lg text-gray-700 leading-relaxed">
                    Ici, publiez de nouvelles créations au grand public ;
                    classez-les selon vos propres collections.
                </p>

                {selected !== null && (
                    <Button
                        content="Retour"
                        variant={"dark"}
                        onClick={() => setSelected(null)}
                    />
                )}
            </div>

            <div className="flex flex-1 justify-center">
                {selected === null && (
                    <section className="my-auto flex flex-col gap-8 max-w-md w-full">
                        <em className="text-center text-lg">
                            <p>
                                Qu'allons-nous <u>partager</u> aujourd'hui ?
                            </p>
                        </em>

                        <div className="flex gap-3">
                            <Button
                                content={"Nouvelle Oeuvre"}
                                variant={["dark", "more", "full"]}
                                onClick={() => setSelected("Artworks")}
                            />
                            <Button
                                content={"Nouvelle Collection"}
                                variant={["outline", "more", "full"]}
                                onClick={() => setSelected("Collections")}
                            />
                        </div>
                    </section>
                )}

                {selected === "Artworks" && (
                    <>
                        <Artworks_creator />
                    </>
                )}

                {selected === "Collections" && (
                    <>
                        <Collections_creator />
                    </>
                )}
            </div>
        </>
    );
}
