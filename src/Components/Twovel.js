import React from "react";
import logo from "../Images/payo.jpg";
import NoPath from "../Images/NoPath.png";
import Forient from "../Images/Forient.png";
import Kourna from "../Images/Kourna.png";
import DKK from "../Images/DKK.png";
import RON from "../Images/RON.png";
import GBP from "../Images/GBP.png";
import SKK from "../Images/SKK.png";
import PLN from "../Images/PLN.png";
import dropdownlogo from "../Images/eshu.jpg";
import Rectangle from "../Images/Rectangle.png";
import Kuna from "../Images/Kuna.png";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

function Twovel() {
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
              <i class="fa fa-bell mt-2 me-3" style={{ fontSize: "22px" }} />

              <div class="dropdown">
                <button
                  class="btn btn-outline-light dropdown-toggle border-0 text-dark"
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
                  class="dropdown-menu dropdown-menu-dark"
                  aria-labelledby="dropdownMenuButton2"
                >
                  <li>
                    <a class="dropdown-item active" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
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
              <i class="fas fa-wallet me-3"></i>
              Accounts
            </a>
            <a href="#news">
              <i class="fa fa-bar-chart me-3 sidebaricons"></i>Analytics
            </a>
            <a href="#contact">
              <i class="fa fa-refresh me-3 sidebaricons"></i>Payments
            </a>
            <a href="#about">
              <i class="fa fa-credit-card me-3 sidebaricons"></i>Cards
            </a>
            <a href="#about">
              <i class="fa fa-gears me-3 sidebaricons"></i>Settings
            </a>
          </div>
        </div>
      </div>

      {/* Dashboard */}

      <div class="row">
        <div class="col">
          <div className="breadcrumb">
            <nav aria-label="breadcrumb">
              <h4 className="dashboardheading ms-5 mb-5 mt-5 fs-6">Accounts</h4>
              <ol class="breadcrumb ms-5">
                <li class="breadcrumb-item breadcrump">
                  <a href="#" className="text-muted text-decoration-none">
                    Accounts
                  </a>
                </li>
              </ol>
            </nav>
          </div>
        </div>
        <div class="col">
          <div class="row g-2 mt-2 ms-2">
            <div class="col-sm-4">
              <button type="submit" class="rounded-pill cancelbtn ms-5">
                <i class="fa fa-plus me-2"></i>Add Money
              </button>
            </div>
            <div class="col-sm-4 ">
              <button type="submit" class="rounded-pill exchange">
                <i class="fa fa-refresh fa-spin me-2"></i>
                Exchange
              </button>
            </div>
            <div class="col-sm-4 me-0">
              <button type="submit" class="rounded-pill cancelbtn">
                <i class="fa fa-arrow-right me-2"></i>
                Send
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        class="card DashboardCard border border-0"
        style={{ width: "76rem", height: "36rem" }}
      >
        <div class="card-body">
          <Tabs
            defaultActiveKey="profile"
            id="justify-tab-example"
            className="border-bottom"
          >
            <Tab eventKey="home" title="Accounts">
              <div class="row g-2 mt-2">
                <div class="col-sm-7">
                  <p className="ms-5 fw-bold fs-5">All accounts</p>
                </div>
                <div class="col-sm-2">
                  <p className="ms-5 text-primary fw-bold">Add new account</p>
                </div>
                <div class="col-sm-1">
                  <p>
                    <i
                      className="far fa-square ms-0"
                      style={{ color: "blue" }}
                    ></i>
                  </p>
                </div>
                <div class="col-sm-1">
                  <p>
                    <i class="fas fa-bars me-0"></i>
                  </p>
                </div>
                <div class="col-sm-1">
                  <p>
                    <i
                      class="fas fa-search"
                      data-bs-toggle="offcanvas"
                      data-bs-target="#offcanvasRight"
                      aria-controls="offcanvasRight"
                    ></i>
                  </p>
                </div>
              </div>

              <div
                class="card ms-5 mt-3 smallcard border-bottom border-primary  border-3"
                style={{ width: "24rem", height: "8rem" }}
              >
                <div class="card-body">
                  <div class="row mb-4">
                    <div class="col-sm-6">
                      <label for="inputEmail4" class="form-label">
                        Euro
                      </label>
                    </div>
                    <div class="col-sm-6">
                      <img
                        src={Rectangle}
                        alt="Logo"
                        className="rectanglelogo"
                      />
                    </div>
                  </div>

                  <div class="row">
                    <div class="col">
                      <label for="inputEmail4" class="form-label">
                        Euro E0.00
                      </label>
                    </div>
                    <div class="col">
                      <button
                        type="submit"
                        class="mb-3 rounded-pill"
                        id="cardActive"
                      >
                        Active
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Tab>

            <Tab eventKey="profile" title="Transaction">
              <h4 className=" ms-5 mb-5 mt-5 fs-6">Accounts</h4>
            </Tab>
          </Tabs>

          {/* Right bar */}
          <div
            class="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasRight"
            aria-labelledby="offcanvasRightLabel"
          >
            <div class="offcanvas-header mt-5 text-muted">
              <h5 id="offcanvasRightLabel">
                Choose which currency account you would like to add
              </h5>
            </div>
            <div class="col-sm-10 ms-3">
              <input
                type="text"
                class="form-control"
                id="validationDefault05"
                placeholder="Search Currency"
              />

              <div class="row">
                <div class="col-sm-3">
                  <img
                    src={NoPath}
                    alt="Logo"
                    className="rounded-circle me-2 Bulgariaimg"
                  />
                </div>
                <div class="col-sm-9">
                  <div className="breadcrumbrightbar">
                    <nav aria-label="breadcrumb">
                      <h4 className="heading mb-5 mt-4 fs-6">LEV BGN</h4>
                      <ol class="breadcrumb ms-0">
                        <li class="breadcrumb-item breadcrump">
                          <a
                            href="#"
                            className="text-muted text-decoration-none"
                          >
                            Bulgaria
                          </a>
                        </li>
                      </ol>
                    </nav>
                  </div>
                </div>
              </div>
              <hr className="mb-1 mt-0" />

              <div class="row">
                <div class="col-sm-3">
                  <img
                    src={Kuna}
                    alt="Logo"
                    className="rounded-circle me-2 Kunaimg"
                  />
                </div>
                <div class="col-sm-9">
                  <div className="breadcrumbrightbar ">
                    <nav aria-label="breadcrumb">
                      <h4 className="heading fs-6">Kuna HRK</h4>
                      <ol class="breadcrumb ms-0">
                        <li class="breadcrumb-item breadcrump1">
                          <a
                            href="#"
                            className="text-muted text-decoration-none"
                          >
                            Croatla
                          </a>
                        </li>
                      </ol>
                    </nav>
                  </div>
                </div>
              </div>

              <hr className="mb-1 mt-0" />
              <div class="row">
                <div class="col-sm-3">
                  <img
                    src={Kourna}
                    alt="Logo"
                    className="rounded-circle me-2 Kunaimg"
                  />
                </div>
                <div class="col-sm-9">
                  <div className="breadcrumbrightbar">
                    <nav aria-label="breadcrumb">
                      <h4 className="heading fs-6">Koruna</h4>
                      <ol class="breadcrumb ms-0">
                        <li class="breadcrumb-item breadcrump2">
                          <a
                            href="#"
                            className="text-muted text-decoration-none"
                          >
                            Czech Republic
                          </a>
                        </li>
                      </ol>
                    </nav>
                  </div>
                </div>
              </div>

              <hr className="mb-1 mt-0" />
              <div class="row">
                <div class="col-sm-3">
                  <img
                    src={Forient}
                    alt="Logo"
                    className="rounded-circle me-2 Kunaimg"
                  />
                </div>
                <div class="col-sm-9">
                  <div className="breadcrumbrightbar">
                    <nav aria-label="breadcrumb">
                      <h4 className="heading mb-2 fs-6">Forint HUF</h4>
                      <ol class="breadcrumb ms-0">
                        <li class="breadcrumb-item breadcrump2">
                          <a
                            href="#"
                            className="text-muted text-decoration-none"
                          >
                            Hungary
                          </a>
                        </li>
                      </ol>
                    </nav>
                  </div>
                </div>
              </div>

              <hr className="mb-1 mt-0" />
              <div class="row">
                <div class="col-sm-3">
                  <img
                    src={PLN}
                    alt="Logo"
                    className="rounded-circle me-2 Kunaimg"
                  />
                </div>
                <div class="col-sm-9">
                  <div class="col-sm-9">
                    <div className="breadcrumbrightbar">
                      <nav aria-label="breadcrumb">
                        <h4 className="heading mb-2 fs-6">Zloty PLN</h4>
                        <ol class="breadcrumb ms-0">
                          <li class="breadcrumb-item breadcrump2">
                            <a
                              href="#"
                              className="text-muted text-decoration-none"
                            >
                              Poland
                            </a>
                          </li>
                        </ol>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>

              <hr className="mb-1 mt-0" />
              <div class="row">
                <div class="col-sm-3">
                  <img
                    src={RON}
                    alt="Logo"
                    className="rounded-circle me-2 Kunaimg"
                  />
                </div>
                <div class="col-sm-9">
                  <div class="col-sm-9">
                    <div className="breadcrumbrightbar">
                      <nav aria-label="breadcrumb">
                        <h4 className="heading mb-2 fs-6">Leu RON</h4>
                        <ol class="breadcrumb ms-0">
                          <li class="breadcrumb-item breadcrump2">
                            <a
                              href="#"
                              className="text-muted text-decoration-none"
                            >
                              Romania
                            </a>
                          </li>
                        </ol>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>

              <hr className="mb-1 mt-0" />
              <div class="row">
                <div class="col-sm-3">
                  <img
                    src={SKK}
                    alt="Logo"
                    className="rounded-circle me-2 Kunaimg"
                  />
                </div>
                <div class="col-sm-9">
                  <div className="breadcrumbrightbar">
                    <nav aria-label="breadcrumb">
                      <h4 className="heading mb-2 fs-6">Krona SEK</h4>
                      <ol class="breadcrumb ms-0">
                        <li class="breadcrumb-item breadcrump2">
                          <a
                            href="#"
                            className="text-muted text-decoration-none"
                          >
                            Sweden
                          </a>
                        </li>
                      </ol>
                    </nav>
                  </div>
                </div>
              </div>

              <hr className="mb-1 mt-0" />
              <div class="row">
                <div class="col-sm-3">
                  <img
                    src={DKK}
                    alt="Logo"
                    className="rounded-circle me-2 Kunaimg"
                  />
                </div>
                <div class="col-sm-9">
                  <div className="breadcrumbrightbar">
                    <nav aria-label="breadcrumb">
                      <h4 className="heading mb-2 fs-6">Krona DKK</h4>
                      <ol class="breadcrumb ms-0">
                        <li class="breadcrumb-item breadcrump2">
                          <a
                            href="#"
                            className="text-muted text-decoration-none"
                          >
                            Denmark
                          </a>
                        </li>
                      </ol>
                    </nav>
                  </div>
                </div>
              </div>

              <hr className="mb-1 mt-0" />
              <div class="row">
                <div class="col-sm-3">
                  <img
                    src={GBP}
                    alt="Logo"
                    className="rounded-circle me-2 Kunaimg"
                  />
                </div>
                <div class="col-sm-9">
                  <div className="breadcrumbrightbar">
                    <nav aria-label="breadcrumb">
                      <h4 className="heading mb-2 fs-6">Pound sterling GBP</h4>
                      <ol class="breadcrumb ms-">
                        <li class="breadcrumb-item breadcrump2">
                          <a
                            href="#"
                            className="text-muted text-decoration-none"
                          >
                            United Kingdom
                          </a>
                        </li>
                      </ol>
                    </nav>
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

export default Twovel;
