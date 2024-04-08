import Home from '../Home';
import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Document, pdfjs } from 'react-pdf';
import axios from 'axios';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const UploadPage = () => {
  const [file, setFile] = useState(null);
  const [pdfText, setPdfText] = useState('');

  const onDrop = (acceptedFiles) => {
    const uploadedFile = acceptedFiles[0];
    setFile(uploadedFile);

    const reader = new FileReader();
    reader.onload = function (event) {
      const url = event.target.result;
      parsePDF(url);
    };
    reader.readAsDataURL(uploadedFile);
  };

  const parsePDF = (url) => {
    setPdfText('');
    pdfjs.getDocument(url).promise.then(function (pdf) {
      let text = '';
      for (let i = 1; i <= pdf.numPages; i++) {
        // eslint-disable-next-line no-loop-func
        pdf.getPage(i).then(function (page) {
          page.getTextContent().then(function (textContent) {
            textContent.items.forEach(function (textItem) {
              text += textItem.str + ' ';
            });
            setPdfText((prevText) => prevText + text);
          });
        });
      }
    });
  };

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
        'https://81f8-34-86-209-30.ngrok-free.app/translate_user_text3',
        {
          text: pdfText,
          sourceLanguage: selectedSourceLanguage,
          destinationlanguage: selectedLanguage,
          chageOrigin: true,
        }
      );
      setTranslatedText(response.data.translatedText);
    } catch (error) {
      console.error('Error translating text:', error);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });
  return (
    <div>
      <Home />
      <div className="container">
        <br />
        <h4>Upload a file</h4>
        <div {...getRootProps()} style={dropzoneStyles}>
          <input {...getInputProps()} />
          {file ? (
            <p>Uploaded File: {file.name}</p>
          ) : (
            <p>Drag 'n' drop a PDF file here, or click to select one</p>
          )}
        </div>
        <br />
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
        {file && (
          <div>
            <Document file={file} onLoadError={console.error}></Document>
          </div>
        )}
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
            <h5>Uploaded Text:</h5>
            <textarea
              value={pdfText}
              className="form-control mt-3"
              rows="5"
              placeholder="Uploaded Text"
            />
          </div>
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

const dropzoneStyles = {
  border: '2px dashed #cccccc',
  borderRadius: '4px',
  padding: '20px',
  textAlign: 'center',
  cursor: 'pointer',
};

export default UploadPage;
