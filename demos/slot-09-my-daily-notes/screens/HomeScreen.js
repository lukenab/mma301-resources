import { useState, useEffect, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useTheme } from "../contexts/ThemeContext";
import { getNotes, saveNotes } from "../services/storageService";
import { Ionicons } from "@expo/vector-icons"; // Để dùng icon
import NoteItem from "../components/NoteItem"; // Sẽ tạo ở bước tiếp theo
function HomeScreen({ navigation }) {
  const { theme, isDarkMode, toggleTheme } = useTheme();
  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const loadNotes = useCallback(async () => {
    setIsLoading(true);
    const storedNotes = await getNotes();
    setNotes(storedNotes);
    setIsLoading(false);
  }, []);
  useEffect(() => {
    loadNotes();
    // Lắng nghe sự kiện focus để load lại ghi chú khi quay về màn hình này
    const unsubscribe = navigation.addListener("focus", () => {
      loadNotes();
    });
    return unsubscribe;
  }, [navigation, loadNotes]);
  const handleDeleteNote = useCallback(
    async (id) => {
      Alert.alert(
        "Delete Note",
        "Are you sure you want to delete this note?",
        [
          { text: "Cancel", style: "cancel" },
          {
            text: "Delete",
            onPress: async () => {
              const updatedNotes = notes.filter((note) => note.id !== id);
              setNotes(updatedNotes);
              await saveNotes(updatedNotes);
            },
            style: "destructive",
          },
        ],
        { cancelable: true },
      );
    },
    [notes],
  );
  const renderNoteItem = useCallback(
    ({ item }) => (
      <NoteItem
        note={item}
        onPress={() => navigation.navigate("NoteDetail", { noteId: item.id })}
        onDelete={() => handleDeleteNote(item.id)}
      />
    ),
    [navigation, handleDeleteNote],
  ); // useCallback cho renderItem
  // Đặt nút thêm ghi chú và toggle theme trên header
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={{ flexDirection: "row", marginRight: 15 }}>
          <TouchableOpacity onPress={toggleTheme} style={{ marginRight: 15 }}>
            <Ionicons
              name={isDarkMode ? "sunny" : "moon"}
              size={24}
              color={theme.headerText}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("NoteDetail", { noteId: null })}
          >
            <Ionicons name="add-circle" size={24} color={theme.headerText} />
          </TouchableOpacity>
        </View>
      ),
      headerStyle: {
        backgroundColor: theme.headerBackground,
      },
      headerTintColor: theme.headerText,
    });
  }, [navigation, theme, isDarkMode, toggleTheme]);
  if (isLoading) {
    return (
      <View style={[styles.container, { backgroundColor: theme.background }]}>
        <Text style={{ color: theme.text }}>Loading notes...</Text>
      </View>
    );
  }
  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      {notes.length === 0 ? (
        <Text style={{ color: theme.text }}>No notes yet. Add one!</Text>
      ) : (
        <FlatList
          data={notes}
          renderItem={renderNoteItem}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.listContentContainer}
        />
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContentContainer: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
});
export default HomeScreen;
