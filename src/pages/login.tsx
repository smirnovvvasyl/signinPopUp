import { Button, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";

const Login = () => {
	const handleLogin = () => {
		window.open('http://localhost:3003/loginPopup', '_blank', 'width=600,height=400')

		window.addEventListener('message', (event) => {
			if (event.origin === 'http://localhost:3003' && event.data.signIn) {
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