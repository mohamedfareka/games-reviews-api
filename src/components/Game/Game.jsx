import React from "react";

export default function Game(props) {
  const game = props.gameData;

  return (
    <div className="col-lg-3">
      <div className="">
        <button
          type="button"
          className="btn p-0 border-0"  
          data-bs-toggle="modal"
          data-bs-target={`#modal-${game.id}`}  // Unique ID
        >
          <div className="card">
            <img src={game.thumbnail} className="card-img-top" alt={game.title} />
            <div className="card-body">
              <h5 className="card-title">{game.title}</h5>
              <p className="card-text">{game.short_description}</p>
            </div>
          </div>
        </button>
      </div>

      {/* Modal with unique ID */}
      <div
        className="modal fade"
        id={`modal-${game.id}`}  // Unique ID
        tabIndex="-1"
        aria-labelledby={`modalLabel-${game.id}`}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id={`modalLabel-${game.id}`}>
                {game.title}  {/* Dynamic title */}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col">
                  <img src={game.thumbnail} className="card-img-top" alt={game.title} />
                </div>
                <div className="col">
                  <div className="card-body">
                    <h5 className="card-title">{game.title}</h5>
                    <p className="card-text">{game.short_description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}