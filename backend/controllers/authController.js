// Les fonctions qui exécutent la logique (requêtes SQL)
import pool from "../utils/db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function login(req, res) {
    const { identifiant, password } = req.body;

    if (!identifiant || !password) {
        return res
            .status(400)
            .json({ message: "Identifiant et mot de passe requis" });
    }

    try {
        const [rows] = await pool.query("SELECT * FROM User WHERE email = ?", [
            identifiant,
        ]);

        if (rows.length === 0) {
            return res
                .status(401)
                .json({ message: "Utilisateur ou mot de passe incorrect" });
        }

        const user = rows[0];
        const validPassword = await bcrypt.compare(password, user.password);

        if (!validPassword) {
            return res
                .status(401)
                .json({ message: "Utilisateur ou mot de passe incorrect" });
        }

        const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
            expiresIn: "1h",
        });

        res.json({ message: "Connexion réussie", token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erreur serveur" });
    }
}
