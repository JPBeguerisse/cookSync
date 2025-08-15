# Guide d'utilisation des Toasts

Ce guide explique comment utiliser le système de toasts dans le projet CookSync.

## 🚀 Installation

React Hot Toast est déjà installé et configuré dans le projet.

## 📍 Configuration

Le `Toaster` est configuré dans `App.tsx` avec :
- Position : `top-right`
- Durée par défaut : 4 secondes
- Style personnalisé avec les couleurs du projet

## 🎯 Utilisation basique

### Import
```typescript
import { showToast } from '../utils/toast';
```

### Exemples simples
```typescript
// Toast de succès
showToast.success('Opération réussie !');

// Toast d'erreur
showToast.error('Une erreur est survenue');

// Toast de chargement
showToast.loading('Chargement...');

// Toast d'information
showToast.info('Information importante');
```

## 🎨 Utilisation avancée

### Toast avec promesse
```typescript
const saveRecipe = async () => {
  // Votre logique de sauvegarde
};

showToast.promise(saveRecipe(), {
  loading: 'Sauvegarde en cours...',
  success: 'Recette sauvegardée !',
  error: 'Erreur de sauvegarde',
});
```

### Toast personnalisé
```typescript
showToast.custom('Message personnalisé', {
  duration: 6000,
  style: {
    background: '#7C3AED',
    color: '#fff',
  },
});
```

## 🏷️ Fonctions spécialisées

### Pour les recettes
```typescript
import { recipeToasts } from '../utils/toast';

recipeToasts.create();    // "Recette créée avec succès !"
recipeToasts.update();    // "Recette mise à jour avec succès !"
recipeToasts.delete();    // "Recette supprimée avec succès !"
recipeToasts.error();     // "Erreur lors de la manipulation de la recette"
recipeToasts.loading();   // "Chargement des recettes..."
```

### Pour les ingrédients
```typescript
import { ingredientToasts } from '../utils/toast';

ingredientToasts.create();    // "Ingrédient ajouté avec succès !"
ingredientToasts.update();    // "Ingrédient mis à jour avec succès !"
ingredientToasts.delete();    // "Ingrédient supprimé avec succès !"
ingredientToasts.error();     // "Erreur lors de la manipulation de l'ingrédient"
ingredientToasts.loading();   // "Chargement des ingrédients..."
```

### Pour les contacts
```typescript
import { contactToasts } from '../utils/toast';

contactToasts.send();     // "Message envoyé avec succès !"
contactToasts.error();    // "Erreur lors de l'envoi du message"
contactToasts.loading();  // "Envoi du message..."
```

### Pour la génération IA
```typescript
import { aiToasts } from '../utils/toast';

aiToasts.generating();    // "Génération de la recette en cours..."
aiToasts.success();       // "Recette générée avec succès !"
aiToasts.error();         // "Erreur lors de la génération"
```

## 📝 Messages prédéfinis

Vous pouvez utiliser les messages prédéfinis :

```typescript
import { toastMessages } from '../utils/toast';

// Utiliser un message spécifique
showToast.success(toastMessages.recipe.created);
showToast.error(toastMessages.general.networkError);
```

## 🔧 Personnalisation

### Modifier la configuration globale
Éditez `frontend/src/utils/toast.ts` pour changer :
- Durées par défaut
- Couleurs des icônes
- Messages prédéfinis

### Modifier la configuration du Toaster
Éditez `frontend/src/App.tsx` pour changer :
- Position des toasts
- Style global
- Durées par type

## 💡 Bonnes pratiques

1. **Utilisez les fonctions spécialisées** quand possible
2. **Messages clairs et concis**
3. **Durées appropriées** :
   - Succès : 3 secondes
   - Erreur : 5 secondes
   - Info : 4 secondes
4. **Évitez les toasts en cascade**
5. **Utilisez les promesses** pour les opérations asynchrones

## 🎨 Exemples d'intégration

### Dans un formulaire
```typescript
const handleSubmit = async (e) => {
  e.preventDefault();
  
  try {
    await saveData();
    showToast.success('Données sauvegardées !');
  } catch (error) {
    showToast.error('Erreur de sauvegarde');
  }
};
```

### Avec une promesse
```typescript
const handleAsyncOperation = async () => {
  const promise = fetchData();
  
  showToast.promise(promise, {
    loading: 'Chargement...',
    success: 'Données chargées !',
    error: 'Erreur de chargement',
  });
};
```

### Dans un useEffect
```typescript
useEffect(() => {
  const loadData = async () => {
    try {
      const data = await fetchData();
      setData(data);
    } catch (error) {
      showToast.error('Erreur de chargement');
    }
  };
  
  loadData();
}, []);
``` 