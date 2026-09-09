import { StyleSheet, Text, View } from "react-native";
import { colors, radius, spacing } from "../theme";

export default function DetailsScreen({ route }) {
  const { item } = route.params;

  return (
    <View style={styles.screen}>
      <View style={styles.hero}>
        <Text style={styles.category}>{item.category.toUpperCase()}</Text>
        <Text style={styles.heading}>{item.name}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    gap: spacing.xl,
    padding: spacing.lg,
    backgroundColor: colors.background,
  },
  hero: {
    padding: spacing.xl,
    borderRadius: radius.lg,
    backgroundColor: colors.primaryDark,
  },
  category: {
    color: colors.primarySoft,
    fontSize: 12,
    fontWeight: "800",
    letterSpacing: 1.3,
  },
  heading: {
    marginTop: spacing.sm,
    color: colors.surface,
    fontSize: 32,
    fontWeight: "800",
  },
  description: {
    marginTop: spacing.md,
    color: colors.primarySoft,
    fontSize: 16,
    lineHeight: 24,
  },
});
