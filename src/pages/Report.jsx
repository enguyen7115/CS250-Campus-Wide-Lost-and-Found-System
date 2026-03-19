import { useState } from "react";
import './report.css'

export default function Report() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [color, setColor] = useState('');

    return (
        <div className="report-container">
            <form className="report-form-container">
                <h1 className='report-title'>Report Lost Item</h1>
                <input className="report-form-input" type="text" placeholder="Name" minLength="1" maxLength="25" value={name} onChange={(e) => setName(e.target.value)} required/>
                <textarea className="report-form-desc" placeholder="Description" minLength="1" maxLength="200" wrap="hard" value={description} onChange={(e) => setDescription(e.target.value)} required/>
                <input className="report-form-input" type="text" placeholder="Color" value={color} onChange={(e) => setColor(e.target.value)} required/>
                <input className="report-form-input" type="text" placeholder="Location" minLength="1" maxLength="25" value={location} onChange={(e) => setLocation(e.target.value)} required/>
                <input className="report-form-submit" type="submit" value = "Report" />
            </form>
        </div>
    );
}