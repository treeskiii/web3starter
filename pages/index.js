import { ConnectButton } from "@rainbow-me/rainbowkit";
import Uppermenu from "../components/Uppermenu";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="h-full grid grid-cols-mobile md:grid-cols-desktop bg-slate-600">
      <div className="relative">
     <Uppermenu />
     </div>
      <div className="mt-10">
      <Navbar />
      </div>
     
     <div className="md:hidden"> 


     </div>
     </div>

  );
};

const InfoSection = () => {
  return (
    <div className="mt-10">
      <h2 className="text-xl font-bold">If you need help</h2>
      <div className="flex flex-col gap-2 mt-2">
        <a
          href="https://wagmi.sh"
          target="_blank"
          className="underline text-gray-600"
        >
          Link to wagmi docs
        </a>
        <a
          href="https://github.com/dhaiwat10/create-web3-frontend"
          target="_blank"
          className="underline text-gray-600"
        >
          Open an issue on Github
        </a>
        <a
          href="https://twitter.com/dhaiwat10"
          target="_blank"
          className="underline text-gray-600"
        >
          DM me on Twitter
        </a>
      </div>
    </div>
  );
};

export default Home;
