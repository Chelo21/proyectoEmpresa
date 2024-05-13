import { useEffect, useState } from "react";
var date, time, ahora, hours, minutes, seconds, dia, mes, ano, year;
const Footer = () => {
  const [today, setDate] = useState(""); // Save the current date to be able to trigger an update
  const [horas, setHoras] = useState(""); // Save the current date to be able to trigger an update

  // const year = new Date().getFullYear();
  // const todo = new Date().toLocaleString()

  useEffect(() => {
    const timer = setInterval(() => {
      // Creates an interval which will update the current data every minute
      // This will trigger a rerender every component that uses the useDate hook.
      // setDate(new Date());
      ahora = new Date();
      // ahora= new Date().format("DD/MM/YYYY")
      // date = new ahora
      // time = new ahora
      year = new Date().getFullYear();
      // Hours part from the timestamp
      hours = ahora.getHours();

      // Minutes part from the timestamp
      minutes = "0" + ahora.getMinutes();
      minutes = minutes.substr(-2);

      // Seconds part from the timestamp
      seconds = "0" + ahora.getSeconds();
      seconds = seconds.substr(-2);

      ano = ahora.getFullYear();
      mes = "0" + (ahora.getMonth() + 1);
      dia = "0" + ahora.getDate();
      mes = mes.substr(-2);
      dia = dia.substr(-2);

      setHoras(`${hours}:${minutes}:${seconds}`);
      setDate(`${dia}/${mes}/${ano}`);
    }, 1000);
    return () => {
      clearInterval(timer); // Return a funtion to clear the timer so that it will stop being called on unmount
    };
  }, []);

  return <footer>{`Copyright ©${year} Chelo Code ${horas} ${today} `}</footer>;
};

export default Footer;
