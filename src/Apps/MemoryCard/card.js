
function Card({ id, url, isFlipped, onClick }) {
    const handleClick = () => {
      if (!isFlipped) {
        onClick({ id, url });
      }
    };
  
    return (
      <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={handleClick}>
        <div className="card-back"></div>
        <div className="card-front" style={{ backgroundImage: `url(${url})` }}></div>
      </div>
    );
  }
  