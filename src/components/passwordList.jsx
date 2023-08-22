import React, { useState } from 'react';
import PasswordRow from './PasswordRow';  
import Navbar from './Navbar';

// Erstellen eines Kontexts zur Verwaltung der Passwortfunktionalität.
export const PasswordContext = React.createContext({
    addPassword: () => {},
    updatePassword: (id, password) => {}
});

// Hauptkomponente zur Anzeige der Passwortliste.
const PasswordList = () => {
    // Einige anfängliche Beispieldaten.
    const [passwords, setPasswords] = useState([
        { 
            id: 0, 
            name: 'Bootstrap 4 CDN and Starter Template', 
            username: 'Cristina', 
            password: 'somePassword1', 
            url: 'someURL1' 
        },
        // ... weitere Objekte
    ]);

    // Funktion, um ein neues Passwort hinzuzufügen.
    const addPassword = (password) => {
        setPasswords(prevPasswords => [...prevPasswords, password]);
    }

    // Funktion, um ein existierendes Passwort über seine ID zu aktualisieren.
    const updatePassword = (id, updatedPassword) => {
        setPasswords(prevPasswords => prevPasswords.map(password => {
            if (password.id === id) {
                return updatedPassword;
            } 
            return password;         
        }));
    }

    // Funktion, um ein Passwort anhand seiner ID zu finden.
    const findById = (id) => {
        return passwords.find(password => password.id === id);
    }

    // Funktion, um ein Passwort über seine ID zu löschen.
    const handleDeletePassword = (id) => {
        setPasswords(prevPasswords => prevPasswords.filter(password => password.id !== id));
    }

    return (
                                    // Funktionen weitergeben
        <PasswordContext.Provider value={{ addPassword, updatePassword }}>
            <div className="container">
                <Navbar />
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Username</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* erstellt PassowrdRow Komponente. GLeiche Anzahl wie die Elemente im state*/}
                        {passwords.map((password) => (                   // Funktionen als prop wietergeben
                            <PasswordRow key={password.id} {...password} onDelete={handleDeletePassword} getEntryById={findById}/>
                        ))}
                    </tbody>
                </table>
            </div>
        </PasswordContext.Provider>
    );
}

export default PasswordList;
