import { check } from "../assets";
import { pricing } from "../constants";
import Button from "./Button";

const PricingList = () => {
  return (
    <div className="flex gap-[1rem] max-lg:flex-wrap">
      {pricing.map((item) => (
        <div
          key={item.id}
          className="w-[19rem] max-lg:w-full h-full px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-4 [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3"
        >
          <h4 className="h4 mb-4 flex justify-center text-center">{item.title}</h4>

          <div>
            {item.imageUrl && (
              <img
                src={item.imageUrl}
                width={50}
                height={50}
                alt={item.title}
                className="w-full h-full object-cover rounded-full my-4" />
            )}
          </div>


          <Button
            className="w-full mb-6"
            href={item.contact}
            white={!!item.price}
          >
            LinkedIn
          </Button>

          <ul>
            {item.features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start py-5 border-t border-n-6"
              >
                <img src={check} width={24} height={24} alt="Check" />
                <p className="body-2 ml-4">{feature}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>

    
  );
};

export default PricingList;
