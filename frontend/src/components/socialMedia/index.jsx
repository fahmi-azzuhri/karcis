import React from "react";
import { FaTwitter, FaInstagram, FaFacebookSquare } from "react-icons/fa";

export function FooterSocialMedia() {
  return (
    <div className="flex space-x-4">
      <a href="#">
        <FaTwitter />
      </a>
      <a href="#">
        <FaInstagram />
      </a>
      <a href="#">
        <FaFacebookSquare />
      </a>
    </div>
  );
}

export function DetailEventSocialMedia() {
  return (
    <div className="flex space-x-4 pb-4">
      <a href="#" className="border border-gray-500 rounded-full p-2">
        <FaTwitter />
      </a>
      <a href="#" className="border border-gray-500 rounded-full p-2">
        <FaInstagram />
      </a>
      <a href="#" className="border border-gray-500 rounded-full p-2">
        <FaFacebookSquare />
      </a>
    </div>
  );
}

export default {
  FooterSocialMedia,
  DetailEventSocialMedia,
};
