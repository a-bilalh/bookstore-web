import React from "react";
import styles from "./SectionLabel.module.css"


const Label = ({type, children}) => {

    const typeClass = type === "fiction" ? styles.fiction : styles.nonFiction;


    return (
        <div className={`${styles.label} ${typeClass}`}>
            {children}
        </div>
    )
}


export default Label