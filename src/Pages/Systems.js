import React from "react";
import { SystemsList } from "../Helpers/SystemsData";
import SystemsItem from "../Components/SystemsItem";
import "../Styles/Systems.css";
import {useForm} from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';

function Systems() {

  // const {register, handleSubmit} = useForm()
  // const onSubmit = (data) => {
  //   console.log(data)
  // }
  // let navigate = useHistory();
  // let {name} = useParams();

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
