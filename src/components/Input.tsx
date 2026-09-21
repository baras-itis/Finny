import { useState } from "react";
import { KeyboardTypeOptions, StyleSheet, TextInput } from "react-native";

interface InputFormProps {
  value: string;
  onChangeText: (text: string) => void;
  securityCheck: boolean;
  placeholder: string;
  keyboardType: KeyboardTypeOptions;
}

export function InputForm({ value, onChangeText, ...props }: InputFormProps) {
  const [focused, setFocused] = useState<boolean>(false);
  return (
    <TextInput
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      value={value}
      onChangeText={onChangeText}
      placeholder={props.placeholder}
      secureTextEntry={props.securityCheck}
      keyboardType={props.keyboardType}
      style={[styles.input, focused && styles.inputFocused]}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: "gray",
    color: "white",
    width: "80%",
    alignSelf: "center",
    paddingHorizontal: 20,
    borderRadius: 20,
    height: 68,
  },
  inputFocused: {
    backgroundColor: "black",
  },
});
