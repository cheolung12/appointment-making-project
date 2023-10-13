// TitleInput.js
import React, { useState, useEffect } from 'react';

export default function TitleInput({ handleActivation, handleTitle }) {
    const [title, setTitle] = useState('');
    const [activation, setActivation] = useState(false);

    useEffect(() => {
        if (title.trim() !== '') {
            setActivation(true);
        } else {
            setActivation(false);
        }
        handleActivation(activation);
    }, [title, handleActivation, activation]);

    const handleChange = (e) => {
        setTitle(e.target.value);
        handleTitle('title', e.target.value);
    }

    return (
        <div>
            <input type="text" value={title} onChange={handleChange}/>
        </div>
    );
}
