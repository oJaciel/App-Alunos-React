'use client';

import LoginFormComponent from "./components/LoginFormComponent";
import LoginLogoComponent from "./components/LoginLogoComponent";

export default function Home() {
  return (
    <div className="bg-gray-100 flex flex-row min-h-screen justify-center items-center">
      <div className="bg-white flex flex-col items-center w-1/3 mx-auto p-5">
        <LoginLogoComponent />
        <LoginFormComponent />
      </div>

    </div>
  );
}
