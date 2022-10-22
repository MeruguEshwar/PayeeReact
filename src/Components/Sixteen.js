import React from "react";
import logo from "../Images/payo.jpg";
import dropdownlogo from "../Images/eshu.jpg";
import Rectangle from "../Images/Rectangle.png";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import NoPath from "../Images/CardGBP.png";

function Sixteen() {
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
              <i className="fa fa-bell mt-2 me-3" style={{ fontSize: "22px" }} />

              <div className="dropdown">
                <button
                  className="btn btn-outline-light dropdown-toggle border-0 text-dark"
                  type="button"
                  id="dropdownMenuButton2"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src={dropdownlogo}
                    alt="Logo"
                    id="headerdropdown"
                    className="rounded-circle me-2"
                  />
                  Laura johnson
                </button>
                <ul
                  className="dropdown-menu dropdown-menu-dark"
                  aria-labelledby="dropdownMenuButton2"
                >
                  <li>
                    <a className="dropdown-item active" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                </ul>
              </div>
            </form>
          </div>
        </div>
      </nav>

      {/* Side nav */}

      <div
        className="offcanvas offcanvas-start"
        data-bs-scroll="true"
        data-bs-backdrop="false"
        tabindex="-1"
        id="offcanvasScrolling"
        aria-labelledby="offcanvasScrollingLabel"
      >
        <div className="offcanvas-body">
          <div className="sidebar fw-bold">
            <a
              className="active"
              data-bs-toggle="collapse"
              href="#multiCollapseExample1"
              role="button"
              aria-expanded="false"
              aria-controls="multiCollapseExample1"
            >
              <i className="fas fa-wallet me-3"></i>
              Accounts
            </a>
            <a href="#news">
              <i className="fa fa-bar-chart me-3 sidebaricons"></i>Analytics
            </a>
            <a href="#contact">
              <i className="fa fa-refresh me-3 sidebaricons"></i>Payments
            </a>
            <a href="#about">
              <i className="fa fa-credit-card me-3 sidebaricons"></i>Cards
            </a>
            <a href="#about">
              <i className="fa fa-gears me-3 sidebaricons"></i>Settings
            </a>
          </div>
        </div>
      </div>

      {/* Dashboard */}

      <div className="row">
        <div className="col">
          <div className="breadcrumb">
            <nav aria-label="breadcrumb">
              <h4 className="dashboardheading ms-5 mb-5 mt-5 fs-6">Accounts</h4>
              <ol className="breadcrumb ms-5">
                <li className="breadcrumb-item breadcrump">
                  <a href="#" className="text-muted text-decoration-none">
                    Accounts
                  </a>
                </li>
              </ol>
            </nav>
          </div>
        </div>
        <div className="col">
          <div className="row g-2 mt-2 ms-2">
            <div className="col-sm-4">
              <button type="submit" className="rounded-pill cancelbtn ms-5">
                <i className="fa fa-plus me-2"></i>Add Money
              </button>
            </div>
            <div className="col-sm-4 ">
              <button type="submit" className="rounded-pill exchange">
                <i className="fa fa-refresh fa-spin me-2"></i>
                Exchange
              </button>
            </div>
            <div className="col-sm-4 me-0">
              <button type="submit" className="rounded-pill cancelbtn">
                <i className="fa fa-arrow-right me-2"></i>
                Send
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="card DashboardCard border border-0"
        style={{ width: "76rem", height: "36rem" }}
      >
        <div className="card-body">
          <Tabs
            defaultActiveKey="profile"
            id="justify-tab-example"
            className="border-bottom"
          >
            <Tab eventKey="home" title="Accounts">
              <div className="row g-2 mt-2">
                <div className="col-sm-7">
                  <p className="ms-5 fw-bold fs-5">All accounts</p>
                </div>
                <div className="col-sm-2">
                  <p className="ms-5 text-primary fw-bold">Add new account</p>
                </div>
                <div className="col-sm-1">
                  <p>
                    <i
                      className="far fa-square ms-0"
                      style={{ color: "blue" }}
                    ></i>
                  </p>
                </div>
                <div className="col-sm-1">
                  <p>
                    <i className="fas fa-bars me-0"></i>
                  </p>
                </div>
                <div className="col-sm-1">
                  <p>
                    <i
                      className="fas fa-search"
                      data-bs-toggle="offcanvas"
                      data-bs-target="#offcanvasRight"
                      aria-controls="offcanvasRight"
                    ></i>
                  </p>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <div
                    className="card mt-3 smallcard1"
                    style={{ width: "28rem", height: "8rem" }}
                  >
                    <div className="card-body">
                      <div className="row mb-4">
                        <div className="col-sm-6">
                          <label for="inputEmail4" className="form-label">
                            Euro
                          </label>
                        </div>
                        <div className="col-sm-6">
                          <img
                            src={Rectangle}
                            alt="Logo"
                            className="rectanglelogo"
                          />
                        </div>
                      </div>

                      <div className="row">
                        <div className="col">
                          <label for="inputEmail4" className="form-label text-muted fw-bold fs-5">
                            Euro E0.00
                          </label>
                        </div>
                        <div className="col">
                          <button
                            type="submit"
                            className="mb-3 rounded-pill"
                            id="cardActive"
                          >
                            Active
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>


                <div className="col">
                  <div
                    className="card mt-3 smallcard2"
                    style={{ width: "28rem", height: "8rem" }}
                  >
                    <div className="card-body">
                      <div className="row mb-4">
                        <div className="col-sm-6">
                          <label for="inputEmail4" className="form-label">
                            Pound Sterling
                          </label>
                        </div>
                        <div className="col-sm-6">
                          <img
                            src={NoPath}
                            alt="Logo"
                            className="rectanglelogo"
                          />
                        </div>
                      </div>

                      <div className="row">
                        <div className="col">
                          <label for="inputEmail4" className="form-label text-muted fw-bold fs-5">
                            GBP 0.00
                          </label>
                        </div>
                        <div className="col">
                          <button
                            type="submit"
                            className="mb-3 rounded-pill"
                            id="cardActive"
                          >
                            Active
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Tab>

            <Tab eventKey="profile" title="Transaction">
              <h4 className=" ms-5 mb-5 mt-5 fs-6">Accounts</h4>
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default Sixteen;
