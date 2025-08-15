import toast from "react-hot-toast";

// Types pour les toasts
export type ToastType = "success" | "error" | "loading" | "info";

// Configuration des toasts par défaut
const toastConfig = {
  success: {
    duration: 3000,
    iconTheme: {
      primary: "#10B981",
      secondary: "#fff",
    },
  },
  error: {
    duration: 5000,
    iconTheme: {
      primary: "#EF4444",
      secondary: "#fff",
    },
  },
  loading: {
    duration: 2000,
  },
  info: {
    duration: 4000,
  },
};

// Fonctions utilitaires pour les toasts
export const showToast = {
  // Toast de succès
  success: (message: string) => {
    return toast.success(message, toastConfig.success);
  },

  // Toast d'erreur
  error: (message: string) => {
    return toast.error(message, toastConfig.error);
  },

  // Toast de chargement
  loading: (message: string) => {
    return toast.loading(message, toastConfig.loading);
  },

  // Toast d'information
  info: (message: string) => {
    return toast(message, toastConfig.info);
  },

  // Toast avec promesse
  promise: <T>(
    promise: Promise<T>,
    messages: {
      loading: string;
      success: string;
      error: string;
    }
  ) => {
    return toast.promise(promise, messages);
  },

  // Toast personnalisé
  custom: (message: string, options?: any) => {
    return toast(message, options);
  },
};

// Messages prédéfinis pour les actions courantes
export const toastMessages = {
  // Recettes
  recipe: {
    created: "Recette sauvegardée avec succès !",
    updated: "Recette mise à jour avec succès !",
    deleted: "Recette supprimée avec succès !",
    error: "Erreur lors de la manipulation de la recette",
    loading: "Chargement des recettes...",
  },

  // Ingrédients
  ingredient: {
    created: "Ingrédient ajouté avec succès !",
    updated: "Ingrédient mis à jour avec succès !",
    deleted: "Ingrédient supprimé avec succès !",
    error: "Erreur lors de la manipulation de l'ingrédient",
    loading: "Chargement des ingrédients...",
  },

  // Contact
  contact: {
    sent: "Message envoyé avec succès !",
    error: "Erreur lors de l'envoi du message",
    loading: "Envoi du message...",
  },

  // Génération IA
  ai: {
    generating: "Génération de la recette en cours...",
    success: "Recette générée avec succès !",
    error: "Erreur lors de la génération",
  },

  // Général
  general: {
    loading: "Chargement...",
    error: "Une erreur est survenue",
    success: "Opération réussie !",
    networkError: "Erreur de connexion",
  },
};

// Fonctions spécialisées pour les actions courantes
export const recipeToasts = {
  create: () => showToast.success(toastMessages.recipe.created),
  update: () => showToast.success(toastMessages.recipe.updated),
  delete: () => showToast.success(toastMessages.recipe.deleted),
  error: () => showToast.error(toastMessages.recipe.error),
  loading: () => showToast.loading(toastMessages.recipe.loading),
};

export const ingredientToasts = {
  create: () => showToast.success(toastMessages.ingredient.created),
  update: () => showToast.success(toastMessages.ingredient.updated),
  delete: () => showToast.success(toastMessages.ingredient.deleted),
  error: () => showToast.error(toastMessages.ingredient.error),
  loading: () => showToast.loading(toastMessages.ingredient.loading),
};

export const contactToasts = {
  send: () => showToast.success(toastMessages.contact.sent),
  error: () => showToast.error(toastMessages.contact.error),
  loading: () => showToast.loading(toastMessages.contact.loading),
};

export const aiToasts = {
  generating: () => showToast.loading(toastMessages.ai.generating),
  success: () => showToast.success(toastMessages.ai.success),
  error: () => showToast.error(toastMessages.ai.error),
};

export default showToast;
