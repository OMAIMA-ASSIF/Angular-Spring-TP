# Rapport de TP : Application de Gestion de Produits (Fullstack Angular - Spring Boot)

## Présentation du Projet
Ce projet consiste en la réalisation d'une application web complète pour la gestion de produits. L'architecture repose sur un backend **Spring Boot** sécurisé avec **Spring Security** et un frontend moderne en **Angular**.

## Architecture Technique

### Backend (Spring Boot)
- **Framework** : Spring Boot 3.5.11
- **Gestion des données** : 
    - **Spring Data JPA** pour la persistance.
    - **H2 Database** (base de données en mémoire pour le développement).
- **Sécurité** : 
    - **Spring Security 6** pour la protection des ressources.
    - Configuration personnalisée pour gérer le **CORS** (permettant la communication avec Angular).
- **Web API** :
    - `ProductRestApiController` : Expose une API REST (`/products`) pour les opérations CRUD.
    - `ProductController` : Controleur traditionnel Spring MVC utilisant **Thymeleaf** pour le rendu des vues côté serveur.

### Frontend (Angular)
- **Framework** : Angular 17+
- **Composants Standalone** : Utilisation de la nouvelle architecture standalone sans modules.
- **Service** : `ProductService` utilisant `HttpClient` pour consommer l'API REST du backend.
- **Routage** : Configuration des routes pour la navigation entre l'accueil et la liste des produits.
- **Design** : Intégration de **Bootstrap 5** et **Bootstrap Icons** pour une interface responsive et moderne.

## Fonctionnalités Implémentées
1.  **Affichage des Produits** : Liste détaillée incluant l'ID, le nom, le prix, la quantité et l'état de sélection.
2.  **Opérations CRUD** :
    - Récupération de tous les produits via l'API.
    - Suppression d'un produit (avec confirmation).
3.  **Gestion du CORS** : Configuration explicite du backend pour autoriser les requêtes provenant de `http://localhost:4200`.
4.  **Sécurité** :
    - Désactivation du CSRF (pour simplifier les tests REST).
    - Accès libre configuré pour les tests initiaux via `anyRequest().permitAll()`.
5.  **Populage Automatique** : Utilisation d'un `CommandLineRunner` pour insérer des données de test au démarrage du serveur.

## Structure du Code Source

### Backend
- `net.omaima.springmvcspringsecurity.entities` : Contient l'entité JPA `Product` avec annotations Lombok.
- `net.omaima.springmvcspringsecurity.repository` : Interface `ProductRepository` étendant `JpaRepository`.
- `net.omaima.springmvcspringsecurity.security` : Configuration globale de la sécurité (`SecurityConfig`).
- `net.omaima.springmvcspringsecurity.web` : Contrôleurs REST et MVC.

### Frontend
- `src/app/services` : Contient le service de gestion des données.
- `src/app/product` : Composant gérant l'affichage et la logique des produits.
- `src/app/app.routes.ts` : Définition de la navigation.

## Installation et Lancement

### Lancer le Backend
1. Naviguer dans le dossier `SPRING-MVC-Spring-Security`.
2. Lancer la commande : `mvn spring-boot:run`.
3. L'API est accessible sur `http://localhost:8084`.

### Lancer le Frontend
1. Naviguer dans le dossier `product-app`.
2. Installer les dépendances : `npm install`.
3. Lancer l'application : `ng serve`.
4. L'interface est accessible sur `http://localhost:4200`.

---
*Réalisé dans le cadre du module GLSID S4 - Développement Web Fullstack.*
=======
# ProductApp

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.1.4.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
>>>>>>> f02377202dcd10c8c5f7192d16adcc2e5b47445a
