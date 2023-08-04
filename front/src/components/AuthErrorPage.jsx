function AuthErrorPage() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "200px",
      }}
    >
      <p
        style={{
          color: "red",
          fontWeight: 500,
          fontSize: "48px",
        }}
      >
        You do not have permission to access this page
      </p>
    </div>
  );
}

export default AuthErrorPage;
