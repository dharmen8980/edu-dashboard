import { Divider } from "@nextui-org/react";
import React from "react";

export const Footer = () => {
  return (
    <div className="bg-slate-300 px-6 grid grid-cols-3 text-center py-4">
      <div>
        <p>About us</p>
        <Divider />
        <p className="text-start">
          We are educational consultancy helping you to achiece your goal. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar
          risus non risus hendrerit venenatis. Pellentesque sit amet hendrerit
          risus, sed porttitor quam. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Nullam pulvinar risus non risus hendrerit venenatis.
          Pellentesque sit amet hendrerit risus, sed porttitor quam.
        </p>
      </div>
      <div>
        <p>Our Services</p>
        <Divider />{" "}
        <p className="text-start">
          We are educational consultancy helping you to achiece your goal.
        </p>
      </div>
      <div>
        <p>Contact us</p>
        <Divider />{" "}
        <p className="text-start">
          We are educational consultancy helping you to achiece your goal.
        </p>
      </div>
    </div>
  );
};
