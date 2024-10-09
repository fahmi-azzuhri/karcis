import React from "react";
import { FooterSocialMedia } from "../../components/socialMedia";

function ViewFooter(props) {
  const { about, partner, support, app, ios, android } = props;
  return (
    <footer className="bg-blueDefault text-white">
      <div className="container mx-auto px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
          <h2 className="font-semibold text-xl">Karcis.com</h2>
          <div className="flex flex-col">
            <h3 className="font-semibold mb-4">About</h3>
            {about.map((item) => (
              <p className="mb-1" key={item}>
                {item}
              </p>
            ))}
          </div>
          <div className="flex flex-col">
            <h3 className="font-semibold mb-4">Partner with us</h3>
            {partner.map((item) => (
              <p className="mb-1" key={item}>
                {item}
              </p>
            ))}
          </div>
          <div className="flex flex-col">
            <h3 className="font-semibold mb-4">Support</h3>
            {support.map((item) => (
              <p className="mb-1" key={item}>
                {item}
              </p>
            ))}
          </div>
          <div className="flex flex-col">
            <h3 className="font-semibold mb-4">App</h3>
            {app.map((item) => (
              <p className="mb-1" key={item}>
                {item}
              </p>
            ))}
            <img className="w-32 mb-1" src={ios} alt="" />
            <img className="w-32" src={android} alt="" />
          </div>
        </div>
      </div>

      <hr />
      <div className="container mx-auto px-8 py-8">
        <div className="flex justify-between items-center">
          <FooterSocialMedia />
          <div>
            <p>&copy; 2020 Karcis incorporated</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default ViewFooter;
