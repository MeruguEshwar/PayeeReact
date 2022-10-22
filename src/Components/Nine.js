import React, { useState } from 'react';
import logo from "../Images/payo.jpg";
import logo1 from "../Images/modelogo.jpg";
import dropdownlogo from "../Images/eshu.jpg";
import masterCard from "../Images/mastercard-logo.png";
import cardimg from '../Images/cardimg.jpg';


function Nine() {

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
                        style={{ height: "18rem", width: "28rem", marginLeft: "60px" }}
                    >
                        <div class="modal-body">
                            {/* <img src={logo1} alt="Logo" id="headerlogo1" /> */}
                            <h5 className="text-center mt-4 text-muted">Delete Card?</h5>
                            <div className="d-flex justify-content-center">
                                <p className="lh-base text-center fs-5">
                                   This card will be removed from your top-up methods 
                                </p>
                            </div>

                            <div class="row g-2 mt-2 ms-2">
                                <div class="col-sm-6">
                                    <button type="submit" class="rounded-pill cancelbtn ms-4">
                                        cancel
                                    </button>
                                </div>
                                <div class="col-sm-6">
                                    <button
                                        type="submit"
                                        class="rounded-pill cancelbtn me-1"
                                    >
                                        delete
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
                            <div class="card card-body" >
                                <h5>How would you like to add money ?</h5>
                                <a className="mt-2 ms-2 cardparagraph text-decoration-none"><i class='fas fa-plus-circle me-3' style={{ fontSize: "22px" }}></i>Add debit or credit card</a>
                                <hr class="dropdown-divider"></hr>
                                <p className="ms-2 mb-0 cardparagraph"><i class='fas fa-university me-3' style={{ fontSize: "22px" }}></i>Transfer to your payo account</p>
                                <hr class="dropdown-divider"></hr>


                                <div class="card mt-2" style={{ height: "7rem" }} id="cardNumberhover" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* Second main card */}
            <div class="collapse mt-3" id="collapseExample">
                <div
                    class="card"
                    style={{ height: "34rem", width: "400px", marginLeft: "700px", marginTop: "-515px" }}
                >
                    <div class="card card-body">
                        <img src={cardimg} className="cardimgtop rounded-top" alt="network erro" />
                        <form class="row g-3">
                            <h6 class="card-title mb-2 mt-5 text-muted">Card Details</h6>

                            <div class="row">
                                <div class="col">
                                    <label for="inputEmail4" class="form-label">card</label>
                                </div>
                                <div class="col">
                                    <label for="inputEmail4" class="form-label">**** **** **** 6854</label>
                                </div>
                            </div>
                            <hr className='mt-0 mb-1'/>
                            <div class="row">
                                <div class="col">
                                    <label for="inputEmail4" class="form-label ">Name on card:</label>
                                </div>
                                <div class="col">
                                    <label for="inputEmail4" class="form-label">Lura Jhonson</label>
                                </div>
                            </div>
                            <hr className='mt-0 mb-1'/>
                            <div class="row">
                                <div class="col">
                                    <label for="inputEmail4" class="form-label">Provider:</label>
                                </div>
                                <div class="col">
                                    <label for="inputEmail4" class="form-label">Master Card</label>
                                </div>
                            </div>
                            <hr className='mt-0 mb-1'/>
                            <div class="row">
                                <div class="col">
                                    <label for="inputEmail4" class="form-label">Type:</label>
                                </div>
                                <div class="col">
                                    <label for="inputEmail4" class="form-label">Debit</label>
                                </div>
                            </div>
                            <hr className='mt-0 mb-1'/>
                            <div class="row">
                                <div class="col">
                                    <label for="inputEmail4" class="form-label">Valid Until:</label>
                                </div>
                                <div class="col">
                                    <label for="inputEmail4" class="form-label">10/20</label>
                                </div>
                            </div>
                            <hr className='mt-0'/>
                            <div class="row g-2 mt-2 ms-1">
                            <div class="col-sm-6">
                                <button type="submit" class="mb-3 rounded-pill cancelbtn">
                                    Cancel
                                </button>
                            </div>
                            <div class="col-sm-6">
                                <button
                                    type="submit"
                                    class="mb-3 rounded-pill savebtn"
                                    data-bs-toggle="modal"
                                    href="#exampleModalToggle"
                                    role="button"
                                >
                                    Delete
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

export default Nine
