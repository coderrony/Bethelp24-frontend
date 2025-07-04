"use client"
import React, { useState } from "react";
import Link from "next/link";

function JoinPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    if (!acceptedTerms) {
      alert("You must accept the terms and conditions.");
      return;
    }
    // Handle registration logic here
    alert(`Welcome, ${name}!`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-2">
      <form
        onSubmit={handleSubmit}
        className="bg-white/90 rounded-xl shadow-2xl p-8 w-full max-w-md"
      >
        <h1 className="text-3xl font-bold text-center text-green-400 mb-6">
          Register to BetHelp24
        </h1>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Name
          </label>
          <input
            type="text"
            required
            value={name}
            onChange={e => setName(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            required
            value={phone}
            onChange={e => setPhone(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            placeholder="Enter your phone number"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Password
          </label>
          <input
            type="password"
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            placeholder="Enter your password"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2">
            Confirm Password
          </label>
          <input
            type="password"
            required
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            placeholder="Confirm your password"
          />
        </div>
        <div className="mb-6 flex items-center">
          <input
            id="terms"
            type="checkbox"
            checked={acceptedTerms}
            onChange={e => setAcceptedTerms(e.target.checked)}
            className="mr-2"
            required
          />
          <label htmlFor="terms" className="text-gray-700 text-sm">
            I accept the{" "}
            <Link href="/terms-conditions" className="text-indigo-700 underline" target="_blank">
              terms and conditions
            </Link>
          </label>
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-700 hover:bg-indigo-800 text-white font-bold py-2 rounded-lg transition"
        >
          Join Now
        </button>
        <div className="mt-4 text-center">
          <span className="text-gray-600">Have an account? </span>
          <Link href="/login" className="text-indigo-700 font-semibold hover:underline">
            Login
          </Link>
        </div>
      </form>
    </div>
  );
}

export default JoinPage;