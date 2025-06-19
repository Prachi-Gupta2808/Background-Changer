import { useState } from 'react';

function App() {
  const [color, setColor] = useState("white");
  const [message, setMessage] = useState("");

  const handleColorChange = (newColor, msg) => {
    setColor(newColor);
    setMessage(msg);
  };

  return (
    <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
      <div className="flex flex-col items-center justify-start pt-20 h-screen space-y-4">
        <h1 className="text-gray-700 text-4xl font-bold">Change colours like never before!</h1>
        {message && (
          <p className="text-lg font-medium text-white bg-opacity-40 px-4 py-2 rounded-xl">
            {message}
          </p>
        )}
      </div>

      <div className="fixed flex flex-wrap justify-center bottom-10 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={() => handleColorChange("red", "You chose RED – bold and bright!")}
            className="outline-none rounded-3xl px-8 py-3 text-white"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => handleColorChange("lavender", "You chose LAVENDER – soft and calm!")}
            className="outline-none rounded-3xl px-8 py-3 text-white"
            style={{ backgroundColor: "lavender" }}
          >
            Lavender
          </button>
          <button
            onClick={() => handleColorChange("blue", "You chose BLUE – cool and confident!")}
            className="outline-none rounded-3xl px-8 py-3 text-white"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
          <button
            onClick={() => handleColorChange("olive", "You chose OLIVE – natural and earthy!")}
            className="outline-none rounded-3xl px-8 py-3 text-white"
            style={{ backgroundColor: "olive" }}
          >
            Olive
          </button>
          <button
            onClick={() => handleColorChange("black", "You chose BLACK – classy and strong!")}
            className="outline-none rounded-3xl px-8 py-3 text-white"
            style={{ backgroundColor: "black" }}
          >
            Black
          </button>
          <button
            onClick={() => handleColorChange("yellow", "You chose YELLOW – bright and cheerful!")}
            className="outline-none rounded-3xl px-8 py-3 text-white"
            style={{ backgroundColor: "yellow", color: "black" }}
          >
            Yellow
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
