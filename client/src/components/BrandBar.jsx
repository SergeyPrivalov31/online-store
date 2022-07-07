import { observer } from "mobx-react-lite";
import React from "react";
import { useContext } from "react";
import { Card, Row } from "react-bootstrap";
import { Context } from "..";

const BrandBar = observer(() => {
  const { device } = useContext(Context);
  return (
      <Row className="d-flex">
        {device.brands.map(brand => 
          <Card
            key={brand.id}
            className='p-2 m-1'
            border={brand.id === device.selectedBrand.id ? 'info' : 'light'}
            onClick={() => device.setSelectedBrand(brand)}
            style={{width: 'max-content', cursor: 'pointer'}}
          >
            {brand.name}
          </Card>
          )
        }
        </Row>
  );
});

export default BrandBar;
