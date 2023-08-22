import React, { useState, useContext, useRef } from 'react';
import "../index.css";
import { PasswordContext } from './passwordList';

// erstellt ein Form und kann Daten erfassen
const CreatePassword = () => {
  const [newPassword, setNewPassword] = useState({
    id: 1,
    name: "",
    username: "",
    password: "",
    url: "",
  });

  // id wird automatisch erstellt.
  const idRef = useRef(0);
  // addPassword von PasswordList importieren
  const { addPassword } = useContext(PasswordContext)

  const handleCreate = (e) => {
    e.preventDefault();

    idRef.current += 1;
    
    setNewPassword(prevData => ({
      ...prevData,
      id: prevData.id + 1
  }));

  // aktuelle Password als Argument einfügen
    addPassword(newPassword)
  }


  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPassword(prevData => ({ ...prevData, [name]: value }));
    
  }

  return (
      <form onSubmit={handleCreate}>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" className="form-control" id="name" value={newPassword.name} onChange={handleChange} placeholder="Name" />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" className="form-control" id="username" value={newPassword.username} onChange={handleChange} placeholder="Username" />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" className="form-control" id="password" value={newPassword.password} onChange={handleChange} placeholder="Password" />
          </div>
        </div>

        <div className="form-group col-md-6">
          <label htmlFor="basic-url" className="form-label">Your vanity URL</label>
          <div className="input-group">
            <span className="input-group-text" id="basic-addon3">https://example.com/users/</span>
            <input type="text" name="url" className="form-control" id="basic-url" value={newPassword.url} onChange={handleChange} aria-describedby="basic-addon3 basic-addon4" />
          </div>
          <div className="form-text" id="basic-addon4">Example help text goes outside the input group.</div>
        </div>

        <button type="submit" className="btn btn-primary">Create</button>
      </form>
  )
}

export default CreatePassword;

