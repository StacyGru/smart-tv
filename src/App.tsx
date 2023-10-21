import {useEffect, useState} from "react";
import Background from "./components/Background";
import Banner from "./components/Banner";

function App() {
  const [isBannerVisible, setBannerVisibility] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() =>
        setBannerVisibility(true),
      5000
    );
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Background/>
      <Banner
        className={`transition-opacity duration-1000 ease-in-out ${isBannerVisible ? 'opacity-100' : 'opacity-0'}`}
      />
    </>
  )
}

export default App;
