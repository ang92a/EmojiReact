import "./index.css";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { Footer } from "./components/Footer/Footer";
import { useEffect, useState } from "react";

function App() {
  // получаем массив с сервера
  const [data, setData] = useState([]);

  useEffect(() => {
    const res = fetch("https://emoji.ymatuhin.workers.dev/");
    res.then((res) => res.json()).then((data) => setData(data));
  }, []);

  // избавляемся от повторов
  const getUniqData = () => {
    const uniqData = [];
    data.forEach((card) => {
      uniqData.push({
        ...card,
        keywords: [...new Set(card.keywords.split(" "))].join(" "),
      });
    });
    return uniqData;
  };

  // массив без повторов
  const newData = getUniqData();

  // состояние на импут
  const [inputValue, serInputValue] = useState("");
  const inputHandler = (evt) => serInputValue(evt.target.value);
  const inputCurrentValue = inputValue.trim().toLowerCase();

  // поиск по введенному в инпут
  const filteredData = newData.filter(
    (el) =>
      el.title.trim().toLowerCase().includes(inputCurrentValue) ||
      el.keywords.trim().toLowerCase().includes(inputCurrentValue)
  );

  // состояние на количество карточек на странице
  const arrLenght = filteredData.length;
  const [perPage, setPerPage] = useState(12);

  // состояние количество страниц
  const allPage = Math.ceil(arrLenght / perPage);

  let Arrey = Array(allPage)
    .fill()
    .map((e, i) => i + 1);

  // состояние на кнопки, для отрисовки кнопок
  const [currentNumber, setCurrentNumber] = useState(1);

  const numberHandler = (num) => setCurrentNumber(num);

  // индекс начала и конца массива
  const Iend = currentNumber * perPage;
  const Istr = currentNumber * perPage - perPage;

  // console.log(currentNumber);
  // логика для отображения пагинации
  let firstButtonIndex;
  let lastButtonIndex;

  switch (true) {
    case currentNumber <= 3: {
      firstButtonIndex = 0;
      lastButtonIndex = 5;
      break;
    }
    case currentNumber > allPage - 2: {
      firstButtonIndex = allPage - 4;
      lastButtonIndex = allPage - 1;
      break;
    }
    default: {
      firstButtonIndex = currentNumber - 3;
      lastButtonIndex = currentNumber + 2;
    }
  }

  return (
    <>
      <Header />
      <input
        className="input"
        type="text"
        value={inputValue}
        onChange={(evt) => {
          inputHandler(evt);
          numberHandler(1);
        }}
      />

      <Main arr={filteredData} Istr={Istr} Iend={Iend} />

      <Footer
        setPerPage={setPerPage}
        perPage={perPage}
        arr={Arrey}
        btn={numberHandler}
        firstButtonIndex={firstButtonIndex}
        lastButtonIndex={lastButtonIndex}
        currentNumber={currentNumber}
        setCurrentNumber={setCurrentNumber}
      />
    </>
  );
}

export default App;
