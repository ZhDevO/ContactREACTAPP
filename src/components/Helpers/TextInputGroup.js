import React from "react";
import classNames from "classnames";
function TextInputGroup(props) {
    return (
        <div className="form-group">
            <label htmlFor={ props.name }>{ props.label }</label>
            <input type={ props.type } 
            className={classNames('form-control', {
                //hadi wahad class brit n appliciha 3la input dyali ida kn dak object oula propriete error li kn dwaz tkoun kyna maxi null
                'is-invalid': props.error
            })}
            name={ props.name } 
            defaultValue={ props.defaultValue } 
            onChange={props.onChange}
            />
            <div className="invalid-feedback">{ props.error }</div>
        </div>
    )
}

export default TextInputGroup;