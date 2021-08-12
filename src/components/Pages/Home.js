import React from "react";

import { Link } from "react-router-dom";

import { Carousel, Col, Row } from "react-bootstrap";
import { BOOK_DETAILS_PATTERN_PATH, ID_REPLACER } from "../../settings/routesPath";
import { BOOKS } from "../../testData";
import { useUserContext } from "../User/UserContext";


export const Home = () => {
  // const [{authenticated, userData}] = useUserContext();

  const [carouselIndex, setCarouselIndex] = React.useState(0);

  const handleSelect = (selectedIndex, e) => {
    setCarouselIndex(selectedIndex);
  };

  return (
    <>
      <Row as={"header"}>
        <Col as={"h1"} xs={12} className="text-center">
          Добро пожаловать в нашу библиотечку!
          {/*{authenticated ? (*/}
          {/*`Здравствуй, ${userData.username}!`*/}
          {/*) : (*/}
          {/*"Добро пожаловать в нашу библиотечку!"*/}
          {/*)}*/}
        </Col>
      </Row>

      <Row className={"mt-5 mb-2"} as={"section"}>
        <Col xs={12} as={"h3"} className="text-center">
          Вам могут быть интересны эти книги
        </Col>

        <Col as={"article"}>
          <Carousel
            activeIndex={carouselIndex}
            onSelect={handleSelect}
          >
            {BOOKS
              .slice(0, 3)
              .map((book) => (
                <Carousel.Item key={book.id}>
                  <Link
                    className="d-block bg-dark w-100"
                    to={BOOK_DETAILS_PATTERN_PATH.replace(ID_REPLACER, book.id)}
                  >
                    <img
                      height={"400px"}
                      width={"300px"}
                      className="d-block bg-secondary m-auto"
                    />

                    <Carousel.Caption>
                      <p>{book.author.fullName}</p>
                      <h3>{book.title}</h3>
                    </Carousel.Caption>
                  </Link>
                </Carousel.Item>
              ))}
          </Carousel>
        </Col>
      </Row>
    </>
  );
};

