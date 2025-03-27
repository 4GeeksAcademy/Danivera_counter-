
import React, { useState, useEffect } from 'react';

function SecondCounter() {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        // Configuramos un intervalo que se ejecuta cada segundo
        const timer = setInterval(() => {
            setCounter(prevCounter => prevCounter + 1);
        }, 1000);

        // Limpiamos el intervalo al desmontar el componente
        return () => clearInterval(timer);
    }, []);

    // Calculamos cada dígito individual
    const digitOne = counter % 10;              // Unidades
    const digitTwo = Math.floor(counter / 10) % 10;     // Decenas
    const digitThree = Math.floor(counter / 100) % 10;  // Centenas
    const digitFour = Math.floor(counter / 1000) % 10;  // Millares

    return (
        <div className="bigCounter">
            <div className="calendar">
                <i className="far fa-clock"></i>
            </div>
            <div className="four">{digitFour}</div>
            <div className="three">{digitThree}</div>
            <div className="two">{digitTwo}</div>
            <div className="one">{digitOne}</div>
        </div>
    );
}

export default SecondCounter;