import pool from "../utils/db.js";

export async function createCollection(req, res) {
    const { collection: name, description } = req.body;

    if (!name) {
        return res
            .status(400)
            .json({ message: "Le nom de la collection est requis." });
    }

    try {
        const [result] = await pool.query(
            "INSERT INTO Collection (name, description) VALUES (?, ?)",
            [name, description || null]
        );

        res.status(201).json({
            message: "Collection créée avec succès.",
            collectionId: result.insertId,
        });
    } catch (error) {
        console.error("Erreur création collection :", error);
        res.status(500).json({ message: "Erreur serveur." });
    }
}
