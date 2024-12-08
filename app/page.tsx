/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import anime from 'animejs';
import { useEffect, useRef } from 'react';

function bgAnimate(children: any, isEnter: boolean) {
	return anime({
		targets: children,
		autoplay: false,
		width: function () {
			return isEnter ? '100%' : '0';
		},
		duration: 150,
		easing: 'linear',
	});
}

function Selection(props: { name: string }) {
	const backgroundObj = useRef<HTMLDivElement>(null);
	// const backgroundAnimation = useRef<any>(null);

	useEffect(() => {
		// backgroundAnimation.current = bgAnimate(backgroundObj.current);
		// backgroundObj.current?.addEventListener('mouseenter', () => {
		// 	backgroundAnimation.current?.play();
		// });
	}, []);

	const { name } = props;
	return (
		<button
			onMouseEnter={() => {
				bgAnimate(backgroundObj.current, true).play();
			}}
			onMouseLeave={() => {
				bgAnimate(backgroundObj.current, false).play();
			}}
			className="relative w-full aspect-[11/3] border-solid border-[5px] border-green-300 rounded-full transition-colors text-white hover:text-black flex justify-center items-center">
			<p className="font-bold text-3xl">{name}</p>
			<div
				ref={backgroundObj}
				className="-z-10 absolute aspect-[11/3] bg-green-300 rounded-full"></div>
		</button>
	);
}

export default function Page() {
	return (
		<div className="relative flex w-screen h-screen justify-center items-center">
			<div className="w-[33%] flex flex-col gap-y-5">
				<Selection name="Lớp 11" />
				<Selection name="Lớp 12" />
			</div>
		</div>
	);
}
//TODO: More animation is needed
