import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import Cross from "assets/cross.svg";
import QR from "assets/qr-code.png";
import Banner from "components/Banner";
import Button from "components/Button";
import PhonePanel from "components/PhonePanel";
import Video from "components/Video";
import {initialStateType, SET_BANNER_VISIBILITY, SET_PHONE_PANEL_VISIBILITY} from "store/store.ts";
import Text from "./components/Text";

function App() {
  const isBannerVisible = useSelector((state: initialStateType) => state.showBanner);
  const isPhonePanelVisible = useSelector((state: initialStateType) => state.showPhonePanel);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() =>
      dispatch({
        type: SET_BANNER_VISIBILITY,
        payload: true
      }),
      5000
    );
    return () => clearTimeout(timer);
  }, []);

  function hidePhonePanel() {
    dispatch({
      type: SET_PHONE_PANEL_VISIBILITY,
      payload: false
    });
  }

  return (
    <>
      <Video/>

      <Banner
        className={`transition-[0.5s] ${isBannerVisible  && '!translate-x-0'}`}
      />

      <PhonePanel
        className={`-translate-x-full transition-[0.5s] ${isPhonePanelVisible && 'translate-x-0'}`}
      />

      {isPhonePanelVisible &&
          <Button
            type="white-border"
            className="absolute top-[20px] right-[20px]"
            onClick={hidePhonePanel}
          >
            <img src={Cross} alt="cross"/>
          </Button>
      }
      {isPhonePanelVisible &&
        <div
          className="absolute bottom-[40px] right-[40px] text-white flex gap-[10px] place-items-center"
        >
          <Text type={"text"}>
            СКАНИРУЙТЕ QR-КОД <br/>
            ДЛЯ ПОЛУЧЕНИЯ <br/>
            ДОПОЛНИТЕЛЬНОЙ <br/>
            ИНФОРМАЦИИ
          </Text>
          <img
            src={QR}
            alt="qr-code"
            className="w-[126px] h-[126px]"
          />
        </div>
      }
    </>
  )
}

export default App;
