import React, { useState } from 'react';

function ConversionForm() {
  const [conversionType, setConversionType] = useState('km-to-m');
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleConversion = () => {
    if (!inputValue || isNaN(inputValue)) {
      setError('Por favor ingresa un valor numérico válido');
      setResult(null);
      return;
    }

    setError('');
    let convertedValue;
    let unit;

    switch (conversionType) {
      case 'km-to-m':
        convertedValue = parseFloat(inputValue) * 1000;
        unit = 'm';
        break;
      case 'm-to-cm':
        convertedValue = parseFloat(inputValue) * 100;
        unit = 'cm';
        break;
      case 'ft-to-inch':
        convertedValue = parseFloat(inputValue) * 12;
        unit = 'pulg';
        break;
      case 'yard-to-inch':
        convertedValue = parseFloat(inputValue) * 36;
        unit = 'pulg';
        break;
      default:
        break;
    }

    setResult(`${convertedValue} ${unit}`);
  };

  return (
    <div className="conversion-container">
      <div className="card conversion-card">
        <h2 className="text-center mb-4">Conversor de Unidades</h2>
        <form>
          <div className="form-group">
            <label htmlFor="conversionType">Tipo de Conversión</label>
            <select
              className="form-control custom-select"
              id="conversionType"
              value={conversionType}
              onChange={(e) => setConversionType(e.target.value)}
            >
              <option value="km-to-m">De Km a M</option>
              <option value="m-to-cm">De M a CM</option>
              <option value="ft-to-inch">De Ft a Pulg</option>
              <option value="yard-to-inch">De Yarda a Pulg</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="inputValue">Valor</label>
            <input
              type="text"
              className="form-control"
              id="inputValue"
              placeholder="Ingresa el valor a convertir"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </div>

          {error && <div className="alert alert-danger">{error}</div>}

          <button 
            type="button" 
            className="btn btn-primary btn-block mt-3"
            onClick={handleConversion}
          >
            Convertir
          </button>
        </form>

        {result !== null && (
          <div className="mt-4 text-center">
            <h3 className="result-display">Resultado: {result}</h3>
          </div>
        )}
      </div>
    </div>
  );
}

export default ConversionForm;