import React, { Fragment } from "react";
import $ from 'jquery'
import Content from "./Content";
export default class Dashboard1 extends React.Component{
    componentDidMount =() =>{
		/*$("#sidebar").mCustomScrollbar({
            theme: "minimal"
		});*/

        $('#sidebarCollapse').on('click', function () {
			$('#sidebar').toggleClass('active');
			$('.collapse.in').toggleClass('in');
			// and also adjust aria-expanded attributes we use for the open/closed arrows
			// in our CSS
			$('a[aria-expanded=true]').attr('aria-expanded', 'false');
		});
    }
    
render(){
    return (
		<Fragment>
          <div class="wrapper">
            <nav id="sidebar">
					<div class="sidebar-header">
						<h3>Dashboard</h3>
					</div>
                    <ul class="list-unstyled components">
                       <li>Sales Orders</li>
					   <li>Sales Invoices</li>
					</ul>
					<ul class="list-unstyled components">
            <li class="active">
                <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Sales(Secondary)</a>
                <ul class="collapse list-unstyled" id="homeSubmenu">
                    <li>
                        <a href="#Salesorder" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Sales order
							<ul class="collapse list-unstyled" id="Salesorder">
                             <li>Thursday</li>
							 <li>January</li>
							 <li>03/01/2020</li>
							</ul>
						</a>
                    </li>
                    <li>
					    <a href="#Detailedsalesorder" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Detailed Sales order
							<ul class="collapse list-unstyled" id="Detailedsalesorder">
                             <li>Thursday</li>
							 <li>January</li>
							 <li>03/01/2020</li>
							</ul>
						</a>
                    </li>
                    <li>
                        <a href="#">SFA Attendance</a>
                    </li>
					<li>
                        <a href="#">Missed & Cancelled orders</a>
                    </li>
                </ul>
            </li>
            <li>
                <a href="#Finance" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Category</a>
                <ul class="collapse list-unstyled" id="Finance">
                    <li>
                        <a href="#">SP Inventory Status (with SFA – RET selling price)</a>
                    </li>
                    <li>
                        <a href="#">BP Inventory Status (with SFA -WLS selling price)</a>
                    </li>
                </ul>
            </li>
			<li>
                <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Finance</a>
                <ul class="collapse list-unstyled" id="pageSubmenu">
                    <li>
					<a href="#Secondaryaccountreceivables" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Detailed Sales order
							<ul class="collapse list-unstyled" id="Secondaryaccountreceivables">
                             <li>Thursday</li>
							 <li>January</li>
							 <li>03/01/2020</li>
							</ul>
					</a>
                    </li>
                    <li>
                        <a href="#">GMV Volume & Value (WIP)</a>
                    </li>
                </ul>
            </li>

        </ul>
    </nav>
    <Content />
</div>
	    </Fragment>
    );
  }
}
