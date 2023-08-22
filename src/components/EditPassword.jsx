import React, { useState, useContext, useEffect} from 'react';
import "../index.css";
import { PasswordContext } from './passwordList';

// EditPassword-Komponente zum Bearbeiten von Passworteinträgen.
const EditPassword = ({ getEntryById, entryId }) => {
  const [newPassword, setNewPassword] = useState({
    id: 0,
    name: "",
    username: "",
    password: "",
    url: "",
  });

  const { updatePassword } = useContext(PasswordContext)

  // Funktion, um den aktuellen Eintrag anhand der ID zu erhalten und den Zustand zu aktualisieren.
  const updtateEntryById = async (entryId) => {
    const entry = await getEntryById(entryId); 
    if (entry) {
        setNewPassword(entry);
    }
}

// Wenn sich das übergeordnete Passwortobjekt ändert, aktualisieren Sie die lokalen Zustände
useEffect(() => {
    updtateEntryById(entryId);
}, [entryId]);
  

  const handleCreate = (e) => {
    e.preventDefault();

    // Ruft die updateFunktion (aus passwordList) auf.
    updatePassword(entryId, newPassword)
  }


  // Funktion zum Behandeln der Änderungen in den Input-Feldern.
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Aktualisiert den newPassword-Zustand basierend auf dem eingegebenen Wert.
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

        {/* Speichern-Taste */}
        <button type="submit" className="btn btn-primary">Save</button>
      </form>
  )
}

export default EditPassword;