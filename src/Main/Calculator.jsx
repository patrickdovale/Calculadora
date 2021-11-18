import React, { useState } from 'react';
import './Calculator.css';

import Button from '../Components/Button';
import Display from '../Components/Display';

export default function Calculator(props) {


    const [displayValue, setDisplayValue] = useState(0);
    const [clearDisplay, setClearDisplay] = useState(false);
    const [operation, setOperation] = useState(null);
    const [values, setValues] = useState([0, 0]);
    const [current, setCurrent] = useState(0);

    const initialState = () => {
        setDisplayValue(0);
        setClearDisplay(false);
        setOperation(null);
        setValues([0, 0]);
        setCurrent(0);
    }


    console.log(values)

    function ClearMemory() {
        initialState()
        console.log("limpar");
    }

    function setOp(op) {
        if (current === 0) {
            setOperation(op)
            setCurrent(1)
            setClearDisplay(true)
        } else {
            const equals = op === "="

            try {
                values[0] = eval(`${values[0]} ${operation} ${values[1]}`)
            } catch (error) {
                setValues([values[0], values[1] = 0])
            }

            setValues([values[0], values[1] = 0])

            setDisplayValue(values[0])
            setOperation(equals ? null : op)
            setCurrent(equals ? 0 : 1)
            setClearDisplay(!equals)
        }
    }

    function addDigit(n) {
        if (n === '.' && displayValue.includes('.')) {
            return null
        }

        const clearDisplayy = displayValue === 0 || clearDisplay
        const currentValue = clearDisplayy ? '' : displayValue
        const displayValuee = currentValue + n
        setDisplayValue(displayValuee)
        setClearDisplay(false)

        if (n !== '.') {
            const i = current
            const newValue = parseFloat(displayValuee)
            values[i] = newValue
            setValues(values)
        }


    }

    return (
        <div className="container-calulator">

            <h1>Calculadora</h1>

            <div className="calculator">
                <Display value={displayValue} />
                <Button label="AC" click={() => ClearMemory()} triple />
                <Button label="/" click={() => setOp('/')} operation />
                <Button label="7" click={() => addDigit(7)} />
                <Button label="8" click={() => addDigit(8)} />
                <Button label="9" click={() => addDigit(9)} />
                <Button label="*" click={() => setOp('*')} operation />
                <Button label="4" click={() => addDigit(4)} />
                <Button label="5" click={() => addDigit(5)} />
                <Button label="6" click={() => addDigit(6)} />
                <Button label="-" click={() => setOp('-')} operation />
                <Button label="1" click={() => addDigit(1)} />
                <Button label="2" click={() => addDigit(2)} />
                <Button label="3" click={() => addDigit(3)} />
                <Button label="+" click={() => setOp('+')} operation />
                <Button label="0" click={() => addDigit(0)} double />
                <Button label="." click={() => addDigit('.')} />
                <Button label="=" click={() => setOp('=')} operation />
            </div>
        </div>
    )
}