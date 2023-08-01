import img from "../img/numbers.jpg";

function Home() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "100px",
      }}
    >
      <img
        src={img}
        alt="Numbers"
        style={{
          maxWidth: "100%",
          height: "500px",
        }}
      ></img>
    </div>
  );
}

export default Home;
