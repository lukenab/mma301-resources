import { useState, useEffect, useCallback } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Alert,
  TouchableOpacity,
} from "react-native";
import { useTheme } from "../contexts/ThemeContext";
import {
  getNotes,
  saveNotes,
  generateUniqueId,
} from "../services/storageService";
import { Ionicons } from "@expo/vector-icons";
function NoteDetailScreen({ navigation, route }) {
  const { theme } = useTheme();
  const noteId = route.params?.noteId;
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [originalNote, setOriginalNote] = useState(null);
  // Load note if editing
  useEffect(() => {
    if (noteId) {
      const loadExistingNote = async () => {
        const notes = await getNotes();
        const existingNote = notes.find((n) => n.id === noteId);
        if (existingNote) {
          setTitle(existingNote.title);
          setContent(existingNote.content);
          setOriginalNote(existingNote);
        } else {
          // Note not found, navigate back
          Alert.alert("Error", "Note not found.", [
            { text: "OK", onPress: () => navigation.goBack() },
          ]);
        }
      };
      loadExistingNote();
    }
  }, [noteId, navigation]);
  const handleSaveNote = useCallback(async () => {
    if (!title.trim() && !content.trim()) {
      Alert.alert(
        "Empty Note",
        "Please enter a title or content for your note.",
      );
      return;
    }
    const newNote = {
      id: noteId || generateUniqueId(),
      title: title.trim(),
      content: content.trim(),
      timestamp: Date.now(),
    };
    const allNotes = await getNotes();
    let updatedNotes;
    if (noteId) {
      // Editing existing note
      updatedNotes = allNotes.map((n) => (n.id === noteId ? newNote : n));
    } else {
      // Adding new note
      updatedNotes = [newNote, ...allNotes]; // Thêm ghi chú mới lên đầu.
    }
    await saveNotes(updatedNotes);
    navigation.goBack();
  }, [title, content, noteId, navigation]);
  const handleDiscardChanges = useCallback(() => {
    if (
      noteId &&
      originalNote &&
      (title !== originalNote.title || content !== originalNote.content)
    ) {
      Alert.alert(
        "Discard Changes?",
        "You have unsaved changes. Do you want to discard them?",
        [
          { text: "Cancel", style: "cancel" },
          {
            text: "Discard",
            onPress: () => navigation.goBack(),
            style: "destructive",
          },
        ],
      );
    } else if (!noteId && (title.trim() || content.trim())) {
      // New note with content
      Alert.alert(
        "Discard New Note?",
        "You have entered content. Do you want to discard this new note?",
        [
          { text: "Cancel", style: "cancel" },
          {
            text: "Discard",
            onPress: () => navigation.goBack(),
            style: "destructive",
          },
        ],
      );
    } else {
      navigation.goBack();
    }
  }, [title, content, noteId, originalNote, navigation]);
  // Cập nhật header Options
  useEffect(() => {
    navigation.setOptions({
      title: noteId ? "Edit Note" : "New Note",
      headerStyle: {
        backgroundColor: theme.headerBackground,
      },
      headerTintColor: theme.headerText,
      headerLeft: () => (
        <TouchableOpacity
          onPress={handleDiscardChanges}
          style={{
            marginLeft: 15,
          }}
        >
          <Ionicons name="arrow-back" size={24} color={theme.headerText} />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity
          onPress={handleSaveNote}
          style={{
            marginRight: 15,
          }}
        >
          <Ionicons
            name="checkmark-circle"
            size={24}
            color={theme.headerText}
          />
        </TouchableOpacity>
      ),
    });
  }, [navigation, noteId, theme, handleSaveNote, handleDiscardChanges]);
  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <TextInput
        style={[
          styles.titleInput,
          { color: theme.text, borderBottomColor: theme.text },
        ]}
        placeholder="Title"
        placeholderTextColor={theme.text + "88"} // Thêm độ trong suốt
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={[
          styles.contentInput,
          { color: theme.text, textAlignVertical: "top" },
        ]}
        placeholder="Content"
        placeholderTextColor={theme.text + "88"}
        multiline
        value={content}
        onChangeText={setContent}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  titleInput: {
    fontSize: 24,
    fontWeight: "bold",
    paddingVertical: 10,
    borderBottomWidth: 1,
    marginBottom: 20,
  },
  contentInput: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 10,
  },
});
export default NoteDetailScreen;
