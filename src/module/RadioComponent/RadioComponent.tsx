import { Value } from "sass";

interface RadioType {
  name: string;
  value: string;
  setRadio: (inputValue: string) => void;
}

const RadioCompo = (props: RadioType) => {
  const { name, value, setRadio } = props;

  return (
    <div>
      
      <input
      
        type="radio"
        value={value}
        name={name}
        onChange={(e) => setRadio(e.target.value)}
      />
      <label htmlFor={value}> {value}</label>
    </div>
  );
};

export default RadioCompo;
