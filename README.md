# CollabDraw (WIP 👷)

CollabDraw is a real-time collaborative drawing application, similar to Excalidraw, that allows multiple users to work together seamlessly. Built with a modern tech stack, it ensures smooth performance and efficient real-time communication.

## Features

- 🎨 **Real-time Collaboration** – Multiple users can draw and edit simultaneously.
- 🔄 **WebSocket-based Syncing** – Instant updates for a seamless experience.
- 🏗 **Scalable Architecture** – Built with Next.js, TurboRepo, and Express for efficient performance.
- 💾 **PostgreSQL Database** – Reliable storage for user data and drawings.
- ⚡ **Optimized Performance** – TurboRepo ensures efficient monorepo management.

## Tech Stack

- **Frontend:** Next.js (React framework)
- **Backend:** Express.js
- **Database:** PostgreSQL
- **Real-time Communication:** WebSockets
- **Monorepo Management:** TurboRepo

## Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/collabdraw.git
   cd collabdraw
   ```

2. **Install dependencies:**
   ```sh
   pnpm install
   ```
   > Ensure you have `pnpm` installed. You can also use `npm` or `yarn`. [Installation Guide](https://pnpm.io/installation)

3. **Set up environment variables:**
   Create a `.env` file in the root directory and configure the following:
   ```env
   DATABASE_URL=postgresql://user:password@localhost:5432/collabdraw
   WEBSOCKET_PORT=3001
   NEXT_PUBLIC_API_URL=http://localhost:3001
   ```

4. **Run the development server:**
   ```sh
   pnpm dev
   ```

5. **Start the backend server:**
   ```sh
   pnpm server
   ```

## Usage

- Open `http://localhost:3000` in your browser.
- Start drawing and invite collaborators!
- Changes sync in real-time via WebSockets.

## Contributing

Contributions are welcome! Please check out the [Contributing Guidelines](CONTRIBUTING.md) before submitting a pull request.

## License

This project is licensed under the MIT License.

---

🚀 **CollabDraw** – Empowering creativity through real-time collaboration! If you like this project, consider starring it on GitHub!
