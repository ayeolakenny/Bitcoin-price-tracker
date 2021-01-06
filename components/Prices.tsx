import { useState } from "react";

interface PricesProps {
  bpi: any;
}

export const Prices: React.FC<PricesProps> = ({ bpi }) => {
  const [currency, setCurrency] = useState<string>("USD");

  let list: any;

  if (currency === "USD") {
    list = (
      <li className="list-group-item">
        Bitcoin rate for {bpi.USD.description}:{" "}
        <span className="badge badge-primary">{bpi.USD.code}</span>
        <strong>{bpi.USD.rate}</strong>
      </li>
    );
  } else if (currency === "GBP") {
    list = (
      <li className="list-group-item">
        Bitcoin rate for {bpi.GBP.description}:{" "}
        <span className="badge badge-primary">{bpi.GBP.code}</span>
        <strong>{bpi.GBP.rate}</strong>
      </li>
    );
  } else if (currency === "EUR") {
    list = (
      <li className="list-group-item">
        Bitcoin rate for {bpi.EUR.description}:{" "}
        <span className="badge badge-primary">{bpi.EUR.code}</span>
        <strong>{bpi.EUR.rate}</strong>
      </li>
    );
  }

  return (
    <div>
      <ul className="list-group">{list}</ul>
      <br />
      <select
        onChange={(e) => setCurrency(e.target.value)}
        className="form-control"
      >
        <option value="USD" className="form-control">
          USD
        </option>
        <option value="GBP" className="form-control">
          GBP
        </option>
        <option value="EUR" className="form-control">
          EUR
        </option>
      </select>
    </div>
  );
};
