import { Fragment } from "react";

export const Layout = ({ children }) => {
  return (
    <>
      <header style={{ backgroundColor: '#eee', padding: '20px' }}>header</header>
      <main>{children}</main>
      <footer style={{ backgroundColor: '#eee', padding: '20px' }}>footer</footer>
    </>
  );
}