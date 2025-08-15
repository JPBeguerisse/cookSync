import axios from "axios";

// Configuration de base d'axios
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://localhost:8000",
  timeout: 10000, // 10 secondes
  headers: {
    "Content-Type": "application/json",
  },
});

// Intercepteur pour les requêtes
api.interceptors.request.use(
  (config) => {
    // Log des requêtes en développement
    if (process.env.NODE_ENV === "development") {
      console.log("🚀 Requête API:", config.method?.toUpperCase(), config.url);
    }
    return config;
  },
  (error) => {
    console.error("❌ Erreur de requête:", error);
    return Promise.reject(error);
  }
);

// Intercepteur pour les réponses
api.interceptors.response.use(
  (response) => {
    // Log des réponses en développement
    if (process.env.NODE_ENV === "development") {
      console.log("✅ Réponse API:", response.status, response.config.url);
    }
    return response;
  },
  (error) => {
    // Gestion centralisée des erreurs
    if (error.response) {
      // Le serveur a répondu avec un code d'erreur
      console.error(
        "❌ Erreur API:",
        error.response.status,
        error.response.data
      );
    } else if (error.request) {
      // La requête a été faite mais pas de réponse
      console.error("❌ Pas de réponse du serveur");
    } else {
      // Erreur lors de la configuration de la requête
      console.error("❌ Erreur de configuration:", error.message);
    }
    return Promise.reject(error);
  }
);

export default api;
