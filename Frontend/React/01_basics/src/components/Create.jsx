import { useState } from "react";

const Create = ({ setUsers }) => {
  const [userName, setUsername] = useState("");
  const [userAge, setUserAge] = useState("");
  const [gender, setGender] = useState("");
  const [city, setCity] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    let newUser = { name: userName, age: userAge, gender: gender, city: city };
    setUsers((prevUsers) => [...prevUsers, newUser]);
    console.log(newUser);
    setUsername("");
    setUserAge("");
    setGender("");
    setCity("");
  };

  return (
    <div>
      <h1>Register Users</h1>
      <form
        onSubmit={submitHandler}
        style={{
          display: "flex",
          justifyContent: "start",
          flexDirection: "column",
          gap: "10px",
          width: "20rem",
          margin: "20px",
          fontSize: "18px",
        }}
      >
        <input
          style={{ padding: "10px", borderRadius: "10px" }}
          onChange={(e) => setUsername(e.target.value)}
          value={userName}
          type="text"
          placeholder="User Name"
        />
        <input
          style={{ padding: "10px", borderRadius: "10px" }}
          onChange={(e) => setUserAge(e.target.value)}
          value={userAge}
          type="number"
          placeholder="User Age"
        />
        <div>
          <div
            style={{
              display: "flex",
              gap: "20px",
              justifyContent: "center",
            }}
          >
            <input
              type="radio"
              value="male"
              onChange={(e) => setGender(e.target.value)}
              checked={gender === "male" && true}
            />{" "}
            male
            <input
              type="radio"
              value="Female"
              onChange={(e) => setGender(e.target.value)}
              checked={gender === "female" && true}
            />
            Female
          </div>
          <select
            style={{
              padding: "10px 7rem",
              borderRadius: "10px",
              margin: "10px 0",
            }}
            value={city}
            onChange={(e) => setCity(e.target.value)}
          >
            <option value="Delhi">Delhi</option>
            <option value="Dehradun">Dehradun</option>
            <option value="Jaipur">Jaipur</option>
            <option value="Uttar Pardesh">Uttar Pardesh</option>
            <option value="Haldwani">Haldwani</option>
          </select>
        </div>
        <button style={{ padding: "10px", borderRadius: "10px" }}>
          Add User
        </button>
      </form>
    </div>
  );
};

export default Create;
