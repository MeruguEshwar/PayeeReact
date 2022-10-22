import React from 'react'
import logo from "../Images/payo.jpg";
import dropdownlogo from "../Images/eshu.jpg";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Rectangle from '../Images/Rectangle.png';
import CardGBP from '../Images/CardGBP.png';
import USD from '../Images/USD.png';
import cardimgicon from '../Images/cardimgicon.jpg';

function Tweenty() {
    return (
        <div>
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

            <div className="breadcrumb">
                <nav aria-label="breadcrumb">
                    <h4 className="dashboardheading ms-5 mb-5 mt-5 fs-6">Exchange</h4>
                    <ol className="breadcrumb ms-5">
                        <li className="breadcrumb-item breadcrump">
                            <a href="#" className="text-muted text-decoration-none">
                                Accounts/Exchange
                            </a>
                        </li>
                    </ol>
                </nav>
            </div>

            <div class="row">
                <div class="col-sm-7">
                    <div class="card twentycard" style={{ width: "58rem", height: "35rem" }}>
                        <div class="card-body">
                            <Tabs
                                defaultActiveKey="home"
                                transition={false}
                                id="noanim-tab-example"
                                className="mb-3"
                                justify
                            >
                                <Tab eventKey="home" title="Rates">

                                    <div class="row">
                                        <div class="col-sm-1">
                                            <i class="fa fa-plus-circle" style={{ fontSize: "33px", color: "#246BAD" }}></i>
                                        </div>
                                        <div class="col-sm-11" style={{ color: "#246BAD", fontSize: "14px" }}>
                                            <p>Add Currency</p>
                                        </div>
                                    </div>


                                    <div class="row border-bottom ms-5 mt-4">
                                        <div class="col-sm-8">
                                            <nav aria-label="breadcrumb">
                                                <h4 className="dashboardheading1 mb-5 mt-0 fs-6">Euro</h4>
                                                <ol className="breadcrumb ms-5">
                                                    <li className="breadcrumb-item breadcrump4">
                                                        <a href="#" className="text-muted text-decoration-none">
                                                            Euro
                                                        </a>
                                                    </li>
                                                </ol>
                                            </nav>
                                        </div>
                                        <div class="col-sm-2 mt-2">
                                            <nav aria-label="breadcrumb">
                                                <h4 className="dashboardheading1 mb-5 mt-0 fs-6">0.91</h4>
                                                <ol className="breadcrumb ms-5">
                                                    <li className="breadcrumb-item breadcrump4">
                                                        <a href="#" className="text-muted text-decoration-none">
                                                            Britsh Pound - GBP
                                                        </a>
                                                    </li>
                                                </ol>
                                            </nav>
                                        </div>
                                        <div class="col-sm-1 mt-3">
                                            <p><i class="fa fa-trash-o"></i></p>
                                        </div>
                                    </div>

                                    <div class="row border-bottom ms-5 mt-3">
                                        <div class="col-sm-8">
                                            <nav aria-label="breadcrumb">
                                                <h4 className="dashboardheading1 mb-5 mt-0 fs-6">Euro</h4>
                                                <ol className="breadcrumb ms-5">
                                                    <li className="breadcrumb-item breadcrump4">
                                                        <a href="#" className="text-muted text-decoration-none">
                                                            Euro
                                                        </a>
                                                    </li>
                                                </ol>
                                            </nav>
                                        </div>
                                        <div class="col-sm-2 mt-2">
                                            <nav aria-label="breadcrumb">
                                                <h4 className="dashboardheading1 mb-5 mt-0 fs-6">1.11</h4>
                                                <ol className="breadcrumb ms-5">
                                                    <li className="breadcrumb-item breadcrump4">
                                                        <a href="#" className="text-muted text-decoration-none">
                                                            US Doloars - USD
                                                        </a>
                                                    </li>
                                                </ol>
                                            </nav>
                                        </div>
                                        <div class="col-sm-1 mt-3">
                                            <p><i class="fa fa-trash-o"></i></p>
                                        </div>
                                    </div>


                                </Tab>
                                <Tab eventKey="profile" title="Converts">
                                    <div class="row">
                                        <div class="col-sm-1">
                                            <i class="fa fa-plus-circle" style={{ fontSize: "33px", color: "#246BAD" }}></i>
                                        </div>
                                        <div class="col-sm-11" style={{ color: "#246BAD", fontSize: "14px" }}>
                                            <p>Add Currency</p>
                                        </div>
                                    </div>


                                    <div class="row border-bottom mt-3">
                                        <div class="col-sm-1">
                                            <img src={Rectangle} class="Euroimg" />
                                        </div>
                                        <div class="col-sm-8">
                                            <nav aria-label="breadcrumb">
                                                <h4 className="dashboardheading1 mb-5 mt-0 fs-6">Euro</h4>
                                                <ol className="breadcrumb ms-5">
                                                    <li className="breadcrumb-item breadcrump4">
                                                        <a href="#" className="text-muted text-decoration-none">
                                                            Euro
                                                        </a>
                                                    </li>
                                                </ol>
                                            </nav>
                                        </div>
                                        <div class="col-sm-2 mt-2">
                                            <p className='border-bottom'>100</p>
                                        </div>
                                        <div class="col-sm-1 mt-2">
                                            <p><i class="fa fa-trash-o"></i></p>
                                        </div>
                                    </div>


                                    <div class="row border-bottom mt-3">
                                        <div class="col-sm-1">
                                            <img src={CardGBP} class="Euroimg" />
                                        </div>
                                        <div class="col-sm-8">
                                            <nav aria-label="breadcrumb">
                                                <h4 className="dashboardheading1 mb-5 mt-0 fs-6">Pound sterling GBP</h4>
                                                <ol className="breadcrumb ms-5">
                                                    <li className="breadcrumb-item breadcrump4">
                                                        <a href="#" className="text-muted text-decoration-none">
                                                            United Kingdom
                                                        </a>
                                                    </li>
                                                </ol>
                                            </nav>
                                        </div>
                                        <div class="col-sm-2 mt-2">
                                            <p className='border-bottom'>91.67</p>
                                        </div>
                                        <div class="col-sm-1 mt-2">
                                            <p><i class="fa fa-trash-o"></i></p>
                                        </div>
                                    </div>

                                    <div class="row border-bottom mt-3">
                                        <div class="col-sm-1">
                                            <img src={USD} class="Euroimg" />
                                        </div>
                                        <div class="col-sm-8">
                                            <nav aria-label="breadcrumb">
                                                <h4 className="dashboardheading1 mb-5 mt-0 fs-6">USD</h4>
                                                <ol className="breadcrumb ms-5">
                                                    <li className="breadcrumb-item breadcrump4">
                                                        <a href="#" className="text-muted text-decoration-none">
                                                            United States
                                                        </a>
                                                    </li>
                                                </ol>
                                            </nav>
                                        </div>
                                        <div class="col-sm-2 mt-2">
                                            <p className='border-bottom'>0</p>
                                        </div>
                                        <div class="col-sm-1  mt-2">
                                            <p><i class="fa fa-trash-o"></i></p>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab eventKey="contact" title="Actions">
                                    <div class="row">
                                        <div class="col-sm-1">
                                            <i class="fa fa-plus-circle" style={{ fontSize: "33px", color: "#246BAD" }}></i>
                                        </div>
                                        <div class="col-sm-11" style={{ color: "#246BAD", fontSize: "14px" }}>
                                            <p>Add Action</p>
                                        </div>
                                    </div>

                                    <div class="row">
                                        <p className='mt-3 mb-3'>pending</p>
                                        <div class="col-sm-1" >
                                            <i class="fa fa-bell" style={{ fontSize: "33px" }}></i>
                                        </div>

                                        <div class="col-sm-11" style={{ fontSize: "14px" }}>
                                            <nav aria-label="breadcrumb">
                                                <h4 className="dashboardheading1 mb-5 mt-0 fs-6">e1 = BGN 1</h4>
                                                <ol className="breadcrumb ms-5">
                                                    <li className="breadcrumb-item breadcrump4">
                                                        <a href="#" className="text-muted text-decoration-none">
                                                            price alert - current BGN 1.956
                                                        </a>
                                                    </li>
                                                </ol>
                                            </nav>
                                        </div>
                                    </div>
                                </Tab>
                            </Tabs>
                        </div>
                    </div>
                </div>

                <div class="col-sm-5">
                    <div class="card twentycard" style={{ width: "20rem", height: "19rem" }}>
                        <div class="card-body">
                            <h5 class="card-title">Exchange Currency</h5>

                            <div class="row ms-2 mt-5">
                                <div class="col-sm-5">
                                    <nav aria-label="breadcrumb">
                                        <h4 className="dashboardheading1 mb-5 mt-0 fs-6">EUR</h4>
                                        <ol className="breadcrumb ms-5">
                                            <li className="breadcrumb-item breadcrump4">
                                                <a href="#" className="text-muted text-decoration-none">
                                                    Balance:0.00
                                                </a>
                                            </li>
                                        </ol>
                                    </nav>
                                </div>
                                <div class="col-sm-5">
                                    <div class="mt-2">
                                        <p className='border-bottom'>111.53</p>
                                    </div>
                                </div>
                            </div>


                            <div class="row ms-2">
                                <div class="col-sm-5">
                                    <nav aria-label="breadcrumb">
                                        <h4 className="dashboardheading1 mb-5 mt-0 fs-6">USD</h4>
                                        <ol className="breadcrumb ms-5">
                                            <li className="breadcrumb-item breadcrump4">
                                                <a href="#" className="text-muted text-decoration-none">
                                                    Balance:0.00
                                                </a>
                                            </li>
                                        </ol>
                                    </nav>
                                </div>
                                <div class="col-sm-5">
                                    <div class="mt-2">
                                        <p className='border-bottom'>0</p>
                                    </div>
                                </div>
                            </div>


                            <div class="col-sm-5 mt-4 ms-5">
                                <button type="submit" class="rounded-pill GetStatment">
                                    Exchange
                                </button>
                            </div>

                        </div>
                    </div>


                    <div class="card mt-3 twentycard" style={{ width: "20rem", height: "7rem" }}>
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src={cardimgicon} class="img-fluid" alt="..." />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <p class="card-text">Auto Exchange</p>
                                    <p class="card-text"><small class="text-muted">Exchange currency when they hit a certain value</small></p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="card mt-3 twentycard" style={{ width: "20rem", height: "7rem" }}>
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src={cardimgicon} class="img-fluid" alt="..." />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <p class="card-text">Price alert</p>
                                    <p class="card-text"><small class="text-muted">Well let you know when that currency this that value</small></p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


        </div>
    )
}

export default Tweenty
