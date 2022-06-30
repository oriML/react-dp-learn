// import { UserLoader } from "./cmps/UserLoader";
import { UserLoader } from "./cmps/UserLoader";
import { UserInfo } from "./cmps/UserInfo";


function App() {
	return (
		<UserLoader userId={1}>
			<UserInfo />
		</UserLoader>
	);
}

export default App;