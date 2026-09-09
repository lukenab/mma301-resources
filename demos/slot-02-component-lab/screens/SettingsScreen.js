import { useState } from "react";
import { StyleSheet, Switch, Text, View } from "react-native";
import SectionCard from "../components/SectionCard";
import { colors, spacing } from "../theme";

export default function SettingsScreen() {
  const [presentationMode, setPresentationMode] = useState(true);

  return (
    <View style={styles.screen}>
      <SectionCard title="Presentation mode">
        <View style={styles.row}>
          <View style={styles.rowText}>
            <Text style={styles.label}>Keep demo labels visible</Text>
            <Text style={styles.value}>{presentationMode ? "Enabled" : "Disabled"}</Text>
          </View>
          <Switch
            accessibilityLabel="Presentation mode"
            onValueChange={setPresentationMode}
            trackColor={{ false: colors.border, true: colors.primarySoft }}
            thumbColor={presentationMode ? colors.primary : colors.textMuted}
            value={presentationMode}
          />
        </View>
      </SectionCard>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    gap: spacing.lg,
    padding: spacing.lg,
    backgroundColor: colors.background,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  rowText: {
    flex: 1,
    marginRight: spacing.lg,
  },
  label: {
    color: colors.text,
    fontSize: 16,
    fontWeight: "600",
  },
  value: {
    marginTop: spacing.xs,
    color: colors.textMuted,
  },
});
