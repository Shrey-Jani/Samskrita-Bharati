"use client";
import Link from "next/link";
import React from "react";
import "@/app/styles/global.css";
import Image from "next/image";
const Home: React.FC = () => (
  <div>
    <div className="start-page ">
      <Image
        src="/images/aum.jpeg"
        alt="Aum image"
        className="img"
        width={500}
        height={500}
      />
      <h1 className="heading ">
        प्प्रश्नोत्तरीयां स्वागतम्{" "}
        <Link href="/landing">
          <button className="start">प्रारंभः</button>
        </Link>
      </h1>
    </div>
    <div className="credit">
      <p className="develop">Developed by:-</p>
      <p className="change">
        <i>Shrey Jani</i>
      </p>
      <p>Hosted by:-</p>
      <p className="change">
        <i>Samskrita Bharati</i>
      </p>
    </div>
  </div>
);

export default Home;
