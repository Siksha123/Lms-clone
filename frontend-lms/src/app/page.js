
import About from "./about/page";
import Register from "./register/page";
import Login from "./login/page";
import Search from "./search/page";
import Service from "./service/page";
export default function Home() {
  return (
  <>
  <h1 className="">Home</h1>
  <Service/>
 <About/> 
 <Register/>
 <Login/>
 <Search/>
  </>
  );
}
