function DashboardPage() {
  return (
    <>
      Dashboard page
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "10px",
          marginTop: "20px",
        }}
      >
        <a href={`/questions`}>Questions</a>
        <a href={`/add-question`}>Add Question</a>
      </div>
    </>
  );
}

export { DashboardPage };
