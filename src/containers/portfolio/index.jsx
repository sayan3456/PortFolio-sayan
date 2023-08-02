import React, { useState } from "react";
import { VscProject } from "react-icons/vsc";
import {Link} from "react-router-dom";
import PageHeaderContent from "../../component/pageHeaderContent";
import ImageOne from "../../helpar/image/image-one.png";
import ImageTwo from "../../helpar/image/image-two.png";
import ImageThree from "../../helpar/image/image-three.png";
import ImageFour from "../../helpar/image/image-four.jpg";
import ImageFive from "../../helpar/image/image-five.png";
import ImageSix from "../../helpar/image/image-six.jpg";
import ImageSaven from "../../helpar/image/image-saven.jpg";
import ImageEight from "../../helpar/image/image-eight.jpg";
import ImageNine from "../../helpar/image/image-nine.jpg";
import "./style.scss";

const portfolioData = [
  {
    id: 2,
    name: "RedBus",
    image: ImageOne,
  },
  {
    id: 2,
    name: "StockMarket",
    image: ImageTwo,
  },
  {
    id: 2,
    name: "YoutubeClone",
    image: ImageThree,
  },
  {
    id: 3,
    name: "Comming Soon",
    image: ImageFour,
  },
  {
    id: 2,
    name: "CurrencyConvertor",
    image: ImageFive,
  },
  {
    id: 3,
    name: "Comming Soon",
    image: ImageSix,
  },
  {
    id: 3,
    name: "Comming Soon",
    image: ImageSaven,
  },
  {
    id: 3,
    name: "Comming Soon",
    image: ImageEight,
  },
  {
    id: 3,
    name: "Comming Soon",
    image: ImageNine,
  },
];

const filterData = [
  {
    filterId: 1,
    label: "All Project",
  },
  {
    filterId: 2,
    label: "Development Project",
  },
  {
    filterId: 3,
    label: "Upcoming Project",
  },
];

const Portfolio = () => {
  const [filteredvalue, setFilteredValue] = useState(1);
  const [hoveredValue, setHoveredValue] = useState(null);

  function handleFilter(currentId) {
    setFilteredValue(currentId);
  }

  function handleHover(index) {
    setHoveredValue(index);
  }

  console.log("====================================");
  console.log(hoveredValue);
  console.log("====================================");

  const filteredItems =
    filteredvalue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.id === filteredvalue);

  console.log(filteredItems);

  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="My Portfolio"
        icon={<VscProject size={40} />}
      />
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterData.map((item) => (
            <li
              className={item.filterId === filteredvalue ? "active" : ""}
              onClick={() => handleFilter(item.filterId)}
              key={item.filterId}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <div className="portfolio__content__cards">
          {filteredItems.map((item, index) => (
            <div
              className="portfolio__content__cards__item"
              key={`cardItem${item.image.trim()}`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className="portfolio__content__cards__item__img-wrapper">
                <a>
                  <img alt="dummy data" src={item.image} />
                </a>
              </div>
              <div className="overlay">
                {index === hoveredValue && (
                  <div>
                    <p>{item.name}</p>
                    <Link to={"#"} type="button" className="button">Live</Link>
                    <Link to={"#"} type="button" className="button">Code</Link>
                    {/* <button></button> */}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Portfolio;
