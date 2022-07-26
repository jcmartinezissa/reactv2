import React from 'react';
import {
  Card, Button, Col, Row,
} from 'antd';

const Cardjc = ({ character, setIdPersonaje }) => {
  const { Meta } = Card;
  const HandleClic = () => {
    setIdPersonaje(character.id);
  };
  return (
    <Row>
      <Col span={12}>
        <Card
          hoverable
          style={{
            width: 240,
          }}
          cover={<img alt={character.name} src={character.image} />}
        >
          <Meta title={character.name} description={character.species} />
          <Button onClick={HandleClic} type="primary">
            Enviar ID
          </Button>
        </Card>
      </Col>
    </Row>
  );
};

export default Cardjc;
