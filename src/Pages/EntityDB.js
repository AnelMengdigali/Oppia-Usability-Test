import React from "react";
import { EntityDBList } from "../Helpers/EntitiesData";
import EntityDBItem from "../Components/EntitiesItem";
import "../Styles/EntityDB.css";
import {useForm} from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';

import { Button, ButtonLabel } from '../Helpers/Button.style';

function EntityDB() {
  const {register, handleSubmit} = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  let navigate = useHistory();
  let {name} = useParams();

  return (
<div>
    <div className="entity">
      <div className="entityList">
        {EntityDBList.map((entityItem, key) => {
          return (
            <EntityDBItem
              key={key}
              name={entityItem.name}
              definition={entityItem.definition}
            />
          );
        })}
      </div>
    </div>
    <div id="div4">
    <Button backgroundColor="#082b44" 
    onClick={() => {navigate.push('/simulation')}}><ButtonLabel>Start Experiment</ButtonLabel></Button>
    <Button backgroundColor="#082b44" 
    onClick={() => {navigate.push('/simulation')}}><ButtonLabel>Add New Entity</ButtonLabel></Button>
    </div>
</div>
  );
}

export default EntityDB;
