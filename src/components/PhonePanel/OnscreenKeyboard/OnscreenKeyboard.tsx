import {useDispatch, useSelector} from "react-redux";
import Button from "components/Button";
import Text from "components/Text";
import {initialStateType, SET_PHONE_NUMBER} from "store/store.ts";

const OnscreenKeyboard = () => {
	const phoneNumber = useSelector((state: initialStateType) => state.phoneNumber);
	const numbers: number[] = Array.from({ length: 10 }, (_, index) => index);
	const dispatch = useDispatch();

	function onscreenKeyboard(number: number) {
		if (phoneNumber.length < 10) {
			dispatch({
				type: SET_PHONE_NUMBER,
				payload: phoneNumber + number.toString()
			});
		}
	}

	function backspaceKey() {
		dispatch({
			type: SET_PHONE_NUMBER,
			payload: phoneNumber.slice(0, -1)
		});
	}
	
  return (
	  <div
		  className="grid grid-cols-3 gap-[10px] py-[20px]"
	  >
		  {numbers.map((number) => (
			  <Button
				  type="blue-border"
				  key={number}
				  className="first:order-last"
				  onClick={() => onscreenKeyboard(number)}
			  >
				  <Text type="text">{number}</Text>
			  </Button>
		  ))}
		  <Button
			  type="blue-border"
			  className="col-span-2 !w-[186px]"
			  onClick={() => backspaceKey()}
		  >
			  <Text type="text">СТЕРЕТЬ</Text>
		  </Button>
	  </div>
  );
}

export default OnscreenKeyboard;