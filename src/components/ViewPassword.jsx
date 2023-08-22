import React, { useState, useEffect } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import "../index.css";

// Standardmäßige Passwortdatenstruktur für die Initialisierung
const DEFAULT_PASSWORD = {
    id: "",
    name: "Default Name",
    username: 'Default username',
    password: 'Default password',
    url: 'Default url'
};

function ViewPassword({ getEntryById, entryId }) {
    // Lokaler State, um das angezeigte Passwort zu speichern
    const [password, setPassword] = useState(DEFAULT_PASSWORD);

    // Bei der Initialisierung oder Änderung der entryId holen wir die passenden Passwortdaten
    useEffect(() => {
        const fetchedEntry = getEntryById(entryId);
        if (fetchedEntry) {
            setPassword(fetchedEntry);
        }
    }, [entryId, getEntryById]);

    // Hilfsfunktion, um ein Eingabefeld mit der Kopierfunktion zu erstellen
    const renderInputGroup = (label, text) => (
        <div className="input-group mb-3">
            <span className="input-group-text fixed-width-span">{label}</span>
            <span className="input-group-text fixed-width-span">{text}</span>
            <CopyToClipboard text={text}>
                <button className="btn btn-default" type="button">Copy</button>
            </CopyToClipboard>
        </div>
    );

    const { name, username, url, password: pwd } = password;

    return (
        <div>
            <form>
                {/* Name des Eintrags als Überschrift */}
                <label htmlFor="exampleInputEmail1" className="form-label">{name}</label>

                {/* Rendern von Benutzername, Passwort und URL mit Kopierfunktion */}
                {renderInputGroup("Username:", username)}
                {renderInputGroup("Password:", pwd)}
                {renderInputGroup("URL:", url)}
            </form>
        </div>
    );
}

export default ViewPassword;




