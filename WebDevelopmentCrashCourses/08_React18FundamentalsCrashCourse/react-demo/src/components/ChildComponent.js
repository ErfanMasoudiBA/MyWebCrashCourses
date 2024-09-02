export const ChildComponent = (props) => {
  return (
    <div>
      <button onClick={() => props.greetHandler('Erfan')}>Greet Parent</button>
    </div>
  );
};
