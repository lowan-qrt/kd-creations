import { Link } from "react-router-dom";
import Button from "../../components/ui/Button";

export default function MyCollections() {
    return (
        <>
            <h1 className="py-4 px-[5vw] text-left text-5xl font-semibold">
                Mes Collections
            </h1>

            <div className="flex justify-end px-[5vw]">
                <Link to={"/créer"}>
                    <Button
                        content="Créer une collection"
                        variant={["dark", "more"]}
                    />
                </Link>
            </div>

            <section className="flex flex-1 justify-center items-center my-6 px-[5vw]">
                Aucune collection publiée pour le moment.
            </section>
        </>
    );
}
