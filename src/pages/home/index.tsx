// import { useEffect, useState } from "react";
// import axios from "axios";
import * as S from "./style"; //importing all const exports from style contained within as S
import { ReactComponent as Search } from "assets/imgs/icons/search.svg";
import { header } from "components/header/style";

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
        <header>
          <S.HomeHeaderDetails>
            <div>
              <S.HomeHeaderDetailsLogo>MangaScans</S.HomeHeaderDetailsLogo>
              <S.HomeHeaderDetailsDate>
                Put the date here
              </S.HomeHeaderDetailsDate>
            </div>
            <S.HomeHeaderDetailsSearch>
              <Search />
              <input type="text" placeholder="Look for the flavor" />
            </S.HomeHeaderDetailsSearch>
          </S.HomeHeaderDetails>
        </header>
        <div>
          <S.HomeProductTitle>
            <b>Mangas</b>
          </S.HomeProductTitle>
          <S.HomeProductList>
            <p>List of mangas here</p>
          </S.HomeProductList>
        </div>
      </S.HomeContent>
      <aside>
        <p>Requests here</p>
      </aside>
    </S.home>
  );
};

export default Home;
