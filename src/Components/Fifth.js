import React from 'react';
import logo from "../Images/payo.jpg";
import logo1 from "../Images/modelogo.jpg";
import dropdownlogo from "../Images/eshu.jpg";
import masterCard from "../Images/mastercard-logo.png";

function Fifth() {
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
                            style={{ height: "35rem", width: "400px", marginLeft: "275px" }}
                        >
                            <div class="card card-body" >
                                <h5>How would you like to add money ?</h5>
                                <a className="mt-2 ms-2 cardparagraph text-decoration-none" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample"><i class='fas fa-plus-circle me-3' style={{ fontSize: "22px" }}></i>Add debit or credit card</a>
                                <hr class="dropdown-divider"></hr>
                                <p className="ms-2 mb-0 cardparagraph"><i class='fas fa-university me-3' style={{ fontSize: "22px" }}></i>Transfer to your payo account</p>
                                <hr class="dropdown-divider"></hr>


                                <div class="card mt-3" style={{ height: "7rem" }} id="cardNumberhover">
                                    <div class="card-body">
                                        <form class="row g-3">
                                            <div class="col-md-10">
                                                <h6 class="card-title text-muted ms-2">Card Number</h6>
                                            </div>
                                            <div class="col-md-2">
                                                <i class="fa fa-info-circle ms-3"></i>
                                            </div>
                                        </form>
                                        <p className='ms-2 mb-0'>**** **** **** 6547</p>
                                        <form class="row g-3">
                                            <div class="col-md-10">
                                                <h6 class="card-title mt-1">Expresso Bank LTD</h6>
                                            </div>
                                            <div class="col-md-2">
                                                <img src={masterCard} alt="pls wait some time" className="mastercardlogo ms-2" />
                                            </div>
                                        </form>

                                    </div>
                                </div>

                                <div class="card" style={{ height: "7rem", marginTop: "-15px" }} id="cardNumberhover">
                                    <div class="card-body">
                                        <form class="row g-3">
                                            <div class="col-md-10">
                                                <h6 class="card-title text-muted ms-2">Card Number</h6>
                                            </div>
                                            <div class="col-md-2">
                                                <i class="fa fa-info-circle ms-3"></i>
                                            </div>
                                        </form>
                                        <p className='ms-2 mb-0'>**** **** **** 6547</p>
                                        <form class="row g-3">
                                            <div class="col-md-10">
                                                <h6 class="card-title mt-1">Expresso Bank LTD</h6>
                                            </div>
                                            <div class="col-md-2">
                                                <img src={masterCard} alt="pls wait some time" className="mastercardlogo ms-2" />
                                            </div>
                                        </form>

                                    </div>
                                </div>

                                <div class="card" style={{ height: "6rem", marginTop: "-15px" }} id="cardNumberhover">
                                    <div class="card-body">
                                        <form class="row g-3">
                                            <div class="col-md-10">
                                                <h6 class="card-title text-muted ms-2">Card Number</h6>
                                            </div>
                                            <div class="col-md-2">
                                                <i class="fa fa-info-circle ms-3"></i>
                                            </div>
                                        </form>
                                        <p className='ms-2 mb-0'>**** **** **** 6547</p>

                                        <form class="row g-3">
                                            <div class="col-md-10">
                                                <h6 class="card-title mt-1">Expresso Bank LTD</h6>
                                            </div>
                                            <div class="col-md-2">
                                                <img src={masterCard} alt="pls wait some time" className="mastercardlogo ms-2" />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* Second main card */}
            <div class="collapse mt-3" id="collapseExample">
                <div
                    class="card"
                    style={{ height: "35rem", width: "400px", marginLeft: "700px", marginTop: "-515px" }}
                >
                    <div class="card card-body">
                        <form class="row g-3">
                            <h6 class="card-title ms-1 mb-2 text-muted">Choose currency and amount</h6>
                            <div class="col-lg-12">
                                <div class="btn-group">
                                    <button type="button" class="btn btn-outline-light text-start border border-muted text-dark" id="currenceydropdown">Choose currency</button>
                                    <button type="button" class="btn btn-outline-light text-dark dropdown-toggle border border-muted dropdown-toggle-split " id="dropdownMenuReference" data-bs-toggle="dropdown" aria-expanded="false" data-bs-reference="parent">
                                        <span class="visually-hidden">Toggle Dropdown</span>
                                    </button>
                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuReference">
                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                        <li><a class="dropdown-item" href="#">Another action</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <input type="password" placeholder="Enter Amont" class="form-control" id="inputPassword4" />
                                <label class="form-label text-muted labelnote">Note:minimum top-up:E 10</label>
                            </div>

                            <div class="col-md-12 mt-3">
                                <hr class="dropdown-divider" />
                                <i class='fas fa-wallet' style={{ fontSize: "23px", marginTop: "10px", marginLeft: "15px" }}></i> <p className='text-muted' id="gridparagraph1">Expresso Bank LTD</p>
                                <p className='text-muted mastercard ms-5 mb-0'>MasterCard 6854</p>
                                <hr class="dropdown-divider" />
                            </div>


                            <div class="row g-2 mt-3 ms-1">
                                <div class="col-sm-6">
                                    <button type="submit" class="mb-3 rounded-pill cancelbtn">
                                        Cancel
                                    </button>
                                </div>
                                <div class="col-sm-6">
                                    <button
                                        type="submit"
                                        class="mb-3 rounded-pill savebtn"
                                    >
                                       Continue
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Fifth
