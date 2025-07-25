// Point d'entrée
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import collectionRoutes from "./routes/collectionRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", authRoutes);
app.use("/api", collectionRoutes);

app.get("/", (req, res) => {
    res.send("Backend Node.js fonctionne !");
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Serveur démarré sur le port ${PORT}\n`));
