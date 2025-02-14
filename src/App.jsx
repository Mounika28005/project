import React, { useState } from 'react';
import './App.css'

const App = () => {
    const [input, setInput] = useState("");  
    const [result, setResult] = useState(0);  
    const handleInputChange = (e) => {
        setInput(e.target.value);
    };
    const evaluateExpression = () => {
        try {
            setResult(eval(input));
        } catch (error) {
            setResult('Error'); 
        }
    };

    return (
        <div>
            <center>
                <h2>Calculator</h2>
                <input 
                    type="text" 
                    value={input} 
                    onChange={handleInputChange} 
                    placeholder="Enter expression" 
                />
                <br />
                <button onClick={evaluateExpression}>Result</button>
                <h4>Result: {result}</h4>

                <div>
                    <button onClick={() => setInput(input + '1')}>1</button>
                    <button onClick={() => setInput(input + '2')}>2</button>
                    <button onClick={() => setInput(input + '3')}>3</button>
                    <button onClick={() => setInput(input + '4')}>4</button>
                    <button onClick={() => setInput(input + '5')}>5</button><br />
                    <button onClick={() => setInput(input + '6')}>6</button>
                    <button onClick={() => setInput(input + '7')}>7</button>
                    <button onClick={() => setInput(input + '8')}>8</button>
                    <button onClick={() => setInput(input + '9')}>9</button>
                    <button onClick={() => setInput(input + '0')}>0</button><br />
                    <button onClick={() => setInput(input + '+')}>+</button>
                    <button onClick={() => setInput(input + '-')}>-</button>
                    <button onClick={() => setInput(input + '*')}>*</button>
                    <button onClick={() => setInput(input + '/')}>/</button>
                    <button onClick={() => setInput('')}>Clear</button>
                </div>
            </center>
        </div>
    );
};

export default App;





















