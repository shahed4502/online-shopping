import React from 'react';

export const MainLayout = ({nav, content}) => (
	<div className="main-layout">
		<div>
		{nav}
		</div>
		<div>
		{content}
		</div>
	</div>
)