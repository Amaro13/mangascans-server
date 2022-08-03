// import { useEffect, useState } from "react";
// import axios from "axios";
import * as S from "./style";
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
      <div>
        <h1>Home</h1>
      </div>
    </S.home>
  );
};

export default Home;
