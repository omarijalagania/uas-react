import React from "react";

function DroneLabel() {
  return (
    <div className="flex items-center justify-between bg-gray-500">
      <div className="h-screen w-1/2">
        მარკირების ინსტრუქცია ექსპლუატაციის დაწყებამდე აუცილებელია უპილოტო
        საჰაერო ხომალდის სისტემაზე განთავსდეს მარკირება, რომელიც მოიცავს
        მომხმარებლის რეგისტრაციის ნომერს. მარკირება უნდა განთვასდეს ხომალდის
        კონსტრუქციის გარე ზედაპირზე ადვილად შესამჩნევ ადგილას. მარკირება უნდა
        განხორციელდეს იმგვარად, რომ არ მოხდეს მომხმარებლის რეგისტრაციის ნომრის
        ადვილად მოცილება, დაზიანება ან წაშლა.
      </div>
      <div>
        <img src="../img/drone-label.jpeg" alt="drone label" />
      </div>
    </div>
  );
}

export default DroneLabel;
