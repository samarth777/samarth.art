// pages/index.js
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <NavBar />

      <div className="h-screen flex flex-col justify-evenly items-center ">
        <a
          className="flex flex-col items-centermax-w-4xl  rounded-lg shadow md:flex-row  "
        >
          <div className="p-5">
          <img
            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-60 md:rounded"
            src="https://media.discordapp.net/attachments/961586736109076530/1131267981641523270/PSX_20230719_212223.jpg?width=466&height=593"
            alt="Project Image"
          /></div>
          <div className="flex flex-col justify-center leading-normal">
            <div className="flex">
              <h2 className="mb-2 text-2xl text-gray-100 font-bold tracking-tight">
                Hi, I am{" "}
              </h2>
              <h2 className="mb-2 text-2xl font-bold tracking-tight">
                &nbsp;&nbsp;Samarth
              </h2>
            </div>
            <h3 className="mb-2 text-2xl text-gray-400  tracking-tight">
              ARTIST | DEVELOPER | ASTROPHILE
            </h3>
            <p className=" font-normal text-gray-700 dark:text-gray-400">
              I like to build stuff.
            </p>
            <p className=" font-normal text-gray-700 dark:text-gray-400">
              I also like to paint.
            </p>
            <p className=" font-normal text-gray-700 dark:text-gray-400">
              Check out the projects I have built and the paintings I have painted in this website.
            </p>
          </div>
        </a>
      </div>
      <Footer />
    </div>
  );
}
