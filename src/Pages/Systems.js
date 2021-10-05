import React from "react";
import { SystemsList } from "../Helpers/SystemsList";
import SystemsItem from "../Components/SystemsItem";
import "../Styles/Systems.css";

function Systems() {
  return (
    <div className="system">
      <h1 className="systemsTitle">Our Systems</h1>
      <div className="systemsList">
        {SystemsList.map((systemsItem, key) => {
          return (
            <SystemsItem
              key={key}
              image={systemsItem.image}
              name={systemsItem.name}
              definition={systemsItem.definition}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Systems;
