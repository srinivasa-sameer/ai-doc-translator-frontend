import Home from '../Home';

const UploadPage = () => {
  return (
    <div>
      <Home />
      <div className="container">
        <br />
        <h3>Upload a file</h3>
        <input className="form-control" type="file" />
        <button className="btn btn-primary mt-2">Upload</button>
        <br />
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
      </div>
    </div>
  );
};

export default UploadPage;
