import Home from '../Home';

const TextBoxPage = () => {
  return (
    <div>
      <Home />
      <div className="container">
        <textarea
          className="form-control"
          rows="5"
          placeholder="Enter text to translate"
        />
        <br />
        <label>Select a language:</label>
        <select className="form-select form-select-md mb-3 mt-3">
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          <option value="de">German</option>
          <option value="it">Italian</option>
          <option value="ja">Japanese</option>
          <option value="ko">Korean</option>
          <option value="pt">Portuguese</option>
          <option value="ru">Russian</option>
          <option value="zh">Chinese</option>
        </select>
        <button className="btn btn-warning">Translate</button>

        <textarea
          className="form-control mt-3"
          rows="5"
          placeholder="Translated Text"
        />
      </div>
    </div>
  );
};

export default TextBoxPage;
