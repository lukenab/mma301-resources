# Slot 09 — My Daily Notes

English | [Tiếng Việt](README.vi.md)

A simple note-taking app built with Expo and React Native.

## Features

- Create, edit, and delete notes.
- Save notes locally with AsyncStorage.
- Switch between light and dark themes.

## Requirements

- Node.js 22.13 or newer and npm.
- Android Studio with an Android Emulator, or a phone with Expo Go compatible with SDK 57.

## Installation

Open PowerShell or the VS Code terminal at the repository root:

```bash
cd demos/slot-09-my-daily-notes
npm install
npm start
```

Keep this terminal running while using the app.

## Run on Android Emulator

1. Open Android Studio → **Device Manager**.
2. Create a virtual device if needed, then start it.
3. In the terminal running Expo, press **a** to open the app on the emulator.

## Run on a phone

1. Install Expo Go compatible with SDK 57.
2. Connect the phone and computer to the same Wi-Fi network.
3. Scan the terminal's QR code using Expo Go on Android, or the Camera app on iPhone.

## Use the app

- Tap **+** to add a note, enter a title or content, then tap the **checkmark** to save.
- Tap a note to edit it.
- Tap the **trash** icon and confirm to delete it.
- Tap the **moon/sun** icon to change the theme.

## React Native DevTools

With the app running on the emulator or phone, press **j** in the Expo terminal. No separate `react-devtools` installation is needed.

- **Components:** inspect component props and state.
- **Console:** view logs and errors.
- **Sources:** set breakpoints to follow execution.

For practice, open `screens/NoteDetailScreen.js` in Sources and click a line number inside `handleSaveNote` to set a breakpoint. Save a note on the device to pause there, inspect the variables, then press **Resume** to continue.

DevTools requires a runtime that supports debugging. If it cannot connect, check your Expo Go version. See the [Expo debugging guide](https://docs.expo.dev/debugging/tools/).
