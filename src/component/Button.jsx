function Button(props) {
  return (
    <button style={{ backgroundColor: "blue", marginTop: "20px", text: "white", fontSize: "25px" }}>
      {props.testo}
    </button>
  );
}
export default Button;
