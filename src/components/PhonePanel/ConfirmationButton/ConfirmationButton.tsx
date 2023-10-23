import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import Button from "components/Button";
import Text from "components/Text";
import {initialStateType, SET_APPLICATION_ACCEPTED} from "store/store.ts";

const ConfirmationButton = () => {
	const phoneIsEntered = useSelector((state: initialStateType) => state.phoneIsEntered);
	const personalDataAgreement = useSelector((state: initialStateType) => state.personalDataAgreement);
	const [isDisabled, setDisabled] = useState(true);
	const dispatch = useDispatch();

	useEffect(() => {
		if (phoneIsEntered && personalDataAgreement) {
			setDisabled(false);
		} else {
			setDisabled(true);
		}
	}, [phoneIsEntered, personalDataAgreement]);

	function handleConfirmation() {
		dispatch({
			type: SET_APPLICATION_ACCEPTED,
			payload: true
		})
	}

  return (
	  <Button
		  type="blue-border"
		  className="!w-[284px] disabled:outline-disabledGray disabled:text-disabledGray disabled:hover:bg-mainBlue"
		  disabled={isDisabled}
		  onClick={handleConfirmation}
	  >
		  <Text type="text">ПОДТВЕРДИТЬ НОМЕР</Text>
	  </Button>
  );
}

export default ConfirmationButton;