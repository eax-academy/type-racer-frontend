# type-racer-frontend
Type Racer is a competitive, multiplayer typing game where players race by typing a given text as fast and accurately as possible. The goal is to help players improve typing speed and accuracy while creating a fun, real-time experience. Players can race against others in public or private rooms, view leaderboards, and practice alone.

## 🧩 **index.html**

**Purpose:**  
This is the main entry point of the project — the HTML file that defines the structure and layout of the web app.  
All pages (Home, Practice, Multiplayer, Leaderboard, Login, Results) are written as sections inside this single file.

**Contains:**

-   The **header** (navigation bar and logo)
    
-   The **main content area**, where different “views” (sections) appear and disappear
    
-   The **footer**
    
-   Links to CSS and JavaScript files
    

**Student responsibilities:**

-   Add missing HTML elements if needed (extra buttons, placeholders)
    
-   Make sure every section (`.view`) has consistent structure
    
-   Use proper IDs and class names for JS access
    
-   Do **not** add logic or event handlers here — only structure
    

----------

## 🎨 **/styles/main.css**

**Purpose:**  
This file controls the **appearance** of the entire game — fonts, colors, layout, and responsive design.

**Contains:**

-   Base styles (body, header, footer)
    
-   Section visibility control (`.view`, `.hidden`, `.active`)
    
-   Styling for components:
    
    -   Navbar and buttons
        
    -   Typing area
        
    -   Race track progress bars
        
    -   Leaderboard table
        
    -   Stats section (WPM, accuracy, time)
        
-   Color themes and spacing
    

**Student responsibilities:**

-   Style elements to look neat, readable, and user-friendly
    
-   Add hover/active states for buttons
    
-   Add responsive layout for smaller screens
    
-   Use `.hidden` and `.active` to toggle sections
    
-   Optionally implement dark mode or animations
    

----------

## ⚙️ **/scripts/app.js**

**Purpose:**  
This is the **main controller** that initializes the app, manages navigation, and connects other modules.

**Contains (initially):**

-   Code that runs on `DOMContentLoaded`
    
-   Navigation logic (when clicking buttons like “Home,” “Practice,” etc.)
    
-   View switching using `showView()`
    

**Student responsibilities:**

-   Implement button click logic to show/hide views
    
-   Initialize variables that might be needed globally
    
-   Import functions from `ui.js`, `game.js`, and `leaderboard.js` (in later phases)
    
-   Later, coordinate transitions between sections (e.g., after finishing a race → show results)
    

Think of `app.js` as the **“main brain”** that tells other modules what to do and when.

----------

## 🧠 **/scripts/ui.js**

**Purpose:**  
This module focuses entirely on **User Interface control** — showing/hiding views, updating visible text, and handling DOM manipulation.

**Contains:**

-   Helper functions for showing a specific section
    
-   Possible functions to update stats, progress bars, countdowns, etc.
    

**Student responsibilities:**

-   Write small, reusable UI update functions like:
    
    -   `updateWPMDisplay(value)`
        
    -   `updateAccuracyDisplay(value)`
        
    -   `showCountdown(seconds)`
        
-   Use `querySelector` or `getElementById` to manipulate DOM safely
    
-   Avoid logic calculations — this file should only **display** what it’s told
    

Think of `ui.js` as the **“visual output manager.”**

----------

## 🎮 **/scripts/game.js**

**Purpose:**  
This file contains the **core game logic** — everything related to the actual typing race, gameplay flow, and stats.

**Contains:**

-   Placeholder functions: `startPracticeGame()`, `endPracticeGame()`
    
-   Later additions: handling the race text, timer, input comparison, progress calculation
    

**Student responsibilities:**

-   Add event listeners for typing input
    
-   Implement timer logic
-   Compute WPM and accuracy
-   Detect race completion
-   Update UI through helper functions in `ui.js`
    
-   Later: implement multiplayer countdown, track positions, fake opponent simulation
    

Think of `game.js` as the **“engine”** of the game — it processes actions and rules.

----------

## 🏆 **/scripts/leaderboard.js**

**Purpose:**  
This module handles **leaderboard storage and display**, connecting gameplay results to persistent data (like localStorage).

**Contains:**

-   Placeholder for loading leaderboard data
    
-   Functions to render the leaderboard table
    

**Student responsibilities:**

-   Write functions like:
    
    -   `saveResult(playerName, wpm, accuracy)`
        
    -   `loadLeaderboard()`
        
    -   `displayLeaderboardTable()`
        
-   Sort results before displaying
    
-   Implement leaderboard types (Global, Weekly, Room)
    
-   Use `localStorage` for saving and retrieving data
    

Think of `leaderboard.js` as the **“memory and scoreboard system.”**

----------

## 🖼️ **/assets/**

**Purpose:**  
This folder holds all static assets used by the game.

**Contains:**

-   `logo.png`: the game or academy logo
    
-   `placeholder-avatar.png`: avatar images for players
    
-   Later: you can add car icons, sound files, or background images
    

**Student responsibilities:**

-   Replace placeholder images with real visuals
    
-   Optionally add more avatars or track backgrounds
