import React, {useEffect, useRef, useState} from "react";
import BackgroundVideo from "assets/background-video.mp4";

export type BackgroundProps = {
	paused?: boolean;
}

const Video: React.FC<BackgroundProps> = ({
		paused = false
  }) => {
	const videoRef = useRef<HTMLVideoElement | null>(null);
	const [isPaused, setIsPaused] = useState(paused);

	useEffect(() => {
		if (videoRef.current && isPaused) {
			videoRef.current.pause();
			setIsPaused(true);
		}
	}, [isPaused]);

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