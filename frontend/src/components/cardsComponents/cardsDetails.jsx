import React from "react";
import projectDetails from "./projectDetails";
// import plantTree from "../images/ekmuttidaan.png";
import { Link } from "react-router-dom";

function cardsDetails() {
  return (
    <div className="cardsDetails">
      <div className="mx-auto max-w-2xl font-mediumimage.png  lg:max-w-7xl ">
        <h2 className="text-2xl font-bold tracking-tight  text-center text-blue-700">
          We Cannot Help Everyone.. But Everyone Can Help Someone
        </h2>
        <Link to="/payment">
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            <div key="1" className="group relative">
              <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                <img
                  src="https://pbs.twimg.com/media/EVNkfykU8AIosEl.jpg"
                  alt="addimage"
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full bg-gray-200 font-bold"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-xl text-blue-700 ">
                    <span aria-hidden="true" className="absolute inset-0" />
                    DONATE
                  </h3>
                </div>
              </div>
            </div>

            {projectDetails.map((product) => (
              <div key={product.id} className="group relative">
                <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-xl  align-center text-blue-700">
                      <a href={product.href}>
                        <span aria-hidden="true" className="" />
                        {product.name}
                      </a>
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Link>
      </div>
    </div>
  );
}

export default cardsDetails;
