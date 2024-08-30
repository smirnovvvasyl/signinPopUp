import { Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const Dashboard = () => {
	return (
		<DashboardWrapper>
			<Typography variant="h3">
				sign in successed
			</Typography>
		</DashboardWrapper>
	)
}

const DashboardWrapper = styled(Stack)({
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	minHeight: "100vh"
})

export { Dashboard };