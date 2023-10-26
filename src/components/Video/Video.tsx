import React, {useEffect, useRef, useState} from "react";
import {useSelector} from "react-redux";
import BackgroundVideo from "assets/background-video.mp4";
import {initialStateType} from "store/store.ts";

export type BackgroundProps = {
	paused?: boolean;
}

const Video: React.FC<BackgroundProps> = ({
		paused = false
  }) => {
	const videoRef = useRef<HTMLVideoElement | null>(null);
	const [isPaused, setIsPaused] = useState(paused);
	const isPhonePanelVisible = useSelector((state: initialStateType) => state.showPhonePanel);

	useEffect(() => {
		if (isPhonePanelVisible) {
			setIsPaused(true);
		} else {
			setIsPaused(false);
		}
		if (videoRef.current && isPaused) {
			videoRef.current.pause();
		} else if (videoRef.current && !isPaused) {
			videoRef.current?.play();
		}
	}, [isPhonePanelVisible, isPaused]);

	return (
		<video
			ref={videoRef}
			className="w-full h-full"
			id="video-background"
			autoPlay muted loop playsInline>
			<source src={BackgroundVideo} type="video/mp4"/>
		</video>
	);
}

export default Video;