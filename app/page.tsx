/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import anime from 'animejs';
import { useEffect, useRef } from 'react';

function bgAnimate(children: any) {
	const animation = anime({
		target: children,
		autoplay: false,
		width: '100px',
		duration: 1000,
	});
	return animation;
}

function Selection(props: { name: string }) {
	const backgroundObj = useRef<HTMLDivElement>(null);
	const backgroundAnimation = useRef<any>(null);

	useEffect(() => {
		backgroundAnimation.current = bgAnimate(backgroundObj.current);
	}, []);

	const { name } = props;
	return (
		<div
			onMouseOver={() => {
				console.log('hello');
				backgroundAnimation.current.play();
			}}
			className="relative w-full aspect-[11/3] border-solid border-[5px] border-green-300 rounded-full text-black flex justify-center items-center">
			<div ref={backgroundObj} className="absolute aspect-[11/3] bg-green-300 rounded-full"></div>
			<p className="font-bold text-3xl">{name}</p>
		</div>
	);
}

export default function Page() {
	return (
		<div className="relative flex w-screen h-screen justify-center items-center">
			<div className="w-[33%] flex">
				<Selection name="Lớp 11" />
			</div>
		</div>
	);
}
//! Animation cannot play, even the promise is resolved
