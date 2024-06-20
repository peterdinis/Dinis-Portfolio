import { ArrowUpIcon } from "@chakra-ui/icons";
import { type FC, useEffect, useState } from "react";

const ScrollToTop: FC = () => {
	const [showTopBtn, setShowTopBtn] = useState(false);
	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 400) {
				setShowTopBtn(true);
			} else {
				setShowTopBtn(false);
			}
		});
	}, []);
	const goToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<div className="top-to-btm">
			{showTopBtn && (
				<ArrowUpIcon
					h={10}
					fontSize={60}
					onClick={goToTop}
					className="icon-position icon-style"
				/>
			)}
		</div>
	);
};
export default ScrollToTop;
