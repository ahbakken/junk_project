interface DisplayProps {
  sum: number;
}

const Display: React.FC<DisplayProps> = ({ sum }) => {
  return (
    <div>
      <h1>Sum: {sum}</h1>
    </div>
  );
};

export default Display;
