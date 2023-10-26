import {useEffect, useState} from "react";
import { useSelector} from "react-redux";
import Button from "components/Button";
import Text from "components/Text";
import {useButtonContext} from "context/ButtonContext.tsx";
import {initialStateType, store} from "store/store.ts";
import {validatePhoneNumber} from "store/asyncActions.ts";

const ConfirmationButton = () => {
	const phoneNumber = useSelector((state: initialStateType) => state.phoneNumber);
	const isPhoneEntered = useSelector((state: initialStateType) => state.isPhoneEntered);
	const personalDataAgreement = useSelector((state: initialStateType) => state.personalDataAgreement);
	const [isDisabled, setDisabled] = useState(true);
	const buttonRefs = useButtonContext();

	useEffect(() => {
		if (isPhoneEntered && personalDataAgreement) {
			setDisabled(false);
		} else {
			setDisabled(true);
		}
	}, [isPhoneEntered, personalDataAgreement]);

	function handleConfirmation() {
		store.dispatch(validatePhoneNumber(phoneNumber));
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