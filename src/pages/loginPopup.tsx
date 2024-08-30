import { Button, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";

const LoginPopUp = () => {
	const handleSignin = () => {
		const data = { message: 'Hello from the new window!', signIn: true };
		window.opener.postMessage(data, 'http://localhost:3003/loginPopup');
		window.close();
	}

	return (
		<LoginPopUpWrapper>
			<Button variant="contained" onClick={handleSignin}>
				Sign in
			</Button>
		</LoginPopUpWrapper>
	)
}

const LoginPopUpWrapper = styled(Stack)({
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	minHeight: "100vh"
})

export { LoginPopUp };