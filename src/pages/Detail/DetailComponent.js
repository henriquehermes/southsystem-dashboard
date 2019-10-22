import React from 'react';
import PropTypes from 'prop-types';

import * as Styles from './DetailStyles';
import backIcon from '../../assets/back.png';

export default function DetailComponent({ detail, handleBack }) {
  return (
    <Styles.Container>
      <Styles.Header>
        <Styles.Button onClick={() => handleBack()}>
          <img src={backIcon} alt='backimage' />
        </Styles.Button>
        <Styles.Title>{detail.title}</Styles.Title>
      </Styles.Header>
      <Styles.Body>
        <Styles.BodyTitle>Diretor</Styles.BodyTitle>
        <Styles.BodyDescription>{detail.director}</Styles.BodyDescription>
        <Styles.BodyTitle>Produzido por</Styles.BodyTitle>
        <Styles.BodyDescription>{detail.producer}</Styles.BodyDescription>
        <Styles.BodyTitle>Lançamento</Styles.BodyTitle>
        <Styles.BodyDescription>{detail.release_date}</Styles.BodyDescription>
        <Styles.BodyTitle>Episódio</Styles.BodyTitle>
        <Styles.BodyDescription>{detail.episode_id}</Styles.BodyDescription>
        <Styles.BodyTitle>Descrição</Styles.BodyTitle>
        <Styles.BodyDescription>{detail.opening_crawl}</Styles.BodyDescription>
        <Styles.BodyTitle>Quantidade de personagens</Styles.BodyTitle>
        <Styles.BodyDescription>
          {detail.characters.length}
        </Styles.BodyDescription>
        <Styles.BodyTitle>Quantidade de planetas</Styles.BodyTitle>
        <Styles.BodyDescription>{detail.planets.length}</Styles.BodyDescription>
        <Styles.BodyTitle>Quantidade de especies</Styles.BodyTitle>
        <Styles.BodyDescription>{detail.species.length}</Styles.BodyDescription>
        <Styles.BodyTitle>Quantidade de naves</Styles.BodyTitle>
        <Styles.BodyDescription>
          {detail.starships.length}
        </Styles.BodyDescription>
        <Styles.BodyTitle>Quantidade de veiculos</Styles.BodyTitle>
        <Styles.BodyDescription>
          {detail.vehicles.length}
        </Styles.BodyDescription>
      </Styles.Body>
    </Styles.Container>
  );
}

DetailComponent.propTypes = {
  handleBack: PropTypes.func.isRequired,
  detail: PropTypes.shape.isRequired,
};
