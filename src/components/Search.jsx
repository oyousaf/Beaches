import React from "react";
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdOutlineTravelExplore } from "react-icons/md";

const Search = () => {
  return (
    <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16">
      <div className="lg:col-span-2 flex flex-col justify-evenly">
        <div>
          <h2>ALL-INCLUSIVE LUXURY VACATIONS FOR TWO</h2>
          <p className="py-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit
            amet neque a sem ultrices placerat. Donec volutpat vel velit quis
            scelerisque. Aliquam bibendum ante at ipsum hendrerit, nec sagittis
            elit iaculis. Donec non lobortis nulla. Morbi lacinia laoreet
            ultrices. Morbi risus eros, porta in turpis non, ultrices commodo
            ex. Phasellus auctor posuere odio sit amet fringilla. Donec
            consequat rhoncus augue, iaculis ornare quam blandit vitae. Proin ex
            dui, ultrices ut lacus vitae, vehicula interdum lacus. Vestibulum
            cursus risus tellus, nec suscipit elit imperdiet eget. Aenean sed
            felis nec diam lobortis lobortis ac nec est. Quisque cursus libero
            auctor ligula pharetra, vel accumsan nunc eleifend. Aliquam vitae
            rutrum mi, ut mattis velit.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8 py-4">
          <div className="flex flex-col lg:flex-row items-center text-center">
            <button>
              <RiCustomerService2Fill size={50} />
            </button>
            <div>
              <h3 className="py-2">LEADING SERVICE</h3>
              <p className="py-1">ALL-INCLUSIVE COMPANY FOR 20 YEARS</p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center text-center">
            <button>
              <MdOutlineTravelExplore size={50} />
            </button>
            <div>
              <h3 className="py-2">AUTOMATED BOOKINGS</h3>
              <p className="py-1">ALL-INCLUSIVE COMPANY FOR 20 YEARS</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="border text-center">
          <p className="pt-2">GET AN ADDITIONAL 10% OFF</p>
          <p className="py-4">12 HOURS REMAINING</p>
          <p className="bg-gray-800 text-gray-200 py-2">BOOK NOW & SAVE!</p>
        </div>
        <form className="w-full">
          <div className="flex flex-col my-2">
            <label>Destination</label>
            <select className="border rounded-md p-2">
                <option>Grande Antigua</option>
                <option>Key West</option>
                <option>Maldives</option>
                <option>Cozumel</option>
            </select>
          </div>
          <div className="flex flex-col my-4">
            <label>Check-In</label>
            <input className="border rounded-md p-2" type="date" />
          </div>
          <div className="flex flex-col my-2">
            <label>Check-Out</label>
            <input className="border rounded-md p-2" type="date" />
          </div>
          <button className="w-full">Rates & Availability</button>
        </form>
      </div>
    </div>
  );
};

export default Search;
