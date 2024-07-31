import React from "react";
import Card from "./Card";
import CashewNuts from "../../assets/cashew-nuts-500x500.png";
import Namkeen from "../../assets/mix-namkeen-500x500.jpg";
import Sweets from "../../assets/canned-rasgulla-500x500.jpg";
import Wafer from "../../assets/product-vanilla-wafer-biscuits-1.png";
import FlavouredPeanuts from "../../assets/product-flavored-black-pepper-peanuts-1.png";
import DryFruits from "../../assets/mango-flavor-raisins-kishmish-250x250-1.jpg";
import Commoditiies from "../../assets/chickpeas-250x250.jpg";

export default function ProductsRow() {
  return (
    <div id="products" className="p-5 md:w-[90%] justify-around mx-auto gap-10">
      <div>
        <h1 className="text-3xl lg:text-5xl mb-5 mt-9 md:mb-10 text-center font-serif">
          OUR PRODUCTS
        </h1>
      </div>
      <div className=" flex flex-wrap justify-around mx-auto gap-10">
        <Card
          img={CashewNuts}
          title="Cashew Nuts"
          disc="Manufacturer of a wide range of products which include Cashew Kernels, Raw Cashew Nuts, Roasted Salted Flavored Cashew and Spicy Flavored Cashew"
          key={1}
        />
        <Card
          img={Namkeen}
          title="Namkeen"
          disc="We are a leading Manufacturer of Salted Namkeen, Masala Boondi Namkeen, Mix Namkeen, Bhujia Namkeen and Navratna Mix Namkeen from Surat, India"
          key={2}
        />
        <Card
          img={Sweets}
          title="Sweets"
          disc="Prominent & Leading Manufacturer from Surat, we offer Gulab Jamun, Sweet Rajbhog, Sweet Rasgulla, Soan Papdi and Rasmalai Bati."
          key={3}
        />
        <Card
          img={Wafer}
          title="Wafer Biscuits"
          disc="Offering you a complete choice of products which include Chocolate Wafer Biscuits, Orange Wafer Biscuits, Straberry Wafer Biscuits and Vanilla Wafer Biscuits"
          key={4}
        />
        <Card
          img={FlavouredPeanuts}
          title="FLAVOURED PEANUTS"
          disc="Pioneers in the industry, we offer Flavored Black Pepper Peanuts, Hing Jeera Flavored Peanuts, Nimbu Pudina Flavored Peanuts and Spicy Flavored Peanuts from India."
          key={5}
        />
        <Card
          img={DryFruits}
          title="DRYFRUITS"
          disc="Prominent & Leading Manufacturer from Surat, we offer Paan Flavoured Raisins, Cashew Nuts, Mixed Fruit Flavoured Raisins, Mango Flavoured Raisins and Udad Papad."
          key={6}
        />
        <Card
          img={Commoditiies}
          title="COMMODITIES"
          disc="Offering you a complete choice of products which include Sesame seeds ( Til ), Toor Whole ( Pigeon Peas ) and Chickpeas ( Chana whole )."
          key={7}
        />
      </div>
    </div>
  );
}
