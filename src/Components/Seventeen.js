import React from 'react';
import logo from "../Images/payo.jpg";
import dropdownlogo from "../Images/eshu.jpg";
import Rectangle from "../Images/Rectangle.png";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import NoPath from "../Images/CardGBP.png";

function Seventeen() {
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
                tabIndex="-1"
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
                    <div className="row g-2 mt-1 ms-2">
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

            {/* cards */}
            <div
                className="card DashboardCard border border-0"
                style={{ width: "76rem", height: "36rem" }}
            >
                <div className="card-body">
                    <Tabs
                        defaultActiveKey="profile"
                        id="justify-tab-example"
                        className="border-bottom "
                    >
                        <Tab eventKey="home" title="Accounts">
                            <div className="row g-2 mt-2">
                                <div className="col-sm-6">
                                    <p className="ms-5 fw-bold fs-5">All accounts</p>
                                </div>
                                <div className="col-sm-2">
                                    <p className="ms-2 text-primary fw-bold">Add new account</p>
                                </div>
                                <div className="col-sm-1">
                                    <p>
                                        <i
                                            className="far fa-square"
                                            style={{ color: "blue", marginLeft: "-30px" }}
                                        ></i>
                                    </p>
                                </div>
                                <div className="col-sm-1">
                                    <p>
                                        <i className="fas fa-bars" style={{ marginLeft: "-90px" }}></i>
                                        {/* <i className="fas fa-search"></i> */}
                                    </p>
                                </div>
                                <div className="col-sm-2">
                                    <input type="text" name="search" className='search' />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col">
                                    <div
                                        className="card mt-3 mb-3 smallcard1"
                                        style={{ width: "61rem", height: "4rem" }}
                                    >
                                        <div className="card-body">
                                            <div className="row mb-4">
                                                <div className="col-sm-3">
                                                    <img
                                                        src={Rectangle}
                                                        alt="Logo"
                                                        className="rectanglelogo1"
                                                    />
                                                </div>
                                                <div className="col-sm-3">
                                                    <label htmlFor="inputEmail4" className="form-label text-muted fw-bold fs-5 Eurolabel">
                                                        Euro
                                                    </label>
                                                </div>
                                                <div className="col-sm-3">
                                                    <button
                                                        type="submit"
                                                        className="mt-1 rounded-pill"
                                                        id="cardActive1"
                                                    >
                                                        Active
                                                    </button>
                                                </div>

                                                <div className="col-sm-3">
                                                    <label htmlFor="inputEmail4" className="form-label text-muted fw-bold fs-5 ms-5">
                                                        Euro E0.00
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="col">
                                    <div
                                        className="card smallcard1"
                                        style={{ width: "61rem", height: "4rem" }}
                                    >
                                        <div className="card-body">
                                            <div className="row mb-4">
                                                <div className="col-sm-3">
                                                    <img
                                                        src={NoPath}
                                                        alt="Logo"
                                                        className="rectanglelogo1"
                                                    />
                                                </div>

                                                <div className="col-sm-3">
                                                    <label htmlFor="inputEmail4" className="form-label text-muted fw-bold fs-5 Eurolabel">
                                                        Pound Sterling
                                                    </label>
                                                </div>

                                                <div className="col-sm-3">
                                                    <button
                                                        type="submit"
                                                        className="mb-3 rounded-pill"
                                                        id="cardActive1"
                                                    >
                                                        Active
                                                    </button>
                                                </div>

                                                <div className="col-sm-3">
                                                    <label htmlFor="inputEmail4" className="form-label text-muted fw-bold fs-5 ms-5">
                                                        GBP 0.00
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Tab>

                        <Tab eventKey="profile" title="Transaction">
                            <div className='container'>
                                <div class="row mt-3">
                                    <div class="col-sm-4">
                                        <div class="btn-group">
                                            <button type="button" class="btn btn-outline-light text-dark dropdown-toggle fw-bold" data-bs-toggle="dropdown" aria-expanded="false">
                                                All Accounts transactions
                                            </button>
                                            <ul class="dropdown-menu">
                                                <li><a class="dropdown-item" href="#">Euro</a></li>
                                                <li><hr class="dropdown-divider" /></li>
                                                <li><a class="dropdown-item" href="#">Pound sterling</a></li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div class="col-sm-3">
                                        <div class="btn-group">
                                            <button type="button" class="btn btn-outline-light text-dark dropdown-toggle fw-bold" data-bs-toggle="dropdown" aria-expanded="false">
                                                Last transactions
                                            </button>
                                            <ul class="dropdown-menu">
                                                <li><a class="dropdown-item" href="#">Last one month</a></li>
                                                <li><hr class="dropdown-divider" /></li>
                                                <li><a class="dropdown-item" href="#">Last 3 months</a></li>
                                                <li><hr class="dropdown-divider" /></li>
                                                <li><a class="dropdown-item" href="#">Last 6 months</a></li>
                                                <li><hr class="dropdown-divider" /></li>
                                                <li><a class="dropdown-item" href="#">Select time period</a></li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div class="col-sm-2 mt-2">
                                        <h5>Get Statment</h5>
                                    </div>

                                    <div class="col-sm-3 text-center mt-2">
                                        <h5><i class="fa fa-search ms-1"></i></h5>
                                    </div>
                                </div>

                                <div class="row border-bottom cursor-pointer" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    <p className='text-muted date'>12 July 2019</p>
                                    <div class="col-sm-10">
                                        <i class="fa fa-user-circle-o" style={{ fontSize: "28px" }}></i>
                                        <nav aria-label="breadcrumb">
                                            <h5 className="dashboardheading ms-5 mb-5">To marvin Blazhevski</h5>
                                            <ol className="breadcrumb ms-5">
                                                <li className="breadcrumb-item breadcrump3 mb-0">
                                                    <a href="#" className="text-dark text-decoration-none ">
                                                        12:35:00PM
                                                    </a>
                                                </li>
                                            </ol>
                                        </nav>
                                    </div>
                                    <div class="col-sm-2 text-danger">
                                        <h5>-25<i class='fas fa-euro-sign' style={{ fontSize: "17px" }}></i></h5>
                                    </div>
                                </div>

                                <div class="row mt-3 border-bottom">
                                    <div class="col-sm-10">
                                        <i class='fas fa-wallet' style={{ fontSize: "28px" }}></i>
                                        <nav aria-label="breadcrumb">
                                            <h5 className="dashboardheading ms-5 mb-5">Added money to wallet</h5>
                                            <ol className="breadcrumb ms-5">
                                                <li className="breadcrumb-item breadcrump3 mb-0">
                                                    <a href="#" className="text-dark text-decoration-none ">
                                                        12:35:00PM
                                                    </a>
                                                </li>
                                            </ol>
                                        </nav>
                                    </div>
                                    <div class="col-sm-2 text-success">
                                        <h5>+225<i class='fas fa-euro-sign' style={{ fontSize: "17px" }}></i></h5>
                                    </div>
                                </div>


                                <div class="row border-bottom">
                                    <p className='text-muted date'>12 July 2019</p>
                                    <div class="col-sm-10">
                                        <i class='fas fa-store-alt' style={{ fontSize: "27px" }}></i>
                                        <nav aria-label="breadcrumb">
                                            <h5 className="dashboardheading ms-5 mb-5">Paid to Biriyaniwala</h5>
                                            <ol className="breadcrumb ms-5">
                                                <li className="breadcrumb-item breadcrump3 mb-0">
                                                    <a href="#" className="text-dark text-decoration-none ">
                                                        12:35:00PM
                                                    </a>
                                                </li>
                                            </ol>
                                        </nav>
                                    </div>
                                    <div class="col-sm-2 text-danger">
                                        <h5>-400<i class='fas fa-euro-sign' style={{ fontSize: "17px" }}></i></h5>
                                    </div>
                                </div>

                                <div class="row mt-3 border-bottom">
                                    <div class="col-sm-10">
                                        <i class='fas fa-wallet' style={{ fontSize: "28px" }}></i>
                                        <nav aria-label="breadcrumb">
                                            <h5 className="dashboardheading ms-5 mb-5">Added money to wallet</h5>
                                            <ol className="breadcrumb ms-5">
                                                <li className="breadcrumb-item breadcrump3 mb-0">
                                                    <a href="#" className="text-dark text-decoration-none ">
                                                        12:35:00PM
                                                    </a>
                                                </li>
                                            </ol>
                                        </nav>
                                    </div>
                                    <div class="col-sm-2 text-success">
                                        <h5>+225<i class='fas fa-euro-sign' style={{ fontSize: "17px" }}></i></h5>
                                    </div>
                                </div>

                                <div class="row mt-2 border-bottom">
                                    <div class="col-sm-10">
                                        <i class="fa fa-user-circle-o" style={{ fontSize: "28px" }}></i>
                                        <nav aria-label="breadcrumb">
                                            <h4 className="dashboardheading ms-5 mb-5">To marvin Blazhevski</h4>
                                            <ol className="breadcrumb ms-5">
                                                <li className="breadcrumb-item breadcrump3 mb-0">
                                                    <a href="#" className="text-dark text-decoration-none ">
                                                        12:35:00PM
                                                    </a>
                                                </li>
                                            </ol>
                                        </nav>
                                    </div>
                                    <div class="col-sm-2 text-danger">
                                        <h5>-25<i class='fas fa-euro-sign' style={{ fontSize: "17px" }}></i></h5>
                                    </div>
                                </div>


                                <div class="row mt-3 border-bottom">
                                    <div class="col-sm-10">
                                        <i class='fas fa-wallet' style={{ fontSize: "28px" }}></i>
                                        <nav aria-label="breadcrumb">
                                            <h5 className="dashboardheading ms-5 mb-5">Added money to wallet</h5>
                                            <ol className="breadcrumb ms-5">
                                                <li className="breadcrumb-item breadcrump3 mb-0">
                                                    <a href="#" className="text-dark text-decoration-none ">
                                                        12:35:00PM
                                                    </a>
                                                </li>
                                            </ol>
                                        </nav>
                                    </div>
                                    <div class="col-sm-2 text-success">
                                        <h5>+225<i class='fas fa-euro-sign' style={{ fontSize: "17px" }}></i></h5>
                                    </div>
                                </div>
                            </div>


                            {/* modal       */}
                            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-dialog-centered">
                                    <div class="modal-content" style={{ height: "25rem", width: "24rem" }}>
                                        <div class="modal-body lh-sm">
                                            <div class="text-center">
                                                <i class="fa fa-user-circle-o mt-3 mb-3" style={{ fontSize: "60px" }}></i>
                                                <p className='fw-bold'>Transferred to Marvin Blazhevski</p>
                                                <h5 className='text-danger'>-25<i class='fas fa-euro-sign' style={{ fontSize: "17px" }}></i></h5>
                                            </div>

                                            <div class="row ms-4 mb-0">
                                                <div class="col-sm-6 text-muted">
                                                    <p>Date</p>
                                                </div>
                                                <div class="col-sm-5 fw-bold">
                                                    <p>12 July 2019</p>
                                                </div>
                                            </div>

                                            <div class="row ms-4">
                                                <div class="col-sm-8 text-muted">
                                                    <p>Amont</p>
                                                </div>
                                                <div class="col-sm-4">
                                                    <div class="fw-bold">
                                                        <p>25<i class='fas fa-euro-sign' style={{ fontSize: "14px" }}></i></p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="row ms-4">
                                                <div class="col-sm-7 text-muted">
                                                    <p>Fee</p>
                                                </div>
                                                <div class="col-sm-5 fw-bold">
                                                    <p>No Fee</p>
                                                </div>
                                            </div>


                                            <div class="row ms-4">
                                                <div class="col-sm-8 text-muted">
                                                    <p>Total</p>
                                                </div>
                                                <div class="col-sm-4">
                                                    <div class="fw-bold">
                                                        <p>25<i class='fas fa-euro-sign' style={{ fontSize: "14px" }}></i></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="row justify-content-center">
                                            <div class="col-sm-5">
                                                <button type="submit" class="rounded-pill GetStatment">
                                                    Close
                                                </button>
                                            </div>
                                            <div class="col-sm-5">
                                                <button type="submit" class="rounded-pill GetStatment">
                                                    GetStatment
                                                </button>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </Tab>
                    </Tabs>
                </div>
            </div>
        </div>
    )
}

export default Seventeen
