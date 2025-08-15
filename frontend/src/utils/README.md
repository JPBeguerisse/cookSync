# Configuration Axios

Ce dossier contient la configuration centralisée d'axios pour le projet CookSync.

## Fichiers

### `axios.ts`
Configuration principale d'axios avec :
- URL de base configurée
- Timeout de 10 secondes
- Headers par défaut
- Intercepteurs pour le logging et la gestion d'erreurs

## Utilisation

### Import
```typescript
import api from '../utils/axios';
```

### Exemples d'utilisation

#### GET
```typescript
// Récupérer des recettes
const response = await api.get('/api/recipes');
const recipes = response.data;
```

#### POST
```typescript
// Créer un contact
const response = await api.post('/api/contacts', {
  firstName: 'John',
  lastName: 'Doe',
  email: 'john@example.com',
  message: 'Hello!'
});
```

#### PUT
```typescript
// Mettre à jour une recette
const response = await api.put(`/api/recipes/${id}`, {
  name: 'Nouveau nom',
  description: 'Nouvelle description'
});
```

#### DELETE
```typescript
// Supprimer un ingrédient
await api.delete(`/api/ingredients/${id}`);
```

## Gestion des erreurs

Les erreurs sont automatiquement gérées par les intercepteurs :

```typescript
try {
  const response = await api.get('/api/recipes');
  // Traitement de la réponse
} catch (error) {
  // L'erreur est déjà loggée par l'intercepteur
  console.error('Erreur personnalisée:', error.response?.data?.message);
}
```

## Avantages par rapport à fetch

1. **Configuration centralisée** : URL de base, timeout, headers
2. **Intercepteurs** : Logging automatique et gestion d'erreurs
3. **Transformations automatiques** : JSON parsing automatique
4. **Gestion des erreurs** : Plus simple avec `error.response`
5. **Types TypeScript** : Meilleur support des types
6. **Annulation de requêtes** : Possibilité d'annuler les requêtes
7. **Retry automatique** : Possibilité de retry en cas d'échec

## Migration depuis fetch

### Avant (fetch)
```typescript
const response = await fetch(`${process.env.REACT_APP_API_URL}/api/recipes`);
if (!response.ok) {
  throw new Error('Erreur de récupération');
}
const data = await response.json();
```

### Après (axios)
```typescript
const response = await api.get('/api/recipes');
const data = response.data;
``` 