import { Button, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";

const Login = () => {
	const handleLogin = () => {
		window.open('https://signin-pop-up.vercel.app/loginPopup', '_blank', 'width=600,height=400')

		window.addEventListener('message', (event) => {
			if (event.origin === 'https://signin-pop-up.vercel.app' && event.data.signIn) {
				console.log('Data received from the new window:', event.data);
				window.location.href = '/dashboard';
			}
		})
	}

	return (
		<LoginWrapper>
			<Button variant="contained" onClick={handleLogin}>
				Log In
			</Button>
		</LoginWrapper>
	)
}

const LoginWrapper = styled(Stack)({
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	minHeight: "100vh"
})

export { Login };