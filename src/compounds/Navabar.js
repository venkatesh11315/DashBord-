/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './css/nav.css'
import './css/navbarmin.css'
import 'bootstrap/js/dist/dropdown'
import { Link } from 'react-router-dom';

import 'react-bootstrap'



function Navabar() {
  return (
    <div>
        <div  >
     
        
    
       
     
      <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
      {/* <!-- Sidebar - Brand --> */}
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink"></i>
                </div>
                <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
            </a>
            {/* <!-- Divider --> */}
            <hr className="sidebar-divider my-0"/>

            {/* <!-- Nav Item - Dashboard --> */}
            <Link to='./Dashbord.js '  style={{textDecoration:"none"}}>
                       
                     
            <li className="nav-item">
                <a className="nav-link" href="index.html">
                   <i className="fas fa-fw fa-tachometer-alt"> 
                   
                   
                   </i>
                   
                  Dashbord
                   
                    </a>
            </li>
            </Link>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider"/>

            {/* <!-- Heading --> */}
            <div className="sidebar-heading">
                Interface
            </div>

            {/* <!-- Nav Item - Pages Collapse Menu --> */}

    

           





<li className="nav-item">
        <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseTwo"
            aria-expanded="true" aria-controls="collapseTwo">
            <i className="fas fa-fw fa-cog"></i>
            <span>Components</span>
        </a>
        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionSidebar">
            <div className="bg-white py-2 collapse-inner rounded">
                <h6 className="collapse-header">Custom Components:</h6>
                <Link to='./Button.js'  style={{textDecoration:"none"}}>
               
                <a className="collapse-item" >Buttons</a>
                </Link>
                <Link to='./Newcard.js' style={{textDecoration:"none"}} >
                     <a className="collapse-item" >Cards</a>
                </Link>
               
              
            </div>
        </div>
    </li>

            {/* <!-- Nav Item - Utilities Collapse Menu --> */}
            <li className="nav-item">
                <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseUtilities"
                    aria-expanded="true" aria-controls="collapseUtilities">
                    <i class="fas fa-fw fa-wrench"></i>
                    <span>Utilities</span>
                </a>
                <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities"
                    data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Custom Utilities:</h6>
                        <a className="collapse-item" href="utilities-color.html">Colors</a>
                        <a className="collapse-item" href="utilities-border.html">Borders</a>
                        <a className="collapse-item" href="utilities-animation.html">Animations</a>
                        <a className="collapse-item" href="utilities-other.html">Other</a>
                    </div>
                </div>
            </li>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider"/>

            {/* <!-- Heading --> */}
            <div className="sidebar-heading">
                Addons
            </div>

            {/* <!-- Nav Item - Pages Collapse Menu --> */}
            <li className="nav-item active">
                <a className="nav-link" href="#" data-bs-toggle="collapse" data-bs-target="#collapsePages" aria-expanded="true"
                    aria-controls="collapsePages">
                    <i className="fas fa-fw fa-folder"></i>
                    
                    <span>
                    Pages
                        </span>
                </a>
                <div id="collapsePages" className="collapse show" aria-labelledby="headingPages"
                    data-bs-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Login Screens:</h6>
                        <a className="collapse-item" href="login.html">Login</a>
                        <a className="collapse-item" href="register.html">Register</a>
                        <a className="collapse-item" href="forgot-password.html">Forgot Password</a>
                        <div className="collapse-divider"></div>
                        <h6 className="collapse-header">Other Pages:</h6>
                        <a className="collapse-item" href="404.html">404 Page</a>
                        <a className="collapse-item active" href="blank.html">Blank Page</a>
                    </div>
                </div>
            </li>


            {/* <!-- Nav Item - Charts --> */}
            <li className="nav-item">
                <a className="nav-link" href="charts.html">
                    <i className="fas fa-fw fa-chart-area"></i>
                    <span>Charts</span></a>
            </li>

            {/* <!-- Nav Item - Tables --> */}
            <Link to='./Tables.js'>
           
            <li className="nav-item">
                <a className="nav-link" href="tables.html">
                    <i className="fas fa-fw fa-table"></i>
                    <span>Tables</span></a>
            </li>
            </Link>
            {/* <!-- Divider --> */}
            <hr className="sidebar-divider d-none d-md-block"/>

            {/* <!-- Sidebar Toggler (Sidebar) --> */}
            <div className="text-center d-none d-md-inline">
                <button className="rounded-circle border-0" id="sidebarToggle"></button>
            </div>


      </ul>
      </div>
      {/* end navabar  */}
      {/* <!-- Content Wrapper --> */}
     
        <div id="content-wrapper" className="d-flex flex-column">

            {/* <!-- Main Content --> */}
            <div id="content">

              
                <div className="container-fluid">

                    {/* <!-- Page Heading --> */}
                    <h1 className="h3 mb-4 text-gray-800">Blank Page</h1>

                </div>
                {/* <!-- /.container-fluid --> */}

            </div>
            {/* <!-- End of Main Content --> */}

            {/* <!-- Footer --> */}
            <footer className="sticky-footer bg-white">
                <div className="container my-auto">
                    <div className="copyright text-center my-auto">
                        <span>Copyright &copy; Your Website 2020</span>
                    </div>
                </div>
            </footer>
            {/* <!-- End of Footer --> */}

<script>
    <script src='./script/sb-admin-2.js'></script>
    <script src="./script/sb-admin-2.min.js"></script>
   
</script>
           

        </div>
    </div>
  )
}

export default Navabar

