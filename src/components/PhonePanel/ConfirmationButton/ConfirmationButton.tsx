import {useEffect, useState} from "react";
import { useSelector} from "react-redux";
import Button from "components/Button";
import Text from "components/Text";
import {useButtonContext} from "context/ButtonContext.tsx";
import {setApplicationAccepted} from "store/actions.ts";
import {initialStateType, store} from "store/store.ts";

const ConfirmationButton = () => {
	const phoneIsEntered = useSelector((state: initialStateType) => state.phoneIsEntered);
	const personalDataAgreement = useSelector((state: initialStateType) => state.personalDataAgreement);
	const [isDisabled, setDisabled] = useState(true);
	const buttonRefs = useButtonContext();

	useEffect(() => {
		if (phoneIsEntered && personalDataAgreement) {
			setDisabled(false);
		} else {
			setDisabled(true);
		}
	}, [phoneIsEntered, personalDataAgreement]);

	function handleConfirmation() {
		store.dispatch(setApplicationAccepted(true));
	}

  return (
	  <Button
		  type="blue-border"
		  className="!w-[284px] disabled:outline-disabledGray disabled:text-disabledGray disabled:hover:bg-mainBlue"
		  disabled={isDisabled}
		  onClick={handleConfirmation}
		  refValue={(button) => (buttonRefs.current[13] = button)}
	  >
		  <Text type="text">ПОДТВЕРДИТЬ НОМЕР</Text>
	  </Button>
  );
}

export default ConfirmationButton;