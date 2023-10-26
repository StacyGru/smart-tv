import {useEffect} from "react";
import {useSelector} from "react-redux";
import Banner from "components/Banner";
import PhonePanel from "components/PhonePanel";
import Video from "components/Video";
import {ButtonProvider} from "context/ButtonContext.tsx";
import {setBannerVisibility} from "store/actions.ts";
import {initialStateType, store} from "store/store.ts";

function App() {
  const isBannerVisible = useSelector((state: initialStateType) => state.showBanner);
  const isPhonePanelVisible = useSelector((state: initialStateType) => state.showPhonePanel);

  useEffect(() => {
    const timer = setTimeout(() =>
        store.dispatch(setBannerVisibility(true)),
      5000
    );
    return () => clearTimeout(timer);
  }, []);

  return (
    <ButtonProvider>

      <Video/>

      {isBannerVisible &&
        <Banner/>
      }

      {isPhonePanelVisible &&
        <PhonePanel/>
      }

    </ButtonProvider>
  )
}

export default App;
