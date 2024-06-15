"use client";
import "../globals.css";

import React, { useState } from "react";

const SolarStringVoltage = () => {
  const [minV, setMinV] = useState(220);
  const [maxV, setMaxV] = useState(null);
  const [voc, setVoc] = useState(null);
  const [minP, setMinP] = useState(null);
  const [maxP, setMaxP] = useState(null);

  function handleVocChange(e) {
    const vocValue = parseFloat(e.target.value);
    setVoc(vocValue);
    if (vocValue) {
      setMinP(Math.ceil(minV / vocValue));
      if (maxV) {
        setMaxP(Math.floor(maxV / vocValue));
      }
    } else {
      setMinP(null);
      setMaxP(null);
    }
  }

  function handleMaxVChange(e) {
    const maxValue = parseFloat(e.target.value);
    setMaxV(maxValue);
    if (maxValue && voc) {
      setMaxP(Math.floor(maxValue / voc));
    } else {
      setMaxP(null);
    }
  }

  return (
    <main className="flex flex-col px-4 py-2 gap-2 h-[95vh] items-center space-y-10">
      <h1 className="text-3xl mt-5 mb-10">Solar String Voltage</h1>
      <section className="flex w-full justify-around">
        <div className='space-y-4'>
          <div className="flex justify-center">
            <label className="w-60" htmlFor="min-mppt-volt">
              Minimum MPPT Voltage
            </label>
            <input
              value={minV}
              onChange={(e) => setMinV(parseFloat(e.target.value))}
              className="border border-slate-500 text-center px-4 py-1"
              type="number"
              id="min-mppt-volt"
            />
          </div>
          <div className="flex justify-center">
            <label className="w-60" htmlFor="max-mppt-volt">
              Maximum MPPT Voltage
            </label>
            <input
              value={maxV || ""}
              onChange={handleMaxVChange}
              className="border border-slate-500 text-center px-4 py-1"
              type="number"
              id="max-mppt-volt"
            />
          </div>
          <div className="flex justify-center">
            <label className="w-60" htmlFor="voc">
              Open Circuit Voltage <sub>VOC</sub>
            </label>
            <input
              value={voc || ""}
              onChange={handleVocChange}
              className="border border-slate-500 text-center px-4 py-1"
              type="number"
              id="voc"
            />
          </div>
        </div>
        <div className='space-y-4'>
          <div className="flex justify-center">
            <label className="w-60" htmlFor="min-solar-panels">
              Minimum Solar Panels
            </label>
            <input
              value={minP || ""}
              readOnly
              className="border border-slate-500 text-center px-4 py-1"
              type="number"
              id="min-solar-panels"
            />
          </div>
          <div className="flex justify-center">
            <label className="w-60" htmlFor="max-solar-panels">
              Maximum Solar Panels
            </label>
            <input
              value={maxP || ""}
              readOnly
              className="border border-slate-500 text-center px-4 py-1"
              type="number"
              id="max-solar-panels"
            />
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center px-4 py-2 bg-slate-500 rounded-sm text-white">
        <p>48V Offgrid System Recommended</p>
        <p>String Minimum: 220VOC</p>
      </section>
    </main>
  );
};

export default SolarStringVoltage;
