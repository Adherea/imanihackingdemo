"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import logo from "../../../public/images/logo.png";
import univ from "../../../public/images/univelcity.jpg";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslations } from "next-intl";

function About() {
  const t = useTranslations("about");
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section id="about">
      <div className="flex flex-col-reverse md:flex-row px-8 py-24  md:max-w-7xl md:mx-auto items-center justify-around md:py-14">
        <div className="md:max-w-md">
          <div>
            <h1 className="font-bold text-3xl"> {t("Heading")}</h1>
            <h3 className="text-xl">{t("Paragraph")}</h3>
          </div>
          <div className="py-12">
            <h1 className="font-bold text-3xl">{t("Heading1")}</h1>
            <h3 className="text-xl">{t("Paragraph2")}</h3>
          </div>
        </div>
        <div className="">
          <Image src={logo} width={500} alt="logo.png" />
        </div>
      </div>
      <div className="py-16">
        <h1 className="text-center font-medium text-4xl ">{t("About")}</h1>

        <div className="flex md:flex-row flex-col justify-between max-w-6xl mx-auto gap-16 py-20 px-10 md:px-20" data-aos="fade-up">
          <div>
            <Image className="fancyBorder border-4 border-[#58BBFF]" src={univ} width={400} alt="logo.png" />
          </div>
          <div className="">
            <h1 className="text-4xl">{t("ask")}</h1>
            <p className="max-w-xl py-5 pt-12 md:text-xl lg:text-lg">{t("reason")}</p>
            <Link href="/about" className="bg-[#58BBFF] text-white rounded-md py-3 px-5">
              {t("button")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
