import { StyleSheet, Text, View } from "react-native";
import { colors, radius, shadow, spacing } from "../theme";

export default function SectionCard({ title, caption, children }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      {caption ? <Text style={styles.caption}>{caption}</Text> : null}
      <View style={styles.content}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: spacing.lg,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.lg,
    backgroundColor: colors.surface,
    ...shadow,
  },
  title: {
    color: colors.primaryDark,
    fontSize: 19,
    fontWeight: "700",
  },
  caption: {
    marginTop: spacing.xs,
    color: colors.textMuted,
    fontSize: 14,
    lineHeight: 20,
  },
  content: {
    marginTop: spacing.lg,
  },
});
