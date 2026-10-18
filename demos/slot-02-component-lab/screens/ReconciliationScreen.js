import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import SectionCard from "../components/SectionCard";
import { colors, radius, spacing } from "../theme";

const INITIAL_COUNT = 0;

export default function ReconciliationScreen() {
  const [count, setCount] = useState(INITIAL_COUNT);

  const handleIncrease = () => {
    setCount((currentCount) => currentCount + 1);
  };

  const handleReset = () => {
    setCount(INITIAL_COUNT);
  };

  return (
    <View style={styles.screen}>
      <SectionCard title="Counter">
        <Text style={styles.counter}>{count}</Text>

        <View style={styles.actions}>
          <Pressable
            accessibilityRole="button"
            onPress={handleIncrease}
            style={({ pressed }) => [styles.primaryButton, pressed && styles.pressed]}
          >
            <Text style={styles.primaryButtonText}>Increase count</Text>
          </Pressable>
          <Pressable
            accessibilityRole="button"
            onPress={handleReset}
            style={({ pressed }) => [styles.secondaryButton, pressed && styles.pressed]}
          >
            <Text style={styles.secondaryButtonText}>Reset</Text>
          </Pressable>
        </View>
      </SectionCard>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    padding: spacing.lg,
    backgroundColor: colors.background,
  },
  counter: {
    color: colors.primary,
    fontSize: 72,
    fontWeight: "800",
    textAlign: "center",
  },
  actions: {
    flexDirection: "row",
    gap: spacing.md,
    marginTop: spacing.xl,
  },
  primaryButton: {
    flex: 1,
    alignItems: "center",
    padding: spacing.md,
    borderRadius: radius.md,
    backgroundColor: colors.primary,
  },
  primaryButtonText: {
    color: colors.surface,
    fontWeight: "700",
  },
  secondaryButton: {
    alignItems: "center",
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.md,
    backgroundColor: colors.surface,
  },
  secondaryButtonText: {
    color: colors.primaryDark,
    fontWeight: "700",
  },
  pressed: {
    opacity: 0.75,
  },
});
