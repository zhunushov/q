import { useEffect, useRef, useState } from "react";
import "./App.css";
import Chip from "./Chip";
import Navbar from "./Navbar";
import { db } from "./random-data";
import SearchComponent from "./search-bar";

function App() {
  const data = [
    "   Баламошка — полоумный, дурачок",
    "Божевольный — худоумный,",
    " дурной",
    "Божедурье — дурак от природы",
    "Королобый — крепкоголовый",
    " тупой, глупый",
    "Лободырный — недоумок",
    "Межеумок — человек очень среднего ума",
    "Мордофиля — дурак, да еще и чванливый",
    "Негораздок — недалекий",

    // Посмотреть полностью: https://www.spletnik.ru/blogs/govoryat_chto/79436_obzyvatelstva-po-nashemu-po-russki
  ];
  let randomValue = useRef([]).current;
  const id = useRef(null);
  const [bool, setBool] = useState(false);
  const [val, setVal] = useState("");
  const [count, setCount] = useState(30);
  const [disabled, setDisabled] = useState(false);
  const [time, setTime] = useState(0);
  const [q, setQ] = useState("");

  useEffect(() => {
    for (let i = 0; i < 100; i++) {
      const element = db[Math.floor(Math.random() * 1000)];
      randomValue.push(element);
    }
  }, []);

  useEffect(() => {
    if (time > 0) {
      id.current = setInterval(() => {
        setTime((time) => time - 1);
      }, 1000);
    }
    return () => {
      if (id.current) {
        clearTimeout(id.current);
      }
    };
  }, [time]);

  const onClick = () => {
    if (randomValue.includes(val.trim())) {
      setBool(true);
      randomValue = [];
      return;
    } else {
      setQ(data[Math.floor(Math.random() * data.length)]);
      setTimeout(() => {
        setQ("");
      }, 2000);
    }
    setCount((count) => count - 1);
    if (count === 20) {
      setDisabled(true);
      setTime(30);
      setTimeout(() => {
        setDisabled(false);
      }, 30000);
    } else if (count === 10) {
      setDisabled(true);
      setTime(50);
      setTimeout(() => {
        setDisabled(false);
      }, 50000);
    } else if (count <= 5) {
      setDisabled(true);
      setTime(30);
      setTimeout(() => {
        setDisabled(false);
      }, 30000);
    } else if (count < 1) {
      setCount(10);
    }
    setVal("");
  };

  return (
    <div>
      <Navbar
        time={time}
        disabled
        search={
          <SearchComponent
            val={val}
            setVal={setVal}
            onClick={onClick}
            disabled={disabled}
          />
        }
      />
      {q && <h1 className="text-center text-orange-600 text-4xl">{q}</h1>}
      <div className="flex flex-wrap justify-center mt-2">
        {(() => {
          if (bool) {
            return (
              <h1 className="text-center text-orange-600 text-4xl">
                {process.env.REACT_APP_SECRET_CODE}
              </h1>
            );
          } else {
            return db.map((item, i) => <Chip text={item} i={i} key={i} />);
          }
        })()}
      </div>
    </div>
  );
}

export default App;
