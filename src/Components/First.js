import React from "react";
import logo from "../Images/payo.jpg";
import logo1 from "../Images/modelogo.jpg";

function First() {
  return (
    <div>
      {/* navbar */}
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{ backgroundColor: "#ffffff" }}
      >
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
                <img src={logo} alt="Logo" id="headerlogo" />
              </li>
            </ul>
            <form className="d-flex">
              <i className="fa fa-bell" />
             
            </form>
          </div>
        </div>
      </nav>

      {/* modal */}
      <div
        className="modal fade"
        id="exampleModalToggle"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel"
        tabindex="-1"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div
            className="modal-content"
            style={{ height: "25rem", width: "38rem", marginLeft: "60px" }}
          >
            <div className="modal-body">
              <img src={logo1} alt="Logo" id="headerlogo1" />
              <h5 className="modalheading">Add E 10 or more</h5>
              <div className="d-flex justify-content-center">
                <p className="modalpara lh-base">
                  Before we hook up with an account,you need to add money.you
                  can spend or withdraw this money later
                </p>
              </div>

              <div className="row g-2 mt-2">
                <div className="col-sm-6">
                  <button type="submit" className="mb-3 rounded-pill" id="skipbtn">
                    Skip
                  </button>
                </div>
                <div className="col">
                  <button
                    type="submit"
                    className="mb-3 rounded-pill"
                    id="addmoneybtn"
                  >
                    Add Money
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a
        className="btn btn-primary float-end"
        data-bs-toggle="modal"
        href="#exampleModalToggle"
        role="button"
      >
        Open first modal
      </a>

      {/* Side nav */}
      <button
        className="btn btn-primary"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasScrolling"
        aria-controls="offcanvasScrolling"
      >
        Enable body scrolling
      </button>

      <div
        className="offcanvas offcanvas-start"
        data-bs-scroll="true"
        data-bs-backdrop="false"
        tabindex="-1"
        id="offcanvasScrolling"
        aria-labelledby="offcanvasScrollingLabel"
      >
        <div className="offcanvas-header">
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <div className="sidebar fw-bold">
            <a className="active" href="#home">
              Accounts
            </a>
            <a href="#news">
              <i className="fa fa-home"></i>Analytics
            </a>
            <a href="#contact">Payments</a>
            <a href="#about">Cards</a>
            <a href="#about">
              <i className="fa fa-bell"></i>Settings
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default First;
