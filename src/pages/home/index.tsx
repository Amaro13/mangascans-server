// import { useEffect, useState } from "react";
// import axios from "axios";
import * as S from "./style"; //importing all const exports from style contained within as S
import { ReactComponent as Search } from "assets/imgs/icons/search.svg";
import Header from "../../components/header";

const Home = () => {
  //   const [mangas, setMangas] = useState([]);

  //   const fetchMangas = () => {
  //     axios
  //       .get("https://mangascans-production.up.railway.app/")
  //       .then((res) => setMangas(res.data.results));
  //   };

  //   useEffect(() => {
  //     fetchMangas();
  //   }, []);

  return (
    <S.home>
      <S.HomeContent>
        <Header path="home" />
        <div>
          <S.HomeProductTitle>
            <b>Mangas</b>
          </S.HomeProductTitle>
          <S.HomeProductList>
            <p>List of mangas here</p>
          </S.HomeProductList>
        </div>
      </S.HomeContent>
    </S.home>
  );
};

export default Home;
