import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

function Square({ value }) {
  // click function
  function handleClick() {
    console.log(`clicked value ${value}!`);
  }


  return ( 
    <button className="square" onClick={handleClick}>
      {value}
    </button>
  );
}
