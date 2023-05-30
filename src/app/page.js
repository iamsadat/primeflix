import Image from "next/image";
import About from "./about/page";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="bg-white">
      <Navbar />
      <div className="relative">
        <Image
          src="/home-background.jpg"
          width={1200}
          height={800}
          alt="Netflix Background image"
          className="block mx-auto mt-4 blur-[1px] opacity-90 relative bg-gradient-to-br from-[rgba(0,0,0,0.527)] via-[rgba(0,0,0,0.5)] filter brightness-75"
        />
        <div className="absolute top-[40%] right-[30%] text-center">
          <h1 className="font-extrabold text-3xl">
            Unlimited movies, TV shows and more
          </h1>
          <h3 className="font-medium text-lg mt-2">
            Watch anywhere. Cancel anytime
          </h3>
        </div>
        <div className="absolute inset-x-0 bottom-0 flex justify-center space-x-4 pb-8">
          <a
            href="/account"
            className="px-4 py-2 text-gray-900 rounded bg-white hover:bg-red-500"
          >
            Login
          </a>
          <a
            href="/account"
            className="px-4 py-2 text-gray-900 rounded bg-white hover:bg-red-500"
          >
            Sign Up
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}

/*
  <div className="bg-white absolute">
      <div>
        <Navbar />
        <Image
          src="/home-background.jpg"
          width={1200}
          height={800}
          alt="Netflix Background image"
          className="block mx-auto mt-4 blur-[1px] relative"
        />
        <div className="absolute bottom-8 left-16">
          <button
            src="/account"
            className="mx-4 mt-4 py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 dark:text-black md:dark:hover:text-red-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent font-bold static"
          >
            Login
          </button>
        </div>
        <div className="absolute bottom-8 left-16">
          <button
            src="/account"
            className="mx-4 mt-4 py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 dark:text-black md:dark:hover:text-red-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent font-bold static"
          >
            Sign Up
          </button>
        </div>
        <Footer />
      </div>
    </div>
  */
