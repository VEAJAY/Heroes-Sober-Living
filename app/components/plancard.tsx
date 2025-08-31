import Link from "next/link";
interface PlanCardProps {
  title: string;
  price: string;
  buttonText: string;
  link: string;
  benefits?: string[];
}
export default function PlanCard({
  title,
  price,
  buttonText,
  link,
  benefits = [],
}: PlanCardProps) {
  return (
    <div className="relative m-8 px-6 py-6 sm:px-32 sm:py-12 border-2 border-b-[56px] border-gray-900 font-serif">
      {" "}
      <h2 className="text-xl sm:text-4xl">{title}</h2>{" "}
      <p className="text-md sm:text-2xl font-sans">Starting at</p>{" "}
      <h1 className="text-6xl sm:text-8xl font-bold sm:mt-8">
        {" "}
        {price}/<span className="text-3xl sm:text-6xl font-normal">mo</span>{" "}
      </h1>{" "}
      {benefits.length > 0 && (
        <ul className="mt-8 list-disc list-inside text-left w-full space-y-2 text-sm sm:text-lg font-sans">
          {benefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
      )}
      <Link
        href={link}
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-[-42px] text-white sm:text-xl font-sans hover:text-gray-400 transition-colors duration-200"
      >
        {" "}
        {buttonText}{" "}
      </Link>{" "}
    </div>
  );
}
