import React from "react";
import Image from "next/image";
function Space() {
  return (
    <section className="min-h-screen bg-white">
      <div className="text-center p-9">
        <h2 className="font-bold">საჰაერო სივრცე</h2>
        <p>
          მიიღე დაწვრილებითი ინფორმაცია საქართველოს საჰაერო სივრცის შესახებ.
        </p>
      </div>

      <div className="relative">
        <img
          className="absolute z-5 left-3/4 -top-10"
          width={80}
          height={100}
          src="../img/Go-into-icon.png"
          alt="go icon"
        />
        <img width="100%" height="90%" src="../img/map.png" />
      </div>
    </section>
  );
}

export default Space;
