import { Communitypartner } from "../constants";
0
const Communitypartner = ({ className }) => {
	return (
		<div>
			<h5 className="tagline mb-6 text-center text-n-1/50">
				Our Community Partner
			</h5>
			<ul className="flex">
				{Communitypartner.map((logo, index) => (
					<li
						className="flex items-center justify-center flex-1 h-[8.5rem]"
						key={index}
					>
						<img src={logo} width={125} height={20} alt={logo} />
					</li>
				))}
			</ul>
		</div>
	);
};

export default Communitypartner;