import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import GenericModal from './GenericModal'; // Code für ein Modal
import ViewPassword from './ViewPassword';
import EditPassword from './EditPassword';


 // eine Reihe im PasswordList

const PasswordRow = ({ id, name, username, onDelete, getEntryById }) => {
    const [modalContent, setModalContent] = useState(null);

    const openModal = content => {
        setModalContent(content);
    };

    const closeModal = () => {
        setModalContent(null);
    };

    // in einem neuen Fester wird entweder ViewPassword oder EditPassword aufgerufen. wird für Buttons eingesetzt 
    const renderModalContent = () => {
        switch (modalContent) {
            case 'view': return <ViewPassword getEntryById={getEntryById} entryId={id} />;
            case 'edit': return <EditPassword getEntryById={getEntryById} entryId={id} />;
            default: return null;
        }
    };

    return (
        <tr>
            
            <th scope="row">{id}</th>
            <td>{name}</td>
            <td>{username}</td>
            <td>

                {/* Button rendern */}
                <ActionButtons />

                {/* Werte and Modal weitergeben */}
                <GenericModal
                    showModal={!!modalContent}
                    handleClose={closeModal}
                    modalContent={renderModalContent()}
                />
            </td>
        </tr>
    );

    function ActionButtons() {
        return (
            <>

                <Button variant="primary" onClick={() => openModal('view')}>View</Button>

                <Button variant="success" onClick={() => openModal('edit')}>Edit</Button>

                {/* Aktionstasten: Löschen des Passworteintrags, onDelete stammt von passwordList*/}
                <Button variant="danger" onClick={() => onDelete(id)}>Delete</Button>
            </>
        );
    }
}

export default PasswordRow;





