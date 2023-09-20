import React from "react";

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col justify-center space-y-5">
        <p className="text-3xl text-center">404</p>
        <h1 className="text-xl">The requested post does not exist.</h1>
      </div>
    </div>
  );
}

export default NotFound;
