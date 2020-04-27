import React from "react";

function AppFooter() {
  const date = new Date();
  return (
    <>
      <footer className="Footer">
        <div className="Footer__Wrapper">
          <p>Permanent Culture {date.getFullYear()}</p>
        </div>
      </footer>
    </>
  );
}

export default AppFooter;
