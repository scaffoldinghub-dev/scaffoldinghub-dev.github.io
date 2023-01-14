import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Common Pattern',
    Svg: require('@site/static/img/undraw_development.svg').default,
    description: (
      <>
        Scaffolding idea comes from <a href="https://guides.rubyonrails.org/v3.2/getting_started.html#getting-up-and-running-quickly-with-scaffolding" target="_blank">rails</a> and <a href="https://docs.grails.org/5.2.5/guide/single.html#scaffolding" target="_blank">grails.</a> Lots of ideas, structure and approach lifted directly from their documentation and implementation. 
      </>
    ),
  },
  {
    title: 'Get to your code and learn',
    Svg: require('@site/static/img/undraw_programming.svg').default,
    description: (
      <>
        Source code and prior experience using the scaffolding approach in grails/rails to bootstrap CRUD web application has lead to the creation of these packages/plugins

      </>
    ),
  },
  {
    title: 'Powered by Dart & Flutter',
    Svg: require('@site/static/img/undraw_flutter_dev.svg').default,
    description: (
      <>
        Why not take these benefits to flutter / dart even if only to help quickly educate the patterns in building, testing and scaling a CRUD application. 
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
