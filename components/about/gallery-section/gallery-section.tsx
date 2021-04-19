import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import styles from "./gallery-section.module.scss";
import Image from "next/image";

export default function GallerySection() {
  return (
    <div className={styles.gallery_section}>
      <h1>In life of a Grandmaster :)</h1>
      <Carousel autoPlay={true} infiniteLoop={true} useKeyboardArrows={true}>
        {new Array(29).fill("").map((i, index) => {
          return (
            <div>
              <img src={`/ani_famous/${index}.jpg`} />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}
