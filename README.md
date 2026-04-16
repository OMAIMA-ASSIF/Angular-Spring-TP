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
