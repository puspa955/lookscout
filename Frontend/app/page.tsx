import LandingPagenav from "./components/LandingPagenav";
import HomePage from "./components/HomePage";
import Message from "./components/Message";
import Check from "./components/Check";
import Team from "./components/Team";
import Questions from "./components/Questions";
import Call from "./components/Call";
import Logo from "./components/Logo";
import Footer from "./components/Footer";



export default function Home() {
  

  return (
    <main className="flex min-h-screen flex-col items-center justify-between  bg-white">
    <div className='absolute top-0 right-0 z-20'>
          <LandingPagenav  />
          </div>
          <HomePage />
          <Message />
          <Check />
          <Team />
          <Questions/>
          <Call />
          <Logo />
          <Footer />
          
        </main>
  );
}
