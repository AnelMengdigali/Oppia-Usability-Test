import React from "react";
import { SystemsList } from "../Helpers/SystemsList";
import SystemsItem from "../Components/SystemsItem";
import "../Styles/Systems.css";
import {useForm} from 'react-hook-form';

function Systems() {
  const {register, handleSubmit} = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <div className="system">
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
