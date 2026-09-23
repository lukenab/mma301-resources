import AsyncStorage from "@react-native-async-storage/async-storage";
const NOTES_KEY = "@my_daily_notes";
export const getNotes = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(NOTES_KEY);
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (e) {
    console.error("Error reading notes:", e);
    return [];
  }
};
export const saveNotes = async (notes) => {
  try {
    const jsonValue = JSON.stringify(notes);
    await AsyncStorage.setItem(NOTES_KEY, jsonValue);
  } catch (e) {
    console.error("Error saving notes:", e);
  }
};
// Hàm tiện ích để tạo ID duy nhất
export const generateUniqueId = () => {
  return Date.now().toString(36) + Math.random().toString(36).substring(2);
};
