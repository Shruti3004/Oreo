import React, { useState } from "react";
import booknow from "../../images/bookNow.png";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import swal from "sweetalert";
import "./booknow.css";

function BookNow() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name !== "" && phone !== "") {
      setShow(false);
      swal({
        text: "You will be contacted with best deal shortly",
        icon: "success",
      });
    } else {
      swal({ text: "Please fill in the required details", icon: "info" });
    }
  };
  return (
    <React.Fragment>
      <a href="tel:+91-8800939951">
        <div className="call-button py-2">
          <i className="fas fa-phone text-white"></i>
        </div>
      </a>
      <div onClick={handleShow}>
        <img src={booknow} alt="Book now" className="img-fluid book-now" />
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className="modal-form-header">
          <Modal.Title className="modal-form-heading">
            Fill Form and get best Deal for Car hire in Varanasi
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="form-horizontal">
            <div className="form-group">
              <div className="row no-gutters">
                <div className="col-sm-12">
                  <div className="row no-gutters mb-2 ">
                    <div className="col-sm-4">
                      <label className="control-label" for="name">
                        Your Name
                      </label>
                    </div>
                    <div className="col-sm-8">
                      <input
                        type="name"
                        className="form-control"
                        id="name"
                        placeholder="Enter Your Name"
                        value={name}
                        onClick={(e) => setName(e.value)}
                        required
                      />
                      <div className="invalid-feedback">Name is required</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row no-gutters mb-2">
                <div className="col-sm-4">
                  <label className="control-label" for="pwd">
                    Your Mobile Number
                  </label>
                </div>
                <div className="col-sm-8">
                  <input
                    type="text"
                    className="form-control"
                    id="mobNumber"
                    placeholder="Your Mobile number"
                    value={phone}
                    onClick={(e) => setPhone(e.value)}
                    required
                  />
                </div>
              </div>
              <div className="row no-gutters mb-2">
                <div className="col-sm-4">
                  <label className="control-label" for="email">
                    Your Email:(optional)
                  </label>
                </div>
                <div className="col-sm-8">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter email"
                    value={email}
                    onClick={(e) => setEmail(e.value)}
                  />
                </div>
              </div>
              <div className="row no-gutters mb-2">
                <div className="col-sm-4"></div>
                <div className="col-sm-8">
                  <button
                    type="submit"
                    className="btn btn-success px-4 py-1 mb-3"
                    onClick={handleSubmit}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
          {/* <div className="row no-gutters mb-2">
            <div className="col-sm-4"></div>
            <div className="col-sm-8">
              <h4 className=" text-success modal-sub-heading">
                You will be contacted with best deal shortly
              </h4>
              <h4 className="text-success modal-sub-heading">
                You choose which ever suits you the best
              </h4>
            </div>
          </div> */}
        </Modal.Body>
        <Modal.Footer className="modal-form-footer p-2">
          <Button
            variant="secondary"
            onClick={handleClose}
            className="px-4 py-1 modal-close-button"
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
}

export default BookNow;
