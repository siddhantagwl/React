const User = (props) => {
  return (
    <div className="user-card">
      <h2>Name: {props.name}</h2>
      <h3>Location: Paderborn</h3>
      <h3>Contact: siddhantagwl</h3>
    </div>
  );
};

export default User;
