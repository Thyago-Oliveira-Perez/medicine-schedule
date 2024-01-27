import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  scroll_view: {
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  text_input: {
    width: "100%",
    padding: 10,
    borderWidth: 1,
    borderColor: "gray",
    marginBottom: 10,
    borderRadius: 5,
  },
  time_picker: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "60%",
  },
  text_label: {
    fontSize: 20,
  },
  actions: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "60%",
    marginTop: 10,
  },
  button: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
  },
});
