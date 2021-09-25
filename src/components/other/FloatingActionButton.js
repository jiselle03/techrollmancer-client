import React from 'react';
import { Fab } from '@material-ui/core';
import { Add, Delete, Edit } from '@material-ui/icons';

const FloatingActionButton = props => {
  const { icon, onHandleOpen, onHandleDelete, character } = props;

  const getAction = () => {
    onHandleOpen ? onHandleOpen() : onHandleDelete(character.id);
  };

  return(
    <Fab 
      color="secondary" 
      size="large"
      aria-label="add"
      className="add-button"
      onClick={getAction}
      style={{
        position: "fixed",
        bottom: "40px",
        right: "40px",
        width: "5em",
        height: "5em",
      }}
    >
      {icon === "add" ? <Add /> : null}
      {icon === "delete" ? <Delete /> : null}
      {icon === "edit" ? <Edit /> : null}
    </Fab>
  );
};

export default FloatingActionButton;
