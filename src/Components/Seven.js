import logo from "../Images/payo.jpg";
import logo1 from "../Images/modelogo.jpg";
import dropdownlogo from "../Images/eshu.jpg";
import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import Col from 'react-bootstrap/Col';

function Seven() {



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
                                <button className="btn btn-outline-light dropdown-toggle border-0 text-dark" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img src={dropdownlogo} alt="Logo" id="headerdropdown" className="rounded-circle me-2" />Laura johnson
                                </button>
                                <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
                                    <li><a className="dropdown-item active" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                </ul>
                            </div>
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
                tabIndex="-1"
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
                className="btn btn-primary"
                data-bs-toggle="modal"
                href="#exampleModalToggle"
                role="button"
            >
                Open first modal
            </a>


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
                            <i className='fas fa-wallet me-3'></i>
                            Accounts
                        </a>
                        <a href="#news">
                            <i className="fa fa-bar-chart me-3 sidebaricons"></i>Analytics
                        </a>
                        <a href="#contact"><i className="fa fa-refresh me-3 sidebaricons"></i>Payments</a>
                        <a href="#about"><i className="fa fa-credit-card me-3 sidebaricons"></i>Cards</a>
                        <a href="#about">
                            <i className="fa fa-gears me-3 sidebaricons"></i>Settings
                        </a>
                    </div>
                </div>
            </div>


            {/* Dashboard */}
            <div className="breadcrumb">
                <nav aria-label="breadcrumb">
                    <h4 className="dashboardheading ms-5 mb-5 mt-1"> <i className="fa fa-arrow-left me-3"></i>Add Money</h4>
                    <ol className="breadcrumb ms-5">
                        <li className="breadcrumb-item">
                            <a href="#">Accounts</a>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">
                            Add money
                        </li>
                    </ol>
                </nav>
            </div>

            <div className="row">
                <div className="col">
                    <div className="collapse multi-collapse" id="multiCollapseExample1">
                        <div
                            className="card"
                            style={{ height: "34rem", width: "400px", marginLeft: "275px" }}
                        >
                            <div className="card card-body">
                                <h5>How would you like to add money ?</h5>
                                <a className="mt-5 ms-2 cardparagraph text-decoration-none"><i className='fas fa-plus-circle me-3' style={{ fontSize: "22px" }}></i>Add debit or credit card</a>
                                <hr className="dropdown-divider"></hr>
                                <a className="ms-2 mb-0 cardparagraph text-decoration-none" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample"><i className='fas fa-university me-3' style={{ fontSize: "22px" }}></i>Transfer to your payo account</a>
                                <hr className="dropdown-divider"></hr>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* Second grid card */}
            <div className="collapse" id="collapseExample">
                <div
                    className="card"
                    style={{ height: "34rem", width: "870px", marginLeft: "700px", marginTop: "-500px" }}
                >
                    <div className="card card-body">
                        <form className="row g-2">
                            <h6 className="card-title ms-1 mb-2">Account details</h6>
                            <Tabs
                                defaultActiveKey="profile"
                                id="uncontrolled-tab-example tab"
                                className="mb-3 tabs"
                                justify
                            >

                                <Tab eventKey="home" title="Local" className="me-5">
                                    <div className="details ms-5">
                                        <p className="paragraphbenificary text-muted">Benificary</p>
                                        <p className="paragraphjhone mb-2">Jhone Doe</p>

                                        <p className="paragraphbenificary text-muted">Account</p>
                                        <p className="paragraphjhone mb-2">25451843254</p>

                                        <p className="paragraphbenificary text-muted">Sort Code</p>
                                        <p className="paragraphjhone">05-254518-578458</p>
                                        <hr style={{ width: "500px" }} />

                                        <p className="iconbackground rounded-circle"><i className="fas fa-database mt-2"></i></p><p className="detailparagraph mb-1">Use this personal current account to get salary and tp pay bills</p>
                                        <p className="iconbackground rounded-circle mt-3"><i className="far fa-clock mt-2"></i></p><p className="detailparagraph mb-1">Transfer usually take few hours to appear on your PayVoo account</p>
                                        <p className="iconbackground rounded-circle mt-3"><i className="far fa-flag mt-2"></i></p><p className="detailparagraph mb-1">Only local transfers are accepted.For international transfers,Please use the SWIFT details found above</p>

                                        <div className="col">
                                            <button type="submit" className="mt-4 rounded-pill" id="closebtn">
                                                Close
                                            </button>
                                        </div>
                                    </div>
                                </Tab>

                                <Tab eventKey="profile" title="Swift">
                                    <div className="details ms-5">
                                        <p className="paragraphbenificary text-muted">Benificary</p>
                                        <p className="paragraphjhone mb-2">Jhone Doe</p>

                                        <p className="paragraphbenificary text-muted">IBAN</p>
                                        <p className="paragraphjhone mb-2">GWDF 6165 6542 6513 6515 9876</p>

                                        <p className="paragraphbenificary text-muted">BIC</p>
                                        <p className="paragraphjhone">PAYVOO65136</p>
                                        <hr style={{ width: "500px" }} />

                                        <p className="iconbackground rounded-circle"><i className="fas fa-database mt-2"></i></p><p className="detailparagraph mb-1">intermediary or senders bank may charge you for international payments</p>
                                        <p className="iconbackground rounded-circle mt-3"><i className="far fa-clock mt-2"></i></p><p className="detailparagraph mb-1">Transfer usually take 1 to 3 working days to appear on your PayVoo account</p>
                                        <p className="iconbackground rounded-circle mt-3"><i className="far fa-flag mt-2"></i></p><p className="detailparagraph mb-1">Only SWIFT transfers are accepted</p>

                                        <div className="col">
                                            <button type="submit" className="mt-4 rounded-pill" id="closebtn">
                                                Close
                                            </button>
                                        </div>
                                    </div>
                                </Tab>
                            </Tabs>


                            {/* <Tabs
                                defaultActiveKey="profile"
                                id="justify-tab-example"
                                className="mb-3"
                                justify
                            >
                                <Tab eventKey="home" title="Home">
                                    <h2>Eshwar</h2>
                                </Tab>
                                <Tab eventKey="profile" title="Profile">
                                    <h2>Eshwar</h2>
                                </Tab>

                            </Tabs> */}
                        </form>
                    </div>
                </div>
            </div>


        </div >
    )
}

export default Seven
