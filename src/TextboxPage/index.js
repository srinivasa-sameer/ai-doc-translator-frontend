import { useState } from 'react';
import Home from '../Home';
import axios from 'axios';

const TextBoxPage = () => {
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('');

  const translateText = async () => {
    try {
      const response = await axios.post(
        'http://81f8-34-86-209-30.ngrok-free.app/translate_user_text3',
        {
          text: inputText,
          chageOrigin: true,
        }
      );
      setTranslatedText(response.data.translatedText);
      console.log(translateText);
    } catch (error) {
      console.error('Error translating text:', error);
    }
  };

  return (
    <div>
      <Home />
      <br />
      <div className="container">
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
        <select className="form-select form-select-md mb-3 mt-3">
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          <option value="de">German</option>
        </select>
        <button onClick={translateText} className="btn btn-warning">
          Translate
        </button>
        <br />
        <br />
        <div className="row">
          <div className="col-md-6">
            <h5> Translated Text:</h5>
            <textarea
              value={translatedText}
              className="form-control mt-3"
              rows="5"
              placeholder="Translated Text"
            />
          </div>
          <div className="col-md-6">
            <h5> Translated Text from Google Translate:</h5>
            <textarea
              className="form-control mt-3"
              rows="5"
              placeholder="Translated Text from Google Translate"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextBoxPage;
