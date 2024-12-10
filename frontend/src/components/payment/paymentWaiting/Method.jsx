import React from "react";

function Method() {
  return (
    <div>
      <h3 className="text-xl font-semibold my-7">Payment Method:</h3>
      <div className="flex items-center mb-6">
        <img src="/img/logo/ovo.png" alt="OVO" className="w-24" />
      </div>
      <div className="mb-6">
        <h4 className="font-medium text-lg mb-2">How to pay with OVO?</h4>
        <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700">
          <li>Isi nomor ponsel akun OVO anda.</li>
          <li>Klik kirim notifikasi OVO.</li>
          <li>Buka notifikasi dari OVO di ponsel anda.</li>
          <li>Masukkan PIN anda.</li>
          <li>Klik bayar.</li>
        </ol>
      </div>

      <div className="mb-4">
        <label className="block font-medium text-sm mb-2" htmlFor="phone">
          No. Ponsel Akun OVO
        </label>
        <input
          type="text"
          id="phone"
          placeholder="08123456789"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div className="flex flex-col space-y-4 mt-6">
        <button className="bg-indigo-600 text-white px-6 py-2 rounded-md">
          Kirim notifikasi OVO
        </button>
        <button className="text-indigo-600 border border-indigo-600 px-6 py-2 rounded-md">
          Cek status pembayaran
        </button>
      </div>
    </div>
  );
}

export default Method;
