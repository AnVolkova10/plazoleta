import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Cátedra Taller de Tesis',
    Svg: require('@site/static/img/taller_de_tesis.svg').default,
    description: (
      <>
        Materia final de 5to año de la carrera de Artes Audiovisuales.
        Profesores: Magdalena Arau, Hernán Khourian & Julian D´ angiolillo.
      </>
    ),
  },
  {
    title: 'Facultad de Artes',
    Svg: require('@site/static/img/facultad_de_artes.svg').default,
    description: (
      <>
        Institución reconocida en Argentina por su formación de artistas de alto
        nivel. Con una variedad de carreras y posgrados, la facultad cuenta con
        un cuerpo docente capacitado y una infraestructura de calidad para
        ofrecer una experiencia educativa enriquecedora..
      </>
    ),
  },
  {
    title: 'Universidad Nacional de La Plata',
    Svg: require('@site/static/img/universidad_nancional_de_la_plata.svg')
      .default,
    description: (
      <>
        La Universidad Nacional de La Plata es una de las principales
        instituciones educativas de Argentina, reconocida por su excelencia
        académica y su amplia oferta de carreras y programas de posgrado en
        diversas disciplinas con enfoque en la investigación y la innovación.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className='text--center'>
        <Svg className={styles.featureSvg} role='img' />
      </div>
      <div className='text--center padding-horiz--md'>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className='container'>
        <div className='row'>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
