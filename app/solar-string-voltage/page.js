"use client";

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
    <main className="flex flex-col border px-4 py-2 gap-2 w-full items-center">
      <h1 className="text-3xl mt-5 mb-10">Solar String Voltage</h1>
      <section className="flex">
        <div>
          <div className="flex w-[50vw] justify-center">
            <label className="w-60" htmlFor="min-mppt-volt">
              Minimum MPPT Voltage
            </label>
            <input
              value={minV}
              onChange={(e) => setMinV(parseFloat(e.target.value))}
              className="border border-slate-500 text-center"
              type="number"
              id="min-mppt-volt"
            />
          </div>
          <div className="flex w-[50vw] justify-center">
            <label className="w-60" htmlFor="max-mppt-volt">
              Maximum MPPT Voltage
            </label>
            <input
              value={maxV || ""}
              onChange={handleMaxVChange}
              className="border border-slate-500 text-center"
              type="number"
              id="max-mppt-volt"
            />
          </div>
          <div className="flex w-[50vw] justify-center">
            <label className="w-60" htmlFor="voc">
              Open Circuit Voltage <sub>VOC</sub>
            </label>
            <input
              value={voc || ""}
              onChange={handleVocChange}
              className="border border-slate-500 text-center"
              type="number"
              id="voc"
            />
          </div>
        </div>
        <div>
          <div className="flex w-[50vw] justify-center">
            <label className="w-60" htmlFor="min-solar-panels">
              Minimum Solar Panels
            </label>
            <input
              value={minP || ""}
              readOnly
              className="border border-slate-500 text-center"
              type="number"
              id="min-solar-panels"
            />
          </div>
          <div className="flex w-[50vw] justify-center">
            <label className="w-60" htmlFor="max-solar-panels">
              Maximum Solar Panels
            </label>
            <input
              value={maxP || ""}
              readOnly
              className="border border-slate-500 text-center"
              type="number"
              id="max-solar-panels"
            />
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center px-4 py-2 bg-slate-500 rounded-sm">
        <p>48V Offgrid System Recommended</p>
        <p>String Minimum: 220VOC</p>
      </section>
    </main>
  );
};

export default SolarStringVoltage;
