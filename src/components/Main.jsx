import React from "react";

const Main = ({ data }) => {
  const date = new Date();
  const year = date.getFullYear();
  const day = date.getDay();
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayOfWeek = daysOfWeek[date.getDay()];
  const monthsOfYear = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const monthOfYear = monthsOfYear[date.getMonth()];
  const icon = data.weather[0].icon;

  return (
    <div className="flex flex-col bg-white rounded-lg p-8 w-full max-w-xs ">
      <div className="font-bold text-xl">{data?.name}</div>
      <div className="text-sm text-gray-500">
        {dayOfWeek} {[day, monthOfYear, year].join(" ")}
      </div>
      <div className="mt-6 text-6xl self-center inline-flex items-center justify-center rounded-lg text-indigo-400 h-24 w-24">
        <img
          className="object-cover h-24 w-24"
          src={`http://openweathermap.org/img/w/${icon}.png`}
        />
      </div>
      <div className="flex flex-row items-center justify-center mt-6">
        <div className="font-medium text-6xl">
          {Math.round(data?.main?.temp - 273)}&deg;C
        </div>
        <div className="flex flex-col items-center ml-6">
          <div>{data?.weather[0]?.main}</div>
          <div className="mt-1">
            <span className="text-sm">
              <i className="far fa-long-arrow-up"></i>
            </span>
            <span className="text-sm font-light text-gray-500">
              {Math.round(data?.main?.temp_max - 273)}&deg;C
            </span>
          </div>
          <div>
            <span className="text-sm">
              <i className="far fa-long-arrow-down"></i>
            </span>
            <span className="text-sm font-light text-gray-500">
              {Math.round(data?.main?.temp_min - 273)}&deg;C
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between mt-7 ">
        <div className="flex flex-col items-center">
          <div className="font-medium text-sm">Wind</div>
          <div className="text-sm text-gray-500">{data?.wind?.speed}km/h</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="font-medium text-sm">Humidity</div>
          <div className="text-sm text-gray-500">{data?.main?.humidity}%</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="font-medium text-sm">Visibility</div>
          <div className="text-sm text-gray-500">
            {data?.visibility / 1000}km
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
