import React, { useState } from "react";
import { Rate } from "antd";
import {Button}from 'react-bootstrap'
import "./list.css";



const ListMovies = ({search,star}) => {
  console.log('search :',search);
  console.log('start send to liste ',star)
  const [items, setItems] = useState([
    {
      title: "fast & furious 9",
      desc: "Fast and Furious 9 est un film américain réalisé par Justin Lin, sorti en 2021",
      url: "https://fr.web.img5.acsta.net/pictures/21/05/18/10/40/2487837.jpg",
      rating: 5,
    },
    {
      title: "The Ice Road",
      desc: "Ice Road est un thriller d'action américain écrit et réalisé par Jonathan Hensleigh, sorti en 2021",
      url: "https://cima4u.ws:2053/wp-content/uploads/1-1308.jpg",
      rating: 4,
    },
    {
      title: "Hitman & Bodyguard 2",
      desc: "Hitman and Bodyguard 2 est un film d'action américain réalisé par Patrick Hughes et dont la sortie est prévue pour 2021",
      url: "https://www.ecranlarge.com/uploads/image/001/187/k02c8mjbwv4lsapnvdjhi631xty-181.jpg",
      rating: 3,
    },
    {
      title: "Sans aucun remords",
      desc: "Tandis qu'il cherche à obtenir justice pour le meurtre de sa femme enceinte",
      url: "https://fr.web.img4.acsta.net/c_310_420/pictures/21/04/07/10/10/4273666.jpg",
      rating: 1,
    },
    {
      title: "Zack Snyder's Justice ",
      desc: "Bruce Wayne veut faire en sorte que le sacrifice ultime de Superman ne soit pas vain. Avec l'aide de Diana Prince",
      url: "https://fr.web.img6.acsta.net/pictures/21/04/07/10/59/5550346.jpg",
      rating: 2,
    },
  ]); // end of state

  //Add item to the liste 
  const addItem = () => {
      setItems([...items,
        {
            title: "Zack Snyder's Justice ",
            desc: "Bruce Wayne veut faire en sorte que le sacrifice ultime de Superman ne soit pas vain. Avec l'aide de Diana Prince",
            url: "https://fr.web.img6.acsta.net/pictures/21/04/07/10/59/5550346.jpg",
            rating: 2,
        }
      ])
  } ;

   


  return (
    <div className="global">
      {items
      .filter(item => (item.title.includes(search))&& (item.rating >= star) )
      .map((fitem, i) => (
        <div key={i} className="movie">
          <img src={fitem.url} alt="note existe" />
          <div className="title">
            <h2>{fitem.title}</h2>
            <p>{fitem.desc}</p>
            <p > <Rate  disabled = {true} value={fitem.rating} /> </p>
          </div>
        </div>
      ))}

      



     <Button variant="secondary" onClick={addItem}>Add</Button>

   

     
    </div>
  );
};

export default ListMovies;
