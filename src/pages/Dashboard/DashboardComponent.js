import React from 'react';
import AnimateHeight from 'react-animate-height';

import * as Styles from './DashboardStyles';
import Button from '../../components/Button/ButtonComponent';
import Detail from '../Detail/DetailComponent';

export default function Dashboard({ films, detail, showDetails }) {
  return (
    <Styles.Container>
      <Styles.Content>
        <Styles.Title>Lista de filmes</Styles.Title>
        <AnimateHeight
          duration={500}
          height={films.length === 0 ? '0' : 'auto'}
        >
          <Styles.Grid>
            {!detail &&
              films.length > 0 &&
              films.map((item, index) => (
                <Button key={index} onClick={() => showDetails(item)}>
                  <Styles.FilmLetter>{item.title}</Styles.FilmLetter>
                </Button>
              ))}
          </Styles.Grid>
          {detail && (
            <Detail detail={detail} handleBack={() => showDetails(false)} />
          )}
        </AnimateHeight>
      </Styles.Content>
    </Styles.Container>
  );
}
