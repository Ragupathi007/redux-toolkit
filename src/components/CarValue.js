import { useSelector } from "react-redux";

const CarValue = () => {
  const totalCost = useSelector(({ cars: { data, searchTerm } }) => {
    const filteredCars = data.filter((car) => {
      return car.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    const Cost = filteredCars.reduce((acc, car) => acc + car.cost, 0);
    return Cost;
  });

  return <div className="car-value">Total Cost:${totalCost}</div>;
};

export default CarValue;
