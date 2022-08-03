import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function CountryDialog(props) {
  const showMap = () => {
    window.open(props.country.maps.googleMaps, "_blank").focus();
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      dialogClassName="modal-90w"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.country.name.common}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="dialog-body">
          <div className="row text-center">
            <div className="col-md-3">
              <h5>Flag</h5>
              <img
                src={props.country.flags.png}
                className="flag"
                alt={props.country.name.common}
              />
            </div>
            <div className="col-md-3">
              <h5>Coat of arms</h5>
              <img
                src={props.country.coatOfArms.png}
                className="flag"
                alt={props.country.name.common}
              />
            </div>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              Spellings{" "}
              <span className="float-end fw-light">
                {Object.values(props.country.altSpellings).join(", ")}
              </span>
            </li>
            <li class="list-group-item">
              Area{" "}
              <span className="float-end fw-light">{props.country.area}</span>
            </li>
            <li class="list-group-item">
              Borders{" "}
              <span className="float-end fw-light">
                {props.country.borders
                  ? Object.values(props.country.borders).join(", ")
                  : ""}
              </span>
            </li>
            <li class="list-group-item">
              Continents{" "}
              <span className="float-end fw-light">
                {Object.values(props.country.continents).join(", ")}
              </span>
            </li>
            <li class="list-group-item">
              Map{" "}
              <span className="float-end fw-light">
                <button
                  type="button"
                  className="btn btn-link btn-sm"
                  onClick={showMap}
                >
                  Open
                </button>
              </span>
            </li>
            <li class="list-group-item">
              Region{" "}
              <span className="float-end fw-light">{props.country.region}</span>
            </li>
            <li class="list-group-item">
              Sub region{" "}
              <span className="float-end fw-light">
                {props.country.subregion}
              </span>
            </li>
            <li class="list-group-item">
              Start of week{" "}
              <span className="float-end fw-light">
                {props.country.startOfWeek}
              </span>
            </li>
            <li class="list-group-item">
              International dail code{" "}
              <span className="float-end fw-light">
                {props.country.idd.root}
              </span>
            </li>
            <li class="list-group-item">
              Status{" "}
              <span className="float-end fw-light">{props.country.status}</span>
            </li>
            <li class="list-group-item">
              Currencies{" "}
              <pre className="float-end fw-light">
                {JSON.stringify(props.country.currencies, null, 4)}
              </pre>
            </li>
            <li class="list-group-item">
              Translations{" "}
              <pre className="float-end fw-light">
                {JSON.stringify(props.country.translations, null, 4)}
              </pre>
            </li>
          </ul>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CountryDialog;
