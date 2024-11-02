import React from 'react'
import Blogpost from '../BlogPost/Blogpost';
import { FaChevronRight } from "react-icons/fa";
import blog1 from "../../assets/blog1.png";
import blog2 from "../../assets/blog2.png";
import blog3 from "../../assets/blog3.png";

const Blog = () => {
    const details = [
      {
        'details':
          "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.",
          'imageUrl': `${blog1}`
      },
      {
        'details':
          "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.",
          'imageUrl': `${blog2}`
      },
      {
        'details':
          "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.",
          'imageUrl': `${blog3}`
      },
    ];
  return (
    <>
      <section className="bg-[#F0F0F0] py-32 ">
        <div className="container max-w-[1140px]">
          <div className="flex justify-between gap-16">
            {details.map((item) => (
              <Blogpost details={item.details} bgimageurl={item.imageUrl}/>
            ))}
          </div>

          <div className="w-full flex justify-end pe-3 mt-8 ">
            <h6 className="text-base font-bold flex self-center">
              MORE FROM THE BLOG
            </h6>
            <FaChevronRight className="ps-2 text-[18px] self-center" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Blog