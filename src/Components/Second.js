import React from "react";
import logo from "../Images/payo.jpg";
import logo1 from "../Images/modelogo.jpg";
import dropdownlogo from "../Images/eshu.jpg";

function Second() {
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
                <img
                  src={logo}
                  alt="Logo"
                  id="headerlogo"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasScrolling"
                  aria-controls="offcanvasScrolling"
                />
              </li>
            </ul>
            <form className="d-flex">
              <i class="fa fa-bell mt-2 me-3" style={{ fontSize: "22px" }} />

              <div class="dropdown">
                <button class="btn btn-outline-light dropdown-toggle border-0 text-dark" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                  <img src={dropdownlogo} alt="Logo" id="headerdropdown" className="rounded-circle me-2" />Laura johnson
                </button>
                <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
                  <li><a class="dropdown-item active" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                </ul>
              </div>
            </form>
          </div>
        </div>
      </nav>

      {/* modal */}
      <div
        class="modal fade"
        id="exampleModalToggle"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel"
        tabIndex="-1"
      >
        <div class="modal-dialog modal-lg modal-dialog-centered">
          <div
            class="modal-content"
            style={{ height: "25rem", width: "38rem", marginLeft: "60px" }}
          >
            <div class="modal-body">
              <img src={logo1} alt="Logo" id="headerlogo1" />
              <h5 className="modalheading">Add E 10 or more</h5>
              <div className="d-flex justify-content-center">
                <p className="modalpara lh-base">
                  Before we hook up with an account,you need to add money.you
                  can spend or withdraw this money later
                </p>
              </div>

              <div class="row g-2 mt-2">
                <div class="col-sm-6">
                  <button type="submit" class="mb-3 rounded-pill" id="skipbtn">
                    Skip
                  </button>
                </div>
                <div class="col">
                  <button
                    type="submit"
                    class="mb-3 rounded-pill"
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
        class="btn btn-primary"
        data-bs-toggle="modal"
        href="#exampleModalToggle"
        role="button"
      >
        Open first modal
      </a>

      {/* Side nav */}

      <div
        class="offcanvas offcanvas-start"
        data-bs-scroll="true"
        data-bs-backdrop="false"
        tabindex="-1"
        id="offcanvasScrolling"
        aria-labelledby="offcanvasScrollingLabel"
      >

        <div class="offcanvas-body">
          <div class="sidebar fw-bold">
            <a
              class="active"
              data-bs-toggle="collapse"
              href="#multiCollapseExample1"
              role="button"
              aria-expanded="false"
              aria-controls="multiCollapseExample1"
            >
              <i class='fas fa-wallet me-3'></i>
              Accounts
            </a>
            <a href="#news">
              <i class="fa fa-bar-chart me-3 sidebaricons"></i>Analytics
            </a>
            <a href="#contact"><i class="fa fa-refresh me-3 sidebaricons"></i>Payments</a>
            <a href="#about"><i class="fa fa-credit-card me-3 sidebaricons"></i>Cards</a>
            <a href="#about">
              <i class="fa fa-gears me-3 sidebaricons"></i>Settings
            </a>
          </div>
        </div>
      </div>

      {/* Dashboard */}

      <div className="breadcrumb">
        <nav aria-label="breadcrumb">
          <h4 className="dashboardheading ms-5 mb-5 mt-1"> <i class="fa fa-arrow-left me-3"></i>Add Money</h4>
          <ol class="breadcrumb ms-5">
            <li class="breadcrumb-item">
              <a href="#">Accounts</a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              Add money
            </li>
          </ol>
        </nav>
      </div>
      <div class="row">
        <div class="col">
          <div class="collapse multi-collapse" id="multiCollapseExample1">
            <div
              class="card"
              style={{ height: "34rem", width: "400px", marginLeft: "275px" }}
            >
              <div class="card card-body">
                <h5>How would you like to add money ?</h5>
                <p className="mt-5 ms-2 cardparagraph" style={{ color: "#1494B8" }}><i class='fas fa-plus-circle me-3' style={{ fontSize: "22px" }}></i>Add debit or credit card</p>
                <hr class="dropdown-divider"></hr>
                <p className="ms-2 cardparagraph"><i class='fas fa-university me-3' style={{ fontSize: "22px" }}></i>Transfer to your payo account</p>
                <hr class="dropdown-divider"></hr>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Second;
