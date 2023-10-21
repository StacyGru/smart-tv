import Video from "assets/background-video.mp4";

const Background = () => {
	return (
		<video
			className="w-full h-full"
			id="video-background"
			autoPlay muted loop playsInline>
			<source src={Video} type="video/mp4"/>
		</video>
	);
}

export default Background;