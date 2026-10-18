import { useState } from "react";
import {
  Button,
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import SectionCard from "../components/SectionCard";
import { colors, radius, spacing } from "../theme";

export default function ExamplesScreen() {
  const [name, setName] = useState("");
  const [pressCount, setPressCount] = useState(0);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.screen}
    >
      <ScrollView
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <SectionCard title="View and Text">
          <View style={styles.examplePanel}>
            <Text style={styles.panelTitle}>React Native</Text>
            <Text style={styles.panelText}>Build native interfaces with reusable components.</Text>
          </View>
        </SectionCard>

        <SectionCard title="Image">
          <View style={styles.centered}>
            <Image
              accessibilityLabel="Expo application icon"
              source={require("../assets/icon.png")}
              style={styles.logo}
            />
          </View>
        </SectionCard>

        <SectionCard title="Button and Pressable">
          <Button title="Standard button" onPress={() => setPressCount((value) => value + 1)} />
          <Pressable
            accessibilityRole="button"
            onPress={() => setPressCount((value) => value + 1)}
            style={({ pressed }) => [styles.customButton, pressed && styles.customButtonPressed]}
          >
            <Text style={styles.customButtonText}>Custom Pressable</Text>
          </Pressable>
          <Text style={styles.feedback}>Total presses: {pressCount}</Text>
        </SectionCard>

        <SectionCard title="TextInput">
          <TextInput
            accessibilityLabel="Student name"
            autoCapitalize="words"
            onChangeText={setName}
            placeholder="Enter your name"
            placeholderTextColor={colors.textMuted}
            style={styles.input}
            value={name}
          />
          <Text style={styles.greeting}>Hello, {name.trim() || "student"}</Text>
        </SectionCard>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    gap: spacing.lg,
    padding: spacing.lg,
    paddingBottom: spacing.xxl,
  },
  examplePanel: {
    padding: spacing.lg,
    borderRadius: radius.md,
    backgroundColor: colors.primarySoft,
  },
  panelTitle: {
    color: colors.primaryDark,
    fontSize: 21,
    fontWeight: "700",
  },
  panelText: {
    marginTop: spacing.sm,
    color: colors.text,
    lineHeight: 21,
  },
  centered: {
    alignItems: "center",
  },
  logo: {
    width: 92,
    height: 92,
    borderRadius: radius.lg,
  },
  customButton: {
    alignItems: "center",
    marginTop: spacing.md,
    padding: spacing.md,
    borderRadius: radius.md,
    backgroundColor: colors.primaryDark,
  },
  customButtonPressed: {
    opacity: 0.72,
    transform: [{ scale: 0.99 }],
  },
  customButtonText: {
    color: colors.surface,
    fontWeight: "700",
  },
  feedback: {
    marginTop: spacing.md,
    color: colors.textMuted,
    textAlign: "center",
  },
  input: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.md,
    color: colors.text,
    backgroundColor: colors.surface,
    fontSize: 16,
  },
  greeting: {
    marginTop: spacing.md,
    color: colors.primaryDark,
    fontSize: 18,
    fontWeight: "700",
  },
});
