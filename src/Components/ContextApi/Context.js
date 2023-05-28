// Header component
import React, { createContext } from "react";
import Checkout from '../UtilitiesComponent/Checkout';
import Navbar from './../Navbar';
import Room from "../Photos";

export const Data = createContext({
    Rating: "4.85",
    Review: "41 Review",
    Addprice: "Add dates for prices",
    ReviewData :[
      {
        id: 1,
        imageSrc: 'https://a0.muscache.com/im/pictures/user/b9c551db-9203-4f2c-9572-216ebe07e25c.jpg?im_w=240',
        name: 'John',
        date: 'May 1, 2023',
        para:"it's very rare to find people like Sagrado: she is the best host I ever had, always checking with me to see if we needed something, to share tips or just to ask how we were."
      },
      {
        id: 2,
        imageSrc: 'https://a0.muscache.com/im/pictures/user/758dc566-ac70-407f-988b-8968824e7793.jpg?im_w=240',
        name: 'Jane',
        date: 'May 3, 2023',
        para : "it's very rare to find people like Sagrado: she is the best host I ever had, always checking with me to see if we needed something, to share tips or just to ask how we were."
      },
      {
        id: 3,
        imageSrc: 'https://a0.muscache.com/im/pictures/user/b9c551db-9203-4f2c-9572-216ebe07e25c.jpg?im_w=240',
        name: 'Lane',
        date: 'June 3 2023',
        para : "it's very rare to find people like Sagrado: she is the best host I ever had, always checking with me to see if we needed something, to share tips or just to ask how we were."
         
      },
      {
        id: 4,
        imageSrc: 'https://a0.muscache.com/im/pictures/user/7440ee06-1198-4d53-b9ac-02df62020951.jpg?im_w=240',
        name: 'Morbius',
        date: 'feb 1, 2023',
        para : "it's very rare to find people like Sagrado: she is the best host I ever had, always checking with me to see if we needed something, to share tips or just to ask how we were."

      },
      {
        id: 5,
        imageSrc: 'https://a0.muscache.com/im/pictures/user/0bb4d87c-a9da-4345-8f7b-d03462c0bfad.jpg?im_w=240',
        name: 'Mession',
        date: 'Des 3, 2024',
        para : "it's very rare to find people like Sagrado: she is the best host I ever had, always checking with me to see if we needed something, to share tips or just to ask how we were."

      },
      {
        id: 6,
        imageSrc: 'https://a0.muscache.com/im/pictures/user/b9c551db-9203-4f2c-9572-216ebe07e25c.jpg?im_w=240',
        name: 'Kane',
        date: 'May 27, 2023',
        para : "it's very rare to find people like Sagrado: she is the best host I ever had, always checking with me to see if we needed something, to share tips or just to ask how we were."

      },
      // Add more data objects as needed
    ],
  });

const Context = () => {
    const Rating = "4.85";
    const Review = "41 Review";
    const Addprice = "Add dates for prices";
    const ReviewData =[
      {
        id: 1,
        imageSrc: 'https://a0.muscache.com/im/pictures/user/b9c551db-9203-4f2c-9572-216ebe07e25c.jpg?im_w=240',
        name: 'John',
        date: 'May 1, 2023',
        para : "it's very rare to find people like Sagrado: she is the best host I ever had, always checking with me to see if we needed something, to share tips or just to ask how we were."

      },
      {
        id: 2,
        imageSrc: 'https://a0.muscache.com/im/pictures/user/b9c551db-9203-4f2c-9572-216ebe07e25c.jpg?im_w=240',
        name: 'Jane',
        date: 'May 3, 2023',
        para : "it's very rare to find people like Sagrado: she is the best host I ever had, always checking with me to see if we needed something, to share tips or just to ask how we were."

      },
      {
        id: 3,
        imageSrc: 'https://a0.muscache.com/im/pictures/user/b9c551db-9203-4f2c-9572-216ebe07e25c.jpg?im_w=240',
        name: 'Lane',
        date: 'June 3, 2023',
        para : "it's very rare to find people like Sagrado: she is the best host I ever had, always checking with me to see if we needed something, to share tips or just to ask how we were."

      },
      {
        id: 4,
        imageSrc: 'https://a0.muscache.com/im/pictures/user/b9c551db-9203-4f2c-9572-216ebe07e25c.jpg?im_w=240',
        name: 'Morbius',
        date: 'feb 1, 2023',
        para : "it's very rare to find people like Sagrado: she is the best host I ever had, always checking with me to see if we needed something, to share tips or just to ask how we were."

      },
      {
        id: 5,
        imageSrc: 'https://a0.muscache.com/im/pictures/user/b9c551db-9203-4f2c-9572-216ebe07e25c.jpg?im_w=240',
        name: 'Mession',
        date: 'Des 3, 2024',
        para : "it's very rare to find people like Sagrado: she is the best host I ever had, always checking with me to see if we needed something, to share tips or just to ask how we were."

      },
      {
        id: 6,
        imageSrc: 'https://a0.muscache.com/im/pictures/user/b9c551db-9203-4f2c-9572-216ebe07e25c.jpg?im_w=240',
        name: 'Kane',
        date: 'May 27, 2023',
        para : "it's very rare to find people like Sagrado: she is the best host I ever had, always checking with me to see if we needed something, to share tips or just to ask how we were."

      },
      // Add more data objects as needed
    ];

  return (
    <Data.Provider value={{ Rating, Review, Addprice, ReviewData }}>
      <Checkout />
      <Navbar/>
      <Room/>
      
    </Data.Provider>
  );
};

export default Context;
