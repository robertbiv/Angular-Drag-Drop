# Angular Drag & Drop Game Collection

An interactive web application showcasing drag-and-drop functionality in Angular using Angular CDK. This project features two classic puzzle games: Tower of Hanoi and a Sliding Puzzle (15-Puzzle).

![Home Page](https://github.com/user-attachments/assets/b3f09b6f-aeee-4561-aa3b-ed2f8585652b)

## 🎮 Features

### Tower of Hanoi
A classic mathematical puzzle game where you move disks between three towers, following these rules:
- Only one disk can be moved at a time
- A disk can only be placed on top of a larger disk
- Goal: Move all disks from Tower 1 to Tower 3

![Tower of Hanoi](https://github.com/user-attachments/assets/7d1ca5ed-6bc1-412a-bce4-2515d1b7d6ed)

### Sliding Puzzle (15-Puzzle)
A sliding tile puzzle game with a 4x4 grid:
- Slide numbered tiles into the empty space
- Goal: Arrange all tiles in numerical order (1-15)
- Features a shuffle button to start a new game

![Sliding Game](https://github.com/user-attachments/assets/8003b6f5-9ce6-48f4-93c1-a9aa4cd19407)

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm (comes with Node.js)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/robertbiv/Angular-Drag-Drop.git
cd Angular-Drag-Drop
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser and navigate to `http://localhost:4200/`

## 🛠️ Technology Stack

- **Angular** (v17.3.0) - Frontend framework
- **Angular CDK** (v17.3.1) - Drag-and-drop functionality
- **TypeScript** (v5.4.2) - Programming language
- **RxJS** (v7.8.0) - Reactive programming

## 📦 Available Scripts

- `npm start` - Run the development server
- `npm run build` - Build the project for production
- `npm test` - Execute unit tests via Karma
- `npm run watch` - Build and watch for changes

## 🏗️ Project Structure

```
src/
├── app/
│   ├── home/              # Home page component
│   ├── navbar/            # Navigation bar component
│   ├── tower-of-hanoi/    # Tower of Hanoi game component
│   ├── sliding-game/      # Sliding puzzle game component
│   ├── app.component.*    # Root component
│   └── app.routes.ts      # Application routing
├── assets/                # Static assets
└── styles.css            # Global styles
```

## 🎯 How to Play

### Tower of Hanoi
1. Navigate to "Tower of Hanoi" from the navigation menu
2. Drag disks from one tower to another
3. Remember: you can only place a smaller disk on top of a larger one
4. Win by moving all disks to Tower 3 in order

### Sliding Puzzle
1. Navigate to "Sliding Game" from the navigation menu
2. Click the "Shuffle" button to start a new game
3. Drag tiles adjacent to the empty space to slide them
4. Arrange all tiles in numerical order (1-15) to win

## 👨‍💻 Author

**Robert Bennethum**

## 📄 License

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.0.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📚 Learn More

To learn more about Angular and the Angular CLI:
- [Angular Documentation](https://angular.io/docs)
- [Angular CLI Overview and Command Reference](https://angular.io/cli)
- [Angular CDK Documentation](https://material.angular.io/cdk/categories)
