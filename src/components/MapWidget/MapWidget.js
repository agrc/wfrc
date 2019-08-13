import React, { useState, useRef, useEffect } from 'react';
import { Button, ButtonGroup, Card, CardHeader, CardBody } from 'reactstrap';
import './MapWidget.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default props => {
  const [isOpen, setIsOpen] = useState(props.defaultOpen);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const padding = '7px';
  const cardStyle = {
    display: isOpen ? 'flex' : 'none',
    top: props.position === 0 ? padding : `calc(50% - ${padding})`,
    bottom: props.position === 0 ? `calc(50% + 2 * ${padding})` : padding
  };
  const buttonDiv = useRef();
  useEffect(() => {
    if (props.mapView && buttonDiv.current) {
      props.mapView.ui.add(buttonDiv.current, 'top-left');
    }
  }, [buttonDiv, props.mapView]);

  return (
    <>
      <div className="map-widget-button btn-toolbar" role="toolbar" ref={buttonDiv}>
        <ButtonGroup>
          <Button onClick={toggle} title={props.name}>
            <FontAwesomeIcon icon={props.icon} />
          </Button>
        </ButtonGroup>
      </div>
      <Card style={cardStyle} className="map-widget-card">
        <CardHeader>
          {props.name}
          <Button close onClick={toggle} />
        </CardHeader>
        <CardBody>
          {props.children}
        </CardBody>
      </Card>
    </>
  );
};
