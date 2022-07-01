import React from 'react';
import signature from '../../Assets/signature.png';

function Author() {
  return (
    <div className="Author">
      <div className="image">
        <img onerror='this.style.display = "none"' />
      </div>
      <div className="about">
        <div className="container">
          <div className="header">
            <h3 className="text">About me</h3>
          </div>
          <div className="subheader">
            <p className="text">
              Given let waters air sea had you'll, may seed abundatly fish. Were, you'll earth forth
              winged above earth brought. Own darkness they're him can't fourth sea place have.
            </p>
            <p className="text">
              So the above May stars cattle fruitful face shall. Tree it, winged. Every signs male
              firmament us. Morning him.
            </p>
          </div>
          <div className="signature">
            <img className="image" src={signature} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Author;
