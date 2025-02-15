import EmployeeCard from "./EmployeeCard";

const EmployeeHero = () => {
  const head = [1, 2, 3]; // Example employee IDs

  return (
    <div className="my-20 p-10 bg-gray-50">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-800">Meet Our Team</h1>
        <p className="mt-4 text-lg text-gray-600">
          Get to know the talented individuals who make it all happen.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto">
        {head.map((data, index) => (
          <EmployeeCard key={index} id={data} />
        ))}
      </div>
    </div>
  );
};

export default EmployeeHero;