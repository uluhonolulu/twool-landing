import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

const Slide = ({name, wrongFirstName, bio, message}) => {

	return (
		<>
			<div className='px-12'>
				<div className="px-8 pt-5 pb-8 bg-indigo-200 w-full rounded shadow">
					<div>
						<div className='text-xl font-light'>Your lead</div>
						<div className='bg-white rounded-md shadow px-5 py-3 mt-2'>
							<div className='text-lg font-semibold'>{name} <span className='text-gray-400'>@<span className='blur text-black'>eheheh</span></span></div>
							<div className='text-sm'>{bio}</div>
						</div>
					</div>
					<div className="text-xl font-light mt-4">Generated message</div>
					<div className="mt-2 flex justify-between space-x-8">
						<div className='bg-white rounded-md shadow w-1/2 px-5 py-3'>
							<div className='text-xl font-light'>twool</div>
							<div className='text-sm'>
								{message}
							</div>
						</div>
				
						<div className='bg-white rounded-md shadow w-1/2 px-5 py-3'>
							<div className='text-xl font-light'>Other tools</div>
							<div className='text-sm'>
								Hey {wrongFirstName}, love your tweets! Keep up the good work!
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Slide;
