const Read = ({ users }) => {
  const renderUsers = users.map((user, index) => {
    return (
      <li key={index}>
        {user.name} | {user.age} | {user.gender} | {user.city}
      </li>
    );
  });
  return (
    <div className="main">
      <h1 style={{ margin: "10px" }}>All Users</h1>
      <ol style={{ margin: "0 30px" }}>{renderUsers}</ol>
    </div>
  );
};

export default Read;
