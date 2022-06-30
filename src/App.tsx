// import { UserLoader } from "./cmps/UserLoader";
// import { UserLoader } from "./cmps/UserLoader";
import { ProductInfo } from "./cmps/ProductInfo";
import { ReourceLoader } from "./cmps/ReourceLoader";
import { UserInfo } from "./cmps/UserInfo";


function App() {
	return (<>
		<ReourceLoader resourceUrl='/users/1' resourceName='user' >
			<UserInfo />
		</ReourceLoader>
		<ReourceLoader resourceUrl='/products/1' resourceName='product' >
		<ProductInfo />
		</ReourceLoader>
	</>
	);
}

export default App;