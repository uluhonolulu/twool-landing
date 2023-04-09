import React from 'react';

const SentCounter = (props) => {
	const [messageCount, setMessageCount] = React.useState(0);

	React.useEffect(() => {
		getMessageCount();
	}, []);
	
	return (
		<React.Fragment>
			<div className='max-w-2xl mx-auto py-4 text-center'>
				{!!messageCount && <><span className='font-semibold text-lg'>{messageCount}</span> DMs sent so far</>}
			</div>
		</React.Fragment>
	)

	
	async function getMessageCount() {
		const url = 'https://jolly-river-015d7ce03.2.azurestaticapps.net/api/get_sent_messages_count';
		const response = await fetch(url, {
			method: 'GET',
			mode: 'cors',
			// credentials: "include",
			headers: {
			  'Content-Type': 'text/plain',
			},
		  });
		const count = await response.text();
		setMessageCount(count);
	}
}

export default SentCounter;
