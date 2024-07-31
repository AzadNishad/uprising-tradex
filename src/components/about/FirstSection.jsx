import React from "react";
import Fancy from "../../assets/about2.jpg";

export default function FirstSection() {
  return (
    <>
      <div className="justify-items-center mt-14 flex justify-center bg-[#f8f9fb]">
        <div className="p-5 md:w-[90%] w-full bg-[#f8f9fb]">
          <div className="">
            <h1 className="text-3xl lg:text-5xl mb-5 mt-9 md:mb-10 text-center font-serif">
              ABOUT-US
            </h1>
            <p className="text-lg text-justify">
              Founded in 2015, Uprising Tradex LLP aims to become the leading
              super dealer/distributor of FMCG products in Gujarat, extending
              its reach to other western states in India. To achieve this goal,
              Uprising Tradex LLP's critical success factors will be to identify
              emerging trends and integrate them into our company operations,
              respond quickly to customers, provide high-quality services,
              invest time and money in marketing and advertising, and stay ahead
              of the "technology curve."
              <br />
              <br />
              The Uprising Tradex LLP was formed by Mr. Satish Upadhyay after
              working for a decade in Africa with its head office in Surat,
              Gujarat, and associate offices in Tanzania (East Africa) and the
              UK. The company has diversified its operations into Technology,
              Textile, and FMCG by positioning itself among renowned players and
              creating a niche market for its products and services.
              <br />
              <br />
              The company has grown magnificently well under the leadership of
              its founders and is still rising at a rapid pace growth in
              Information Technology services, Import-Export of agro-based
              products, Textiles, and Minerals with its presence and associate
              companies in the UK and Tanzania (East Africa ). Holding Export
              rights of various renowned brands like Bhikharam Chandmal (Dealing
              in Namkeens & Sweets) and Yummy ( Wafers biscuits ). Our export
              and domestic portfolio includes an exotic range of flavored and
              non-flavored cashews, Almonds, and Raisins. We manufacture Khari
              Sing(Roasted Peanuts) and 10 different types of its flavors.
            </p>
          </div>
        </div>
      </div>
      <div
        style={{ backgroundImage: `url(${Fancy})` }}
        className="w-full h-[400px] bg-fixed bg-center bg-cover"
      ></div>
    </>
  );
}
