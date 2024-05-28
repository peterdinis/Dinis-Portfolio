import { ChakraProvider, Spinner } from "@chakra-ui/react";
import { StrictMode, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "react-vertical-timeline-component/style.min.css";
import App from "./App.tsx";
import "./i18n/i18n.ts";
import "./index.css";
import ScrollToTop from "./components/ScrollToTop.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<ChakraProvider>
			<Suspense
				fallback={
					<Spinner
						thickness="4px"
						speed="0.65s"
						emptyColor="gray.200"
						color="blue.500"
						size="xl"
					/>
				}
			>
				<App />
			</Suspense>
			<ScrollToTop />
		</ChakraProvider>
	</StrictMode>,
);
