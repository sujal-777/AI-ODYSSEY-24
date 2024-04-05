import { companyLogos } from "../constants";

const CompanyLogos = ({ className }) => {
	return (
		<div className={className}>
			<h5 className="tagline mb-6 text-center text-n-1/50">
				Embark on a Journey through the AI Frontier
			</h5>
			<ul className="flex">
				{companyLogos.map((logo, index) => (
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
export default CompanyLogos;