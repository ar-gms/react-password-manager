import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import GenericModal from './GenericModal';
import CreatePassword from './CreatePassword';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    // Modal für die Create-Komponent
    const [showModal, setShowModal] = useState(false);
    
    const navigate = useNavigate();

    const handleLogout = () => {
        // Route zum Login
        navigate('/Login');
    };

    const handleModal = () => {
        setShowModal(true);
    }

    const handleClose = () => {
        setShowModal(false);
    }

    return (
        <nav className="navbar bg-body-tertiary mb-5">
            <div className="container-fluid">
                <Button variant="primary" onClick={handleModal}>Create</Button>
                {/* Werte an GenericModal weitergeben*/}
                <GenericModal
                    showModal={showModal}
                    modalContent={<CreatePassword />}
                    handleClose={handleClose}
                />
                <h1>Vault</h1>
                {/* navigiert nach Login*/}
                <Button variant="danger" onClick={handleLogout}>Logout</Button>
            </div>
        </nav>
    );
}

export default Navbar;



