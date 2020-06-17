import React from 'react';
import dataFive from '../data/2020.json';

const ResultFive = () => {
	return (
		<div>
			{dataFive.map((data, index) => {
				return (
					<a
						href={data.url}
						className="chan-href list-group-item list-group-item-action"
						target="_blank"
						rel="noopener noreferrer"
					>
						<li
							key={index}
							className="list-group-item d-flex justify-content-between align-items-center e2016"
						>
							{data.name}
							<span className="badge badge-danger bg-info badge-pill">
								{data.year}
							</span>
						</li>
					</a>
				);
			})}
		</div>
	);
};

export default ResultFive;
