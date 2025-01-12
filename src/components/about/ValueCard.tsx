import React from "react";
import styles from "./ValueCard.module.css";

interface ValueCardProps {
    title: string;
    text: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ title, text }) => {
    return (
        <div className={styles["value-card-container"]}>
            <h2 className={styles["value-card-title"]}>{title}</h2>
            <div className={styles["value-card-box"]}>
                <p>{text}</p>
            </div>
        </div>
    );
};

export default ValueCard;
