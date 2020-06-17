import React, { Fragment } from 'react';
import ResultOne from './Results/ResultOne';
import ResultTwo from './Results/ResultTwo';
import ResultThree from './Results/ResultThree';
import ResultFour from './Results/ResultFour';
// import ResultFive from './Results/ResultFive';

const Main = () => {
	return (
		<Fragment>
			<div className="row">
				<div className="col-12">
					<div className="jumbotron text-center">
						<h3 className="chanCode py-3">စာမေးပွဲ အောင်စာရင်း</h3>
						<p className="chanCode">
							ဆယ်တန်းအောင်စားရင်းများကို လွယ်ကူစွာရှာဖွေကြည့်ရှနိုင်ပါသည်။
						</p>
					</div>
				</div>
			</div>

			<div className="row">
				<div className="col-12">
					<ul className="nav nav-tabs sticky-top bg-light">
						<li className="nav-item">
							<a className="nav-link active text-dark" href="#home">
								၂၀၁၆
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link text-success" href="#menu1">
								၂၀၁၇
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link text-primary" href="#menu2">
								၂၀၁၈
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link text-danger" href="#menu4">
								၂၀၁၉
							</a>
						</li>
						{/* <li className="nav-item">
							<a className="nav-link text-info" href="#menu5">
								၂၀၂၀
							</a>
						</li> */}
					</ul>

					<div className="tab-content mb-5">
						<div id="home" className="container tab-pane active">
							<ul className="list-group my-2">
								<ResultOne />
							</ul>
						</div>
						<div id="menu1" className="container tab-pane fade">
							<br />
							<ul className="list-group my-2" id="year2017">
								<ResultTwo />
							</ul>
						</div>
						<div id="menu2" className="container tab-pane fade">
							<br />
							<ul className="list-group my-2" id="year2018">
								<ResultThree />
							</ul>
						</div>
						<div id="menu4" className="container tab-pane fade">
							<br />
							<ul className="list-group my-2" id="year2019">
								<ResultFour />
							</ul>
						</div>
						{/* <div id="menu5" className="container tab-pane fade">
							<br />
							<ul className="list-group my-2" id="year2020">
								<ResultFive />
							</ul>
						</div> */}
					</div>
				</div>
			</div>

			<div className="row">
				<div className="col-12">
					<footer className="text-center bg-light fixed-bottom mt-3">
						<p className="lead">
							Developed by : &nbsp;
							<a
								className="chan-href text-primary"
								href="fb:/profile/100010530133859"
								target="_top"
								rel="noopener noreferrer"
							>
								Chan Myae Maung
							</a>
						</p>
					</footer>
				</div>
			</div>
		</Fragment>
	);
};

export default Main;
