import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Users = () => {
    const [users, setUsers] = useState([]);
  
    useEffect(() => {
      const fetchAllUsers = async () => {
        try {
          const res = await axios.get("http://localhost:8081/users");
          setUsers(res.data);
        } catch (err) {
          console.log(err);
        }
      };
      fetchAllUsers();
    }, []);
  
    console.log(users);
  
    const handleDelete = async (id) => {
      try {
        await axios.delete(`http://localhost:8081/users/${id}`);
        window.location.reload()
      } catch (err) {
        console.log(err);
      }
    };
  
    return (
      <div>
        <h1>Users</h1>
        <div className="users">
          {users.map((user) => (
            <div key={user.id} className="user">
              <h2>{user.name}</h2>
              <h2>{user.numripersonal}</h2>
              <h2>{user.email}</h2>
              <h2>{user.password}</h2>
              <button className="delete" onClick={() => handleDelete(user.id)}>Delete</button>
              <button className="update">
                <Link
                  to={`/edit/${user.id}`}
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  Update
                </Link>
              </button>
            </div>
          ))}
        </div>
  
        <button className="addHome">
          <Link to="/create" style={{ color: "inherit", textDecoration: "none" }}>
            Add new book
          </Link>
        </button>
      </div>
    );
  };

export default Users
