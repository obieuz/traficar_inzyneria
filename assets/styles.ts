import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8D99AE",
    alignItems: "center",
    justifyContent: "center",
  },
  contentContainer: {
    alignItems: "center",
    marginBottom: 50,
  },
  title: {
    fontSize: 72,
    fontWeight: "bold",
    color: "#000",
  },
  subtitle: {
    fontSize: 36,
    color: "#000",
  },
  priceOld: {
    fontSize: 14,
    color: "#A89A91",
    textDecorationLine: "line-through",
    marginTop: 10,
  },
  priceNew: {
    fontSize: 20,
    color: "#6C4A41",
    fontWeight: "bold",
  },
  description: {
    fontSize: 14,
    color: "#000",
    marginTop: 10,
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
  },

  buttonContainer2: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
  },


  createAccountButton: {
    backgroundColor: "#FFF",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginRight: 10,
  },


    demobutton: {
      backgroundColor: "#FFF",
      borderRadius: 20,
      paddingVertical: 10,
      paddingHorizontal: 20,
      margin: 10,
      width: "20%",
    },





  createAccountText: {
    color: "#000",
    fontSize: 16,
  },
  loginButton: {
    backgroundColor: "#6C4A41",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  loginText: {
    color: "#FFF",
    fontSize: 16,
  },
  formContainer: {
    flex: 1,
    backgroundColor: "#8D99AE",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  formTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    backgroundColor: "#FFF",
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  submitButton: {
    backgroundColor: "#6C4A41",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  submitButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default styles;