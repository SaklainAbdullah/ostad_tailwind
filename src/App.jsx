import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <>
      {/* for project setup follow this https://tailwindcss.com/docs/guides/vite#react */}
      {/* basic css */}
      {/* <div
        className={`${darkmode ? "dark" : ""} dark:bg-gray-500 h-screen dark`}
      >
        <h1>Hello</h1>
        <div>
          <button
            onClick={() => {
              setDarkmode(!darkmode);
            }}
            className="btn"
          >
            Toggle
          </button>
        </div>
        <button className="btn"></button>
      </div> */}

      {/* hover and focus */}
      {/* 
      <form className="p-4">
        <input
          className="border border-gray-300 outline-none focus:ring-4 focus:ring-red-500 rounded p-2 w-full"
          type="text"
          placeholder="Focus me!"
        />
        <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700 active:bg-green-800 disabled:opacity-50">
          Submit
        </button>
      </form> */}

      {/* responsive design */}
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
        <div className="bg-red-500 h-20">1</div>
        <div className="bg-blue-500 h-20">2</div>
        <div className="bg-green-500 h-20">3</div>
        <div className="bg-yellow-500 h-20">4</div>
    </div> */}

      {/* dark mode check tailwind.config.ts also*/}
      {/* <div
        className={`${
          darkMode ? "dark" : ""
        } min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900`}
      >
        <div className="p-4">
         
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="mb-6 py-2 px-4 bg-blue-500 text-white font-bold rounded shadow-md hover:bg-blue-700 dark:bg-gray-700 dark:hover:bg-gray-600"
          >
            Toggle Dark Mode
          </button>
     
          <div className="max-w-sm bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <img
              className="w-full h-48 object-cover"
              src="https://via.placeholder.com/400x300"
              alt="Card Visual"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                Welcome to Dark Mode!
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                This card demonstrates how dark mode can enhance your UI for
                better user experience. Switch between light and dark themes to
                see the effect!
              </p>
            </div>
          </div>
        </div> 
       </div> */}

      {/* using apply directive check index.css also*/}

      {/* <div className="p-4">
        <button className="btn">Hello</button>
        <button className="btn ml-4">Ostad</button>
    </div> */}
    </>
  );
}

export default App;
