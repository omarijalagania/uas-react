import React from "react";
import Image from "next/image";

function DroneLabel() {
  return (
    <section className="min-h-screen lg:relative flex justify-center bg-gray-100 p-5">
      <div className="flex items-center flex-col lg:flex-row lg:grid lg:grid-cols-2">
        <div className="text-center p-2 animate__animated animate__slideInLeft">
          <p className="p-7">მარკირების ინსტრუქცია</p>
          <p className="p-7">
            ექსპლუატაციის დაწყებამდე აუცილებელია უპილოტო საჰაერო ხომალდის
            სისტემაზე განთავსდეს მარკირება, რომელიც მოიცავს მომხმარებლის
            რეგისტრაციის ნომერს.
          </p>
          <p className="p-7">
            მარკირება უნდა განთვასდეს ხომალდის კონსტრუქციის გარე ზედაპირზე
            ადვილად შესამჩნევ ადგილას.
          </p>
          <p className="p-7">
            მარკირება უნდა განხორციელდეს იმგვარად, რომ არ მოხდეს მომხმარებლის
            რეგისტრაციის ნომრის ადვილად მოცილება, დაზიანება ან წაშლა.
          </p>
        </div>

        <div className="animate__animated animate__slideInRight mx-auto">
          <Image
            width={400}
            height={300}
            src="/img/drone-label.jpeg"
            alt="drone label"
          />
        </div>
      </div>
    </section>
  );
}

export default DroneLabel;
