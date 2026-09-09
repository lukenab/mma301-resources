import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { colors, radius, shadow, spacing } from "../theme";

const COMPONENTS = [
  { id: "view", name: "View", category: "Layout", description: "A container that supports layout, styling, touch handling, and accessibility." },
  { id: "text", name: "Text", category: "Content", description: "Displays text and supports nesting, styling, and touch events." },
  { id: "image", name: "Image", category: "Media", description: "Displays local images, static resources, or images from a network URI." },
  { id: "text-input", name: "TextInput", category: "Input", description: "Receives keyboard input and can be controlled through React state." },
  { id: "scroll-view", name: "ScrollView", category: "Scrolling", description: "Renders all children inside a scrollable container." },
  { id: "flat-list", name: "FlatList", category: "Lists", description: "Efficiently renders changing or long lists from an array of data." },
  { id: "button", name: "Button", category: "Interaction", description: "Provides a standard platform button for a simple action." },
  { id: "pressable", name: "Pressable", category: "Interaction", description: "Detects stages of a press and supports custom visual feedback." },
];

export default function ComponentListScreen({ navigation }) {
  return (
    <FlatList
      contentContainerStyle={styles.content}
      data={COMPONENTS}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={
        <View style={styles.header}>
          <Text style={styles.heading}>Core Components</Text>
        </View>
      }
      renderItem={({ item, index }) => (
        <Pressable
          accessibilityHint="Opens component details"
          accessibilityRole="button"
          onPress={() => navigation.navigate("Details", { item })}
          style={({ pressed }) => [styles.row, pressed && styles.rowPressed]}
        >
          <View style={styles.indexBadge}>
            <Text style={styles.indexText}>{String(index + 1).padStart(2, "0")}</Text>
          </View>
          <View style={styles.rowContent}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.category}>{item.category}</Text>
          </View>
          <Text style={styles.open}>Open</Text>
        </Pressable>
      )}
      showsVerticalScrollIndicator={false}
      style={styles.screen}
    />
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    padding: spacing.lg,
    paddingBottom: spacing.xxl,
  },
  header: {
    marginBottom: spacing.lg,
    paddingVertical: spacing.sm,
  },
  heading: {
    color: colors.text,
    fontSize: 28,
    fontWeight: "700",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: spacing.md,
    padding: spacing.lg,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.lg,
    backgroundColor: colors.surface,
    ...shadow,
  },
  rowPressed: {
    opacity: 0.72,
  },
  indexBadge: {
    width: 42,
    height: 42,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 21,
    backgroundColor: colors.primarySoft,
  },
  indexText: {
    color: colors.primaryDark,
    fontWeight: "800",
  },
  rowContent: {
    flex: 1,
    marginLeft: spacing.md,
  },
  name: {
    color: colors.text,
    fontSize: 17,
    fontWeight: "700",
  },
  category: {
    marginTop: 2,
    color: colors.textMuted,
    fontSize: 13,
  },
  open: {
    color: colors.primary,
    fontWeight: "700",
  },
});
