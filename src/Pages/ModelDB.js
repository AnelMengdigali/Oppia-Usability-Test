import React from "react";
import { ModelDBList } from "../Helpers/ModelDBList";
import ModelDBItem from "../Components/ModelDBItem";
import "../Styles/ModelDB.css";
import {useForm} from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';

import { Button, ButtonLabel } from '../Components/Button.style';

function ModelDB() {
  const {register, handleSubmit} = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  let navigate = useHistory();
  let {name} = useParams();

  return (
<div>
    <div className="model">
      <div className="modelList">
        {ModelDBList.map((systemsItem, key) => {
          return (
            <ModelDBItem
              key={key}
              name={systemsItem.name}
              definition={systemsItem.definition}
            />
          );
        })}
      </div>
    </div>
    <div id="div4">
    <Button backgroundColor="#082b44" 
    onClick={() => {navigate.push('/simulation')}}><ButtonLabel>Start Experiment</ButtonLabel></Button>
    <Button backgroundColor="#082b44" 
    onClick={() => {navigate.push('/simulation')}}><ButtonLabel>Add New Model</ButtonLabel></Button>
    </div>
</div>
  );
}

export default ModelDB;
