# MMA301 Resources

A collection of learning materials and runnable demonstrations for **MMA301 — Mobile Programming**.

The repository is organized by course slot. Each project inside `demos/` is an independent Expo application with its own dependencies and run commands, so examples from different slots can evolve without affecting one another.

## Repository structure

```text
mma301-resources/
├── demos/
│   └── slot-02-component-lab/   React Native components and navigation
├── .claude/                     Claude Code project settings
├── AGENTS.md                    Coding-agent instructions
├── CLAUDE.md                    Claude Code entry point
├── .gitignore
├── LICENSE
└── README.md
```

Additional demos should follow the same naming convention:

```text
demos/slot-XX-topic-name/
```

## Available demos

| Slot | Demo | Main topics |
| --- | --- | --- |
| 02 | [React Native Component Lab](./demos/slot-02-component-lab/) | Rendering, reconciliation, core components, lists, route parameters, and React Navigation |

## Requirements

- Node.js 22.13 or later
- npm
- Android Studio with Android SDK and an Android Virtual Device, or a physical Android device with Expo Go
- VS Code or another code editor

The projects use the local Expo CLI through `npx`; a global `expo-cli` installation is not required.

## Run a demo

Open a terminal at the repository root and enter the demo directory:

```powershell
cd demos\slot-02-component-lab
npm install
npm start
```

After Expo starts:

- Press `a` to open the app on a running Android emulator.
- Scan the QR code with Expo Go to use a physical Android device.
- Run `npm run android` to start Expo and target Android directly.

For the demo's topics, application structure, presentation flow, and troubleshooting notes, see its [dedicated README](./demos/slot-02-component-lab/README.md).

## Repository conventions

- Keep each slot demo as an independent Expo project.
- Store source code and assets inside the corresponding slot folder.
- Do not commit generated folders such as `node_modules`, `.expo`, `android`, `ios`, or build output.
- Add a dedicated README when introducing a new demo.

## License

This repository is provided for learning and demonstration purposes. See [LICENSE](./LICENSE) for details.
