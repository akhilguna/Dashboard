import React from "react";
import OutlinedCard from "./Date";
import Fivecards from "./Value";
import EnhancedTable from "./Table";
import Census from "./Chart";
import Server from "./Server";
export default class Content extends React.Component{
    render(){
        return (
			<div id="content">
					<nav class="navbar navbar-expand-lg navbar-light bg-light">
						<div class="container-fluid">
				
							<button type="button" id="sidebarCollapse" class="btn btn-info">
								<i class="fas fa-align-left"></i>
								<span>Menu</span>
							</button>
				
						</div>
					</nav>
                    <div class="container-fluid">
                        <div class="row">
                                <div class="col-md-12">
                                    <OutlinedCard />
                                </div>
                        </div>
                    </div>

                    <div class="container-fluid mt-5">
                        <div class="row">
                                <div class="col-md-3">
                                    <Fivecards />
                                </div>
                                <div class="col-md-2">
                                    <Fivecards />
                                </div>
                                <div class="col-md-2">
                                    <Fivecards />
                                </div>
                                <div class="col-md-2">
                                    <Fivecards />
                                </div>
                                <div class="col-md-3">
                                    <Fivecards />
                                </div>
                        </div>
                    </div>

                    <div class="container-fluid mt-5">
                        <div class="row">
                                <div class="col-md-4">
                                    <EnhancedTable />
                                </div>
                                <div class="col-md-4">
                                    <EnhancedTable />
                                </div>
                                <div class="col-md-4">
                                    <EnhancedTable />
                                </div>
                        </div>
                    </div>

                    <div class="container-fluid mt-5">
                        <div class="row">
                                <div class="col-md-4">
                                    <EnhancedTable />
                                </div>
                                <div class="col-md-4">
                                    <EnhancedTable />
                                </div>
                                <div class="col-md-4">
                                    <EnhancedTable />
                                </div>
                        </div>
                    </div>

                    <div class="container-fluid mt-5">
                        <div class="row">
                                <div class="col-md-12">
                                     <Census /> 
                                     <Server />
                                </div>
                        </div>
                    </div>

		    </div>
    );
  }
}
