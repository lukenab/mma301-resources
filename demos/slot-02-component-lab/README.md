# MMA301 Slot 2 - React Native Component Lab

## Topics

- React Native rendering and reconciliation
- Core Components: `View`, `Text`, `Image`, `Button`, `Pressable`, and `TextInput`
- Scrollable content with `ScrollView` and `FlatList`
- Controlled input and `KeyboardAvoidingView`
- React Navigation with Native Stack, Bottom Tabs, and Drawer
- Route parameters and nested navigators

## Technology

- Expo SDK 57
- React Native 0.86
- React 19
- React Navigation 7

## Application structure

```text
Slot2Demo/
├── assets/                     Static application images
├── components/
│   └── SectionCard.js          Reusable content container
├── navigation/
│   └── AppNavigator.js         Drawer, Tabs, and Stack configuration
├── screens/
│   ├── ReconciliationScreen.js Rendering and state demonstration
│   ├── ExamplesScreen.js       Core Component examples
│   ├── ComponentListScreen.js  FlatList and navigation source
│   ├── DetailsScreen.js        Stack destination and route parameters
│   └── SettingsScreen.js       Drawer destination and Switch example
├── App.js                      Application root
├── theme.js                    Shared colors, spacing, and styles
└── package.json                Scripts and dependencies
```

## Navigation structure

```text
Drawer Navigator
├── Component Lab
│   └── Bottom Tab Navigator
│       ├── Rendering
│       ├── Components
│       └── Lists
│           └── Native Stack Navigator
│               ├── Component List
│               └── Details
└── Settings
```

## Prerequisites

Install the following tools before running the project:

- Node.js 22.13 or later
- npm
- Android Studio with Android SDK and an Android Virtual Device
- VS Code or another code editor

The project uses the local Expo CLI through `npx`. A global `expo-cli` installation is not required.


## Run on Android Emulator

1. Open Android Studio.
2. Open **Device Manager** and start an Android Virtual Device.
3. Open the project folder in VS Code.
4. Start the Expo development server:

```powershell
npm start
```

5. Press `a` in the terminal to open the application on Android.

You can also start Expo and open Android with one command:

```powershell
npm run android
```

## Demo flow

1. Open **Rendering** and press **Increase count**.
2. Press **Reset** to restore the initial state.
3. Open **Components** and test the standard Button and custom Pressable.
4. Enter a name in TextInput and observe the controlled output.
5. Open **Lists** and scroll through the FlatList.
6. Select a component to open the Details screen.
7. Use the Back button to demonstrate Stack Navigation.
8. Switch between the bottom tabs.
9. Open the Drawer and select **Settings**.

## Available scripts

| Command | Purpose |
|---|---|
| `npm start` | Start the Expo development server |
| `npm run android` | Start Expo and open the Android application |
| `npm run ios` | Start Expo and open the iOS application on macOS |
| `npm run web` | Start the web version |

## Troubleshooting

### Metro uses an old cache

Stop the server with `Ctrl+C`, then run:

```powershell
npx expo start --clear
```

### No Android device found

- Confirm that the emulator has completed its startup process.
- Run `adb devices` and check that the emulator appears as `device`.
- Restart the Android Virtual Device if it appears as `offline`.

### Dependency versions do not match Expo

```powershell
npx expo install --fix
```
