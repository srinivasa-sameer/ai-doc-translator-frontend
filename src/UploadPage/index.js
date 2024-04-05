import Home from '../Home';

const UploadPage = () => {
  return (
    <div>
      <Home />
      <div className="container">
        <br />
        <h4>Upload a file</h4>
        <input className="form-control" type="file" />
        <button className="btn btn-primary mt-2">Upload</button>
        <br />
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

export default UploadPage;
