import { useState } from 'react';
import Home from '../Home';
import axios from 'axios';

const TextBoxPage = () => {
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('');

  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [selectedSourceLanguage, setSelectedSourceLanguage] = useState('');

  const options = ['English', 'German', 'Spanish', 'French'];

  const handleDestinationDropdownChange = (event) => {
    const selectedLanguage = event.target.value;
    setSelectedLanguage(selectedLanguage);
  };

  const handleSourceDropdownChange = (event) => {
    const selectedSourceLanguage = event.target.value;
    setSelectedSourceLanguage(selectedSourceLanguage);
  };

  const translateText = async () => {
    try {
      const response = await axios.post(
        'https://4888-34-125-174-8.ngrok-free.app/text_translate',
        {
          text: inputText,
          src: selectedSourceLanguage,
          target: selectedLanguage,
          changeOrigin: true,
        }
      );
      setTranslatedText(response.data.translatedText);
    } catch (error) {
      console.error('Error translating text:', error);
    }
  };

  return (
    <div>
      <Home />
      <br />
      <div className="container">
        <h4>Select Source Language:</h4>
        <select
          className="form-select form-select-md mb-3 mt-3"
          value={selectedSourceLanguage}
          onChange={handleSourceDropdownChange}
        >
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>

        <h4>Enter text to translate</h4>
        <textarea
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          className="form-control"
          rows="5"
          placeholder="Enter text to translate"
        />
        <br />
        <h4>Select a language:</h4>
        <select
          className="form-select form-select-md mb-3 mt-3"
          value={selectedLanguage}
          onChange={handleDestinationDropdownChange}
        >
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
        <button onClick={translateText} className="btn btn-warning">
          Translate
        </button>
        <br />
        <br />
        <div className="row">
          <div className="col">
            <h5> Translated Text:</h5>
            <textarea
              value={translatedText}
              className="form-control mt-3"
              rows="5"
              placeholder="Translated Text"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextBoxPage;
