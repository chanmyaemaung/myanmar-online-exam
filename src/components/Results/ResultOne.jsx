import React from 'react';
import dataOne from '../data/2016.json';

const ResultOne = () => {
	return (
		<div>
			{dataOne.map((data, i) => {
				return (
					<a
						href={data.url}
						className="chan-href list-group-item-action"
						target="_blank"
						rel="noopener noreferrer"
					>
						<li className="list-group-item d-flex justify-content-between align-items-center e2016">
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

export default ResultOne;
