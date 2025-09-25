import React from "react";

const FormInput = ({ label, type, name, value, onChange, required, placeHolder }) => {
    return (
        <div className="form-group">
            <label>{label}:</label>
            <input  
                type={type}
                name={name}
                value={value}       
                onChange={onChange}
                required={required}
                className="form-control"
                placeholder={placeHolder}
            />
        </div>
    );
}

export default FormInput;

