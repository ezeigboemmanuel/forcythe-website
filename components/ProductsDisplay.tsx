import Image from "next/image";

const ProductsDisplay = () => {
  const images = [
    "/assets/product1.svg",
    "/assets/product2.svg",
    "/assets/product3.svg",
    "/assets/product4.svg",
    "/assets/product5.svg",
    "/assets/product3.svg",
  ];

  const renderImages = () => {
    return images.map((image, idx) => (
      <li key={idx} className="w-[300px] h-[300px]">
        <Image
          src={image}
          alt={`product-${idx}`}
          width={500}
          height={500}
          className="object-center object-cover w-[300px] h-[300px]"
        />
      </li>
    ));
  };

  const repeatCount = 7;

  const createRepeatedImages = () => {
    return Array.from({ length: repeatCount }, (_, idx) => renderImages());
  };

  return (
    <div className="bg-[#030516] pt-10 pb-20">
      <div className="w-full flex justify-center items-center mb-5">
        <article className="">
          <div className="wrapper">
            <ul className="marquee">
              {createRepeatedImages()}
            </ul>
            <ul className="marquee2">
              {createRepeatedImages()}
            </ul>
          </div>
        </article>
      </div>

      <div className="w-full flex justify-center items-center">
        <article className="">
          <div className="wrapper">
            <ul className="marquee-right">
              {createRepeatedImages()}
            </ul>
            <ul className="marquee-right2">
              {createRepeatedImages()}
            </ul>
          </div>
        </article>
      </div>
    </div>
  );
};

export default ProductsDisplay;
