
import { TextInput, TextInputProps } from "react-native";
import { inputStyles } from "./Input.style";
import { useTheme } from "@/context/ThemeContext";

export const Input = (props: TextInputProps) => {
  const { theme } = useTheme();
  const styles = inputStyles(theme);

  return <TextInput {...props} style={styles.input} />;
};
