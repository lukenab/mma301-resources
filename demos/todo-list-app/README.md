# To-do List App

A task management demo for the MMA301 course, built with React Native and Expo. The project demonstrates state management, reusable components, and nested Stack, Bottom Tabs, and Drawer navigators using React Navigation.

## Features

- Add tasks; whitespace-only input is ignored.
- Tap a task to view its details, or tap **X** to delete it.
- Switch between the **Tasks** and **About** tabs.
- Open the Drawer menu to access **Home** or **Settings**.

Tasks are stored in `HomeScreen` state without a database or persistent storage. Reloading the app clears the list. Settings is currently a placeholder screen.

## Technologies

| Component | Project version |
| --- | --- |
| Expo | SDK 57 (`~57.0.21`) |
| React | `19.2.3` |
| React Native | `0.86.3` |
| React Navigation | 7 |
| Reanimated | `4.5.1` |
| Worklets | `0.10.1` |

Declared versions are listed in [`package.json`](./package.json); `package-lock.json` locks the installed dependency versions.

## Prerequisites and Installation

Install **Node.js 22.13 or later**, with npm. SDK 57 supports **Android 7+** and **iOS 16.4+**; see the [Expo SDK 57 requirements](https://docs.expo.dev/versions/v57.0.0/).

From the repository root:

```bash
cd demos/todo-list-app
npm ci
```

If your terminal is already in `demos`, use `cd todo-list-app`. Run all subsequent commands from the `todo-list-app` directory.

No backend setup or `.env` file is required. Expo CLI is included with the `expo` dependency and runs through `npx expo`; a global `expo-cli` installation is unnecessary.

## Running on Android

### Physical Device

1. Install a version of **Expo Go** compatible with SDK 57 on your phone.
2. Connect your phone and computer to the same Wi-Fi network.
3. Run:

   ```bash
   npm start
   ```

4. Open Expo Go, select its QR scanner, and scan the code displayed in the terminal.

### Android Emulator

1. Install Android Studio, the Android SDK, and Android Emulator.
2. Create and start a virtual device in **Device Manager**.
3. Run:

   ```bash
   npm run android
   ```

Expo CLI will open the app on the Android device. Follow any prompts to install Expo Go. If `npm start` is already running, press **a** instead of starting another server.

See the [Android Emulator setup guide](https://docs.expo.dev/workflow/android-studio-emulator/) if your computer does not detect the virtual device. LDPlayer is not required for this project.

## Running on iOS

### Physical iPhone

1. Install a version of **Expo Go** compatible with SDK 57 from the App Store.
2. Connect your iPhone and computer to the same Wi-Fi network.
3. Run:

   ```bash
   npm start
   ```

4. Use the iPhone **Camera** to scan the QR code in the terminal, then tap the link to open it in Expo Go.
5. Allow Expo Go to access the **Local Network** if prompted by iOS.

This workflow works with computers running Windows, Linux, or macOS. Xcode is not required to open the project in Expo Go on an iPhone.

### iOS Simulator on macOS

1. Install Xcode and an iOS Simulator runtime, then complete Xcode's initial setup.
2. Open Simulator and run:

   ```bash
   npm run ios
   ```

If the server is already running through `npm start`, press **i** to open Simulator. iOS Simulator is unavailable on Windows/Linux; use a physical iPhone as described above. See the [iOS Simulator setup guide](https://docs.expo.dev/workflow/ios-simulator/).

## Running on Web

`package.json` currently includes a `web` script but does not declare the required web dependencies. Install them once before running the web app:

```bash
npx expo install react-dom react-native-web @expo/metro-runtime
npm run web
```

The installation updates `package.json` and `package-lock.json` with SDK-compatible versions. The app should open in your browser; if it does not, visit the web address displayed in the terminal. If the server is already running, press **w**.

To export the web app to the `dist` directory:

```bash
npx expo export --platform web
```

This generates the output files without deploying them to a hosting service. See the [Expo web guide](https://docs.expo.dev/workflow/web/).

## Common Commands

| Command | Purpose |
| --- | --- |
| `npm start` | Start the development server and display a QR code |
| `npm run android` | Start the server and open the app on Android |
| `npm run ios` | Start the server and open iOS Simulator on macOS |
| `npm run web` | Start the web app after installing web dependencies |
| `npx expo start --clear` | Restart with the Metro cache cleared |

Keep the terminal running while using the app; press **Ctrl+C** to stop it. The Android/iOS scripts run the app through Expo Go for development and do not generate APK/IPA files. Refer to the [Expo CLI documentation](https://docs.expo.dev/more/expo-cli/).

## Troubleshooting

### Phone Cannot Connect to the Server

Check that both devices use the same Wi-Fi network, that Expo Go has Local Network permission on iPhone, and that your computer's firewall allows the connection. If the network blocks communication between devices, stop the server and try:

```bash
npx expo start --tunnel
```

Follow any CLI prompts to install the tunnel tooling, then scan the new QR code. Tunneling requires Internet access and is usually slower than LAN. See the [device connection guide](https://docs.expo.dev/get-started/start-developing/).

### SDK, Reanimated, or Worklets Version Errors

Make sure Expo Go supports SDK 57. Check dependencies from the project directory:

```bash
npx expo install --check
npx expo-doctor
```

If incompatible versions are reported, align them and restart:

```bash
npx expo install --fix
npx expo start --clear
```

Close and reopen the app on your phone. Reanimated requires Worklets; use versions compatible with your Expo SDK as described in the [SDK 57 Reanimated documentation](https://docs.expo.dev/versions/v57.0.0/sdk/reanimated/).

### Missing Modules on Web

Install the dependencies listed under **Running on Web**, then run:

```bash
npm run web -- --clear
```

### App Reports an Error After Bundling

Successful bundling does not guarantee that every screen works at runtime. Inspect the error message and stack trace on the device: import names, component references, and route names must match. This project uses the `Details` route for task details; its configuration is in [`navigation/AppNavigator.js`](./navigation/AppNavigator.js).

## Project Structure

```text
todo-list-app/
├── App.js                       # Root component rendering AppNavigator
├── index.js                     # Registers the root component with Expo
├── app.json                     # App configuration
├── package.json                 # Dependencies and scripts
├── package-lock.json            # Locked dependency versions
├── assets/                      # Icons and images
├── components/
│   ├── CustomDrawerContent.js    # Drawer menu content
│   └── TodoItem.js               # Individual task row
├── navigation/
│   └── AppNavigator.js           # Drawer → Tabs → Stack
└── screens/
    ├── HomeScreen.js             # Task list, addition, and deletion
    ├── DetailsScreen.js          # Selected task content
    ├── InfoScreen.js             # About screen
    └── SettingScreen.js          # Placeholder Settings screen
```

## Manual Testing

After opening the app on the platform you want to test:

1. Add two tasks and verify that both appear.
2. Try adding an empty task; the list should remain unchanged.
3. Tap a task, check its content on **Task Details**, then go back.
4. Tap **X** and verify that the task is deleted.
5. Switch to the **About** tab, open the Drawer, visit **Settings**, then return to **Home**.
6. Reload the app to confirm its temporary storage behavior: the task list should be empty.
