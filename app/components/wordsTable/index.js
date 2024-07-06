import React from 'react';
import styles from './Grid.module.css';

const Grid = () => {
    const words = ["РУБИН", "СЛОВО", "МАШИН", "КНИГА", "КОДЕР", "ЗАЯЦ"];

    return (
        <div className={styles.grid}>
            {words.map((word, rowIndex) => (
                Array.from(word).map((letter, colIndex) => (
                    <div key={`${rowIndex}-${colIndex}`} className={styles.cell}>
                        {letter}
                    </div>
                ))
            ))}
        </div>
    );
};

export default Grid;