# 🚀 Guide Complet de Déploiement sur Vercel

## **Étape 1: Préparer votre ordinateur**

### A. Installer Node.js
1. Allez sur [nodejs.org](https://nodejs.org)
2. Téléchargez la version **LTS (Long Term Support)**
3. Installez en cliquant sur "Next" jusqu'au bout
4. Redémarrez votre ordinateur

### B. Vérifier l'installation
Ouvrez PowerShell et tapez:
```powershell
node --version
npm --version
```
Vous devriez voir les numéros de version (ex: v18.0.0)

---

## **Étape 2: Installer Vercel CLI**

Ouvrez PowerShell **en tant qu'administrateur** et tapez:
```powershell
npm install -g vercel
```

Vérifiez l'installation:
```powershell
vercel --version
```

---

## **Étape 3: Créer un compte Vercel**

1. Allez sur [vercel.com](https://vercel.com)
2. Cliquez sur **"Sign Up"** (en haut à droite)
3. Choisissez **"Continue with GitHub"** ou **"Continue with Email"**
4. Remplissez votre email et créez un mot de passe
5. Vérifiez votre email (regardez dans les spam si nécessaire)

---

## **Étape 4: Déployer votre site (Méthode 1 - CLI)**

### A. Ouvrir le terminal dans VS Code
1. Ouvrez VS Code
2. Ouvrez le dossier **can** (File → Open Folder)
3. Appuyez sur **Ctrl + `** pour ouvrir le terminal
4. Vérifiez que vous êtes dans `c:\Users\User\Desktop\can`

### B. Lancer le déploiement
Tapez dans le terminal:
```powershell
vercel
```

### C. Répondre aux questions
- **"Set up and deploy?"** → Tapez `y` (yes)
- **"Which scope should we deploy to?"** → Sélectionnez votre compte
- **"Link to existing project?"** → Tapez `n` (no)
- **"What's your project's name?"** → Tapez `canim` (ou votre nom)
- **"In which directory is your code located?"** → Appuyez sur Enter (.)
- **"Want to modify vercel.json?"** → Tapez `n` (no)

### D. Attendre le déploiement
- Vercel va télécharger et héberger votre site
- Vous verrez une **URL** ressemblant à: `https://canim.vercel.app`
- Cliquez dessus pour voir votre site en live! 🎉

---

## **Étape 5: Déployer votre site (Méthode 2 - GitHub)**

### A. Créer un compte GitHub
1. Allez sur [github.com](https://github.com)
2. Cliquez sur **"Sign up"**
3. Créez un compte avec votre email

### B. Créer un repository
1. Allez sur [github.com/new](https://github.com/new)
2. **Repository name**: tapez `canim`
3. **Description** (optionnel): "Anniversary Website"
4. Choisissez **"Public"** (pour que Vercel puisse le voir)
5. Cliquez **"Create repository"**

### C. Télécharger votre code sur GitHub
Ouvrez PowerShell dans votre dossier **can** et tapez:

```powershell
# Initialiser git
git init

# Ajouter tous les fichiers
git add .

# Créer un commit
git commit -m "Initial commit - Anniversary website"

# Ajouter le repository GitHub (remplacez USERNAME par votre nom GitHub)
git remote add origin https://github.com/USERNAME/canim.git

# Envoyer le code
git branch -M main
git push -u origin main
```

### D. Connecter Vercel à GitHub
1. Allez sur [vercel.com/dashboard](https://vercel.com/dashboard)
2. Cliquez sur **"+ Add New"** → **"Project"**
3. Cliquez sur **"Import Project"** → **"Import Git Repository"**
4. Tapez: `USERNAME/canim` (votre GitHub)
5. Cliquez sur votre repository
6. Cliquez **"Deploy"**
7. Attendez quelques secondes... et c'est fait! 🎉

---

## **Étape 6: Ajouter vos photos**

### Important: Les photos doivent être dans le même dossier

1. Placez vos photos dans `c:\Users\User\Desktop\can\`
2. Nommez-les: `photo1.jpg`, `photo2.jpg`, etc.
3. Redéployez:

**Méthode CLI:**
```powershell
vercel --prod
```

**Méthode GitHub:**
```powershell
git add .
git commit -m "Add anniversary photos"
git push
```

Vercel redéploiera automatiquement! ⚡

---

## **Étape 7: Votre domaine personnalisé (Optionnel)**

### Ajouter un domaine personnalisé
1. Allez sur [vercel.com/dashboard](https://vercel.com/dashboard)
2. Cliquez sur votre projet **canim**
3. Allez sur l'onglet **"Settings"**
4. Cliquez sur **"Domains"**
5. Tapez votre domaine (ex: `monanniversaire.com`)
6. Suivez les instructions

---

## **Troubleshooting (Dépannage)**

### ❌ Erreur: "vercel is not recognized"
**Solution:**
```powershell
npm install -g vercel
# Redémarrez PowerShell en tant qu'administrateur
```

### ❌ Les photos ne s'affichent pas
**Solution:**
- Vérifiez que les photos sont nommées correctement (`photo1.jpg`, `photo2.jpg`, etc.)
- Vérifiez qu'elles sont dans le même dossier que `canim.html`
- Redéployez avec: `vercel --prod`

### ❌ Le site s'affiche blanc ou vide
**Solution:**
1. Ouvrez les DevTools (F12)
2. Allez sur l'onglet **"Console"**
3. Cherchez les messages d'erreur rouges
4. Vérifiez que `canim.css` et `canim.js` existent

### ❌ Les animations ne fonctionnent pas
**Solution:**
- Videz le cache du navigateur (Ctrl + Shift + Delete)
- Attendez 5-10 minutes que Vercel redéploie
- Rafraîchissez la page (Ctrl + F5)

---

## **Vérifier que tout fonctionne**

1. ✅ Allez sur votre URL Vercel
2. ✅ Cliquez sur l'enveloppe - elle doit s'ouvrir
3. ✅ Les photos doivent s'afficher
4. ✅ Les animations doivent fonctionner
5. ✅ Les confettis doivent tomber

**Si tout marche → Félicitations! 🎉**

---

## **Ressources utiles**

- **Vercel Docs**: https://vercel.com/docs
- **GitHub Docs**: https://docs.github.com
- **Node.js**: https://nodejs.org/docs
- **Git**: https://git-scm.com/doc

---

## **Questions courantes**

**Q: C'est gratuit?**
A: Oui! Vercel est gratuit pour les projets statiques comme le vôtre.

**Q: Mon site sera-t-il rapide?**
A: Très rapide! Vercel est optimisé pour la vitesse.

**Q: Puis-je modifier mon site après le déploiement?**
A: Oui! Modifiez les fichiers et redéployez.

**Q: Les personnes pourront-elles voir mon site?**
A: Oui! C'est un site public sur Internet.

---

**Besoin d'aide? Contactez Vercel Support sur vercel.com/support** 🚀
