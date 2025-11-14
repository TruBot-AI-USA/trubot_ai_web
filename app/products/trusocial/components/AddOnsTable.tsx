// components/AddOnsTable.tsx
import React from "react";

const addOns = [
  {
    name: "Onboarding Support",
    type: "Features",
    price: "$100.00",
  },
  {
    name: "Infrastructure Support",
    type: "Storage",
    price: "$100.00",
  },
  {
    name: "Customer Support",
    type: "Features",
    price: "$500.00",
  },
  {
    name: "50 Credits Addon",
    type: "Credits",
    price: "$50.00",
  },
  {
    name: "100 Credits Addon",
    type: "Credits",
    price: "$80.00",
  },
  {
    name: "Reseller Support",
    type: "Support",
    price: "$200.00",
  },
];

export default function AddOnsTable() {
  return (
    <div className="flex flex-col items-center justify-center mb-6 w-full">
      <h2 className="text-2xl font-bold mb-6 text-center">Add-Ons Pricing</h2>
      <div className="w-full max-w-2xl lg:max-w-4xl px-4">
        <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden table-fixed border-separate border-spacing-0">
          <colgroup>
            <col className="w-1/3" />
            <col className="w-1/3" />
            <col className="w-1/3" />
          </colgroup>
          <thead>
            <tr className="bg-blue-100">
              <th className="py-3 px-4 text-center text-lg font-semibold">Name</th>
              <th className="py-3 px-4 text-center text-lg font-semibold">Type</th>
              <th className="py-3 px-4 text-center text-lg font-semibold">Price</th>
            </tr>
          </thead>
          <tbody>
            {addOns.map((item, i) => (
                <tr key={item.name}>
                  <td
                      className={`py-2 px-4 text-center break-words ${
                      i !== addOns.length - 1 ? 'border-b border-gray-200' : ''
                      }`}
                  >
                      {item.name}
                  </td>
                  <td
                      className={`py-2 px-4 text-center break-words ${
                      i !== addOns.length - 1 ? 'border-b border-gray-200' : ''
                      }`}
                  >
                      {item.type}
                  </td>
                  <td
                      className={`py-2 px-4 text-center break-words ${
                      i !== addOns.length - 1 ? 'border-b border-gray-200' : ''
                      }`}
                  >
                      {item.price}
                  </td>
                </tr>
            ))}
            </tbody>
        </table>
      </div>
    </div>
  );
}

