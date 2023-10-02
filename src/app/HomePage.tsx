"use client";
import { useEffect, useState, useContext } from "react";
import Image from "next/image";
import logo from "../../public/logo2.png";
import Airtable from "airtable";
import { useRouter } from "next/navigation";
import { AppContext } from "./context/data";
import { FullScreen, useFullScreenHandle } from "react-full-screen";

const HomePage = () => {
  const { CPR, Phone, setCPR, setPhone } = useContext(AppContext);
  const [existingPhoneNumbers, setExistingPhoneNumbers] = useState([]);
  const [existingCPRs, setExistingCPRs] = useState([]);
  useEffect(() => {
    const getEntriesFromAirTable = async () => {
      var base = new Airtable({
        apiKey:
          "patqsFkj6vXnhdVvx.72cb06f684731e0d240e3faea32137bd91e7fd29c21bde7e50c3a08ac1dcb366",
      }).base("appHOwBAP6ICv8ERN");

      var table = base("GUESS Question Game");

      table.select().eachPage(
        function page(records: any, fetchNextPage: any) {
          // This function (`page`) will get called for each page of records.
          records.forEach(function (record: any) {
            setExistingCPRs((prevCPRs) => [...prevCPRs, record.fields.CPR]);
            setExistingPhoneNumbers((prevPhoneNumbers) => [
              ...prevPhoneNumbers,
              record.fields.Phone,
            ]);
          });
          // To fetch the next page of records, call `fetchNextPage`.
          // If there are more records, `page` will get called again.
          // If there are no more records, `done` will get called.
          fetchNextPage();
        },
        function done(err: any) {
          if (err) {
            console.error(err);
            return;
          }
          console.log("All records retrieved");
        }
      );
    };
    getEntriesFromAirTable();
  }, []);
  const handle = useFullScreenHandle();

  const router = useRouter();
  const handleClick = (e: any) => {
    e.preventDefault();
    setCPR("");
    setPhone("");
    if (existingCPRs.includes(CPR) || existingPhoneNumbers.includes(Phone)) {
      alert("You have already played the game");
    } else router.push("/ChoosePage");
  };

  return (
    <FullScreen handle={handle}>
      <div className="flex flex-col gap-4  text-slate-900 bg-[#CF001C] w-screen h-screen justify-center items-center">
        <Image src={logo} alt="Logo" width={150} />
        <form
          onSubmit={(e) => handleClick(e)}
          className="border-2 rounded-lg p-4 my-8 flex flex-col bg-slate-100 shadow-lg shadow-slate-400 drop-shadow-2xl transition duration-300"
        >
          <div className="flex flex-col relative z-10">
            <label className="font-semibold text-lg">CPR</label>
            <input
              required
              type="text"
              value={CPR}
              onChange={(e) => setCPR(e.target.value)}
              className="outline-none p-2 border border-slate-300 rounded-md mt-2 bg-transparent w-[300px] focus:outline-none"
            />
          </div>
          <div className="flex flex-col my-4 relative z-10">
            <label className="font-semibold text-lg text-slate-900">
              Phone Number
            </label>
            <input
              required
              type="text"
              value={Phone}
              onChange={(e) => setPhone(e.target.value)}
              className="outline-none p-2 border border-slate-300 rounded-md mt-2 bg-transparent w-[300px] focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="border w-full text-center font-semibold px-4 py-2 my-4 bg-yellow-400 hover:bg-yellow-500 transition duration-300 text-slate-900 rounded-md mx-auto relative z-10"
          >
            Start Game
          </button>
        </form>
      </div>
    </FullScreen>
  );
};

export default HomePage;
