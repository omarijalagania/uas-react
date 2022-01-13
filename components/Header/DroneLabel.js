import React from "react";

function DroneLabel() {
  return (
    <section className="h-screen bg-gray-100 p-5">
      <div className="flex items-center justify-around">
        <div className="h-screen w-1/2 text-center animate__animated animate__slideInLeft">
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

        <div className="w-96 h-90 animate__animated animate__slideInRight">
          <img src="../img/drone-label.jpeg" alt="drone label" />
        </div>
      </div>
    </section>
  );
}

export default DroneLabel;
