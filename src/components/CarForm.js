import { useDispatch, useSelector } from "react-redux";
import { changeName, ChangeCost } from "../store/slice/formSlice";
import { addCar } from "../store/slice/carsSlice";
const CarForm = () => {
  const { name, cost } = useSelector((state) => state.form);
  const dispatch = useDispatch();
  const handleNameChange = (e) => {
    dispatch(changeName(e.target.value));
  };
  const handleCoseChange = (e) => {
    const carCost = parseInt(e.target.value) || 0;
    dispatch(ChangeCost(carCost));
  };
  const handleSumbit = (e) => {
    e.preventDefault();
    dispatch(
      addCar({
        name,
        cost,
      })
    );
    dispatch(changeName(""));
    dispatch(ChangeCost(0));
  };
  return (
    <div className="car-form panel" onSubmit={handleSumbit}>
      <h4 className="subtitle is-3"></h4>
      <form>
        <div className="field-group">
          <label className="label">Name</label>
          <input
            required
            className="input is-expanded"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div className="field-group">
          <label className="label">Cost</label>
          <input
            required
            className="input is-expanded"
            value={cost || ""}
            type="number"
            onChange={handleCoseChange}
          />
        </div>
        <div className="field">
          <button className="button is-link">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default CarForm;
