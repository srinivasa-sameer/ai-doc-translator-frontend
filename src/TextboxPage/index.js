import Home from '../Home';

const TextBoxPage = () => {
  return (
    <div>
      <Home />
      <br />
      <div className="container">
        <h4>Enter text to translate</h4>
        <textarea
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
          <option value="it">Italian</option>
          <option value="ja">Japanese</option>
          <option value="ko">Korean</option>
          <option value="pt">Portuguese</option>
          <option value="ru">Russian</option>
          <option value="zh">Chinese</option>
        </select>
        <button className="btn btn-warning">Translate</button>
        <br />
        <br />
        <div className="row">
          <div className="col-md-6">
            <h5> Translated Text:</h5>
            <textarea
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
