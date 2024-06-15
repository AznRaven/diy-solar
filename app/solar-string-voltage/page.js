"use client";
import { Content } from "next/font/google";
import "../globals.css";

import React, { useState } from "react";

const SolarStringVoltage = () => {
  const [minV, setMinV] = useState(220);
  const [maxV, setMaxV] = useState(null);
  const [voc, setVoc] = useState(null);
  const [minP, setMinP] = useState(null);
  const [maxP, setMaxP] = useState(null);

  const reason = [
    {
      title: "Efficiency and Performance",
      content:
        "Ensuring the string voltage is within the optimal range for the Maximum Power Point Tracker (MPPT) maximizes system efficiency and performance. The MPPT adjusts the electrical operating point of the modules, maintaining peak performance.",
    },
    {
      title: "System Compatibility",
      content:
        "String voltage must match the inverter's voltage range to prevent damage. Ensuring compatibility maintains the overall integrity of the system.",
    },
    {
      title: "Safety",
      content:
        "Operating within the correct voltage range prevents over-voltage conditions, reducing the risk of fires or electrical shocks. Proper voltage calculation ensures compliance with safety standards.",
    },
    {
      title: "Temperature Considerations",
      content:
        "Solar panel voltage output varies with temperature changes. Calculating string voltage accounts for these variations, ensuring safe and efficient operation under different conditions.",
    },
    {
      title: "Optimization of Panel Configuration",
      content:
        "Correct string voltage helps determine the optimal number of panels in series. This optimization makes the best use of space and resources while maintaining system efficiency.",
    },
    {
      title: "Longevity and Reliability",
      content:
        "Operating within the correct voltage range reduces stress on components, increasing their longevity and reliability. Avoiding over-voltage conditions prevents premature wear and tear.",
    },
    {
      title: "Compliance with Regulations and Standards",
      content:
        "Solar PV systems must comply with standards specifying voltage ranges and safety requirements. Proper voltage calculation ensures compliance, avoiding legal and financial penalties.",
    },
  ];

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
    <main className="flex flex-col px-4 py-2 gap-2 items-center space-y-5 h-full">
      <h1 className="text-3xl mt-2 font-bold">Solar String Voltage</h1>
      {/* <p className="text-2xl">Solar Panels in Series</p> */}
      <div className="flex gap-2">
        <div className="space-y-4 justify-center flex flex-col">
          <section className="flex flex-col items-center px-4 py-2 bg-slate-500 rounded-sm text-white">
            <p>48V Offgrid System Recommended</p>
            <p>String Minimum: 220VOC</p>
          </section>
          <section className="flex w-full justify-around flex-col sm:flex-col  gap-3">
            <div className="space-y-3">
              <div className="flex justify-center">
                <label className="w-60" htmlFor="min-mppt-volt">
                  Minimum MPPT Voltage
                </label>
                <input
                  value={minV}
                  onChange={(e) => setMinV(parseFloat(e.target.value))}
                  className="border border-slate-500 text-center px-4 py-1  w-20 w-20"
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
                  className="border border-slate-500 text-center px-4 py-1  w-20"
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
                  className="border border-slate-500 text-center px-4 py-1  w-20"
                  type="number"
                  id="voc"
                />
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-center">
                <label className="w-60" htmlFor="min-solar-panels">
                  Minimum Solar Panels
                </label>
                <input
                  value={minP || ""}
                  readOnly
                  className="border border-slate-500 text-center px-4 py-1  w-20"
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
                  className="border border-slate-500 text-center px-4 py-1  w-20"
                  type="number"
                  id="max-solar-panels"
                />
              </div>
            </div>
          </section>
        </div>

        <div className='hidden xl:block'>
          <h2 className="text-center text-2xl mb-3">
            Why is calculating the string voltage so important?
          </h2>
          <div className="grid gap-3 ">
            {reason.map((x, i) => (
              <div className="border border-blue-300 rounded-md px-4 py-2 shadow-md shadow-blue-300">
                <h3 className="text-center font-bold border-b-2">{x.title}</h3>
                <p>{x.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="flex flex-col items-center px-4 py-2 bg-slate-500 rounded-sm text-white">
        <p>48V Offgrid System Recommended</p>
        <p>String Minimum: 220VOC</p>
      </section>
    </main>
  );
};

export default SolarStringVoltage;
