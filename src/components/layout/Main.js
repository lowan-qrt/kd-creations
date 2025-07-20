import { Routes, Route } from "react-router-dom";
import PrivateRoute from "../PrivateRoute";

import Home from "../../pages/Home";
import Collections from "../../pages/Collections";
import Artworks from "../../pages/Artworks";
import Contact from "../../pages/Contact";
import Login from "../../pages/Login";
import Dashboard from "../../pages/backoffice/Dashboard";
import MyArtworks from "../../pages/backoffice/MyArtworks";
import MyCollections from "../../pages/backoffice/MyCollections";
import Create from "../../pages/backoffice/Create";
import Security from "../../pages/backoffice/Security";
import Settings from "../../pages/backoffice/Settings";

export default function Main() {
    return (
        <>
            <main className="flex flex-col flex-1">
                <Routes>
                    <Route path="/accueil" element={<Home />} />
                    <Route path="/collections" element={<Collections />} />
                    <Route path="/oeuvres" element={<Artworks />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/connexion" element={<Login />} />
                    <Route
                        path="/dashboard"
                        element={
                            <PrivateRoute>
                                <Dashboard />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/mes-oeuvres"
                        element={
                            <PrivateRoute>
                                <MyArtworks />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/mes-collections"
                        element={
                            <PrivateRoute>
                                <MyCollections />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/créer"
                        element={
                            <PrivateRoute>
                                <Create />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/sécurité"
                        element={
                            <PrivateRoute>
                                <Security />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/paramètres"
                        element={
                            <PrivateRoute>
                                <Settings />
                            </PrivateRoute>
                        }
                    />
                </Routes>
            </main>
        </>
    );
}
