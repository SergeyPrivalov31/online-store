import { observer } from "mobx-react-lite";
import React from "react";
import { useContext } from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { Context } from "..";

const TypeBar = observer(() => {
  const { device } = useContext(Context);
  return (
      <ListGroup className="list-group">
        {device.types.map((type) => (
          <ListGroupItem
            key={type.id}
            style={{cursor: 'pointer'}}
            active={type.id === device.selectedType.id}
            onClick={() => device.setSelectedType(type)}
            className="list-group-item">
            {type.name}
          </ListGroupItem>
        ))}
      </ListGroup>
  );
});

export default TypeBar;
