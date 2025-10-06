# Record Collection Manager

Un gestionnaire de collection de disques en JavaScript permettant de manipuler une base de données d'albums musicaux avec leurs artistes et pistes.

## 📋 Description

Ce projet implémente une fonction JavaScript pour gérer une collection de disques. Il permet d'ajouter, modifier et supprimer des propriétés d'albums (titre, artiste, pistes) de manière dynamique.

## ✨ Caractéristiques

- Ajout et modification de propriétés d'albums
- Gestion dynamique des pistes (tracks)
- Suppression de propriétés avec valeurs vides
- Création automatique de tableaux de pistes si nécessaire
- Structure de données objet pour une organisation claire

## 🚀 Utilisation

### Fonction principale

```javascript
updateRecords(records, id, prop, value)
```

**Paramètres :**
- `records` : L'objet collection de disques
- `id` : L'identifiant de l'album
- `prop` : La propriété à modifier ('albumTitle', 'artist', ou 'tracks')
- `value` : La nouvelle valeur

### Exemples

```javascript
// Ajouter une piste
updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me");

// Modifier un artiste
updateRecords(recordCollection, 1245, "artist", "New Artist");

// Supprimer une propriété (valeur vide)
updateRecords(recordCollection, 2468, "albumTitle", "");
```

## 📁 Structure du projet

```
record-collection-manager/
│
├── script.js          # Fonction de gestion et données
└── README.md          # Documentation
```

## 🎵 Structure des données

Chaque album peut contenir :
- `albumTitle` : Le titre de l'album
- `artist` : Le nom de l'artiste
- `tracks` : Un tableau de pistes

## 🛠️ Technologies utilisées

- JavaScript (ES6)
- Node.js (pour l'exécution)

## 💡 Logique de la fonction

1. **Valeur vide** : Supprime la propriété
2. **Propriété non-tracks** : Met à jour la valeur
3. **Tracks inexistant** : Crée un tableau vide
4. **Ajout de track** : Ajoute la piste au tableau

## 📝 Licence

Ce projet est libre d'utilisation pour des fins éducatives et de démonstration.

## 👤 Auteur

Suzanna J. - [@SpyJau](https://github.com/SpyJau)

---

⭐ N'hésitez pas à mettre une étoile si ce projet vous a été utile !
```

**Note :** 
- Assurez-vous de nommer votre fichier `script.js` pour correspondre au README
- Vous pouvez tester le code avec Node.js en exécutant : `node script.js`
