import {createRoot} from "react-dom/client"
import "./index.scss"
import App from "./components/App/App"
import { store } from "./Redux/Store"
import { Provider } from "react-redux"

createRoot(document.body).render(
	<Provider store={store}>
		<App/>
	</Provider>
)

