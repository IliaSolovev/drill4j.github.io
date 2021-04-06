import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';

import { Icon } from '../components';

import styles from './styles.module.scss';
import '../css/index.css';

const Figure: React.FC = ({ children }) => (
  <figure
    className="grid lg:grid-cols-2 md:grid-cols-1 place-items-center gap-x-16"
    style={{ minHeight: '400px' }}
  >
    {children}
  </figure>
);

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <main className={styles.mainPageWrapper}>
        <section className="container">
          <Figure>
            <img
              className={clsx(styles.shadowImg, 'lg:order-1 order-2 bg-contain')}
              src={useBaseUrl('img/time-savings.png')}
              alt="time savings"
            />
            <figcaption className="flex flex-col justify-center lg:order-2">
              <h3>Time Savings</h3>
              <p>
                Drill is “feature-on-demand” tool for real-time application profiling that does not affect codebase.
                It provides the ability to make white box functional.
              </p>
            </figcaption>
          </Figure>
          <Figure>
            <div className="relative order-2 w-100 h-62">
              <div className={clsx(styles.risksAndTestsToRun, styles.borderedImgWrapper, 'absolute z-10')}>
                <img
                  src={useBaseUrl('img/risks-and-t2r.png')}
                  alt="risks and tests to run"
                />
              </div>
              <img
                className={clsx(styles.risksAndTestsToRunBackground, 'absolute')}
                src={useBaseUrl('img/risks-and-t2r-background.png')}
                alt="risks and tests to run background"
              />
            </div>
            <figcaption className="flex flex-col justify-center order-1">
              <h3>Risk and Test to Run</h3>
              <p>Risk is a new or modified uncovered method.
                Drill4J advises which test you need to run to cover theese Risk methods.
              </p>
            </figcaption>
          </Figure>
          <Figure>
            <div className="relative lg:order-1 order-2 w-100 h-62">
              <div
                className={clsx(styles.coverage, styles.borderedImgWrapper, 'absolute z-10')}
              >
                <img
                  src={useBaseUrl('img/coverage.png')}
                  alt="coverage"
                />
              </div>
              <img
                className={clsx(styles.coverageBackground, 'absolute')}
                src={useBaseUrl('img/coverage-background.png')}
                alt="coverage background"
              />
            </div>
            <figcaption className="flex flex-col justify-center lg:order-2 md:order-1">
              <h3>Measure Code Coverage</h3>
              <p>
                Code coverage is a tricky metric, but Drill4J provides it with actionable feedback. It allows map tests
                to code and vice versa.
              </p>
            </figcaption>
          </Figure>
          <Figure>
            <div className="relative order-2 w-100 h-62">
              <div
                className={clsx(styles.qualityGate, styles.borderedImgWrapper, 'absolute z-10')}
              >
                <img src={useBaseUrl('img/quality-gate.png')} alt="quality gate" />
              </div>
              <img
                className={clsx(styles.qualityGateBackground, 'absolute')}
                src={useBaseUrl('img/quality-gate-background.png')}
                alt="quality gate background"
              />
            </div>
            <figcaption className="flex flex-col justify-center order-1">
              <h3>Quality Gate</h3>
              <p>
                You can configure 3 key metrics: Code Coverage, Risks and Tests to Run
                and use Drill4J Quality Gate status (passed, failed) in a CI/CD pipelines.
              </p>
            </figcaption>
          </Figure>
          <Figure>
            <div className="relative lg:order-1 order-2 md:mb-8 w-100 h-62">
              <img
                className={clsx(styles.browserExtension, 'absolute z-10')}
                src={useBaseUrl('img/browser-extension.png')}
                alt="browser extension"
              />
              <img
                className={clsx(styles.browserExtensionBackground, 'absolute')}
                src={useBaseUrl('img/browser-extension-background.png')}
                alt="browser extension background"
              />
            </div>
            <figcaption className="flex flex-col justify-center md:order-1 lg:order-2">
              <h3>Chrome Browser Extension</h3>
              <p className="mb-8 lg:mb-0">
                Browser extension allows gather manual Code Coverage for several users
                on the one test environment at the same time.
              </p>
            </figcaption>
          </Figure>
        </section>
        <section className={clsx(styles.integrateStepsWrapper, 'py-18 text-center')}>
          <div className="container flex flex-col justify-center">
            <h2 className="mb-12">Easy to integrate</h2>
            <ol className="grid lg:grid-cols-4 md:grid-cols-2 gap-x-12 gap-y-8 p-0 mb-8 md:mb-20">
              <li>
                <h3 className="mb-2">Run Drill4J</h3>
                <p>Deploy Drill4J Admin</p>
              </li>
              <li>
                <h3 className="mb-2">Run Application</h3>
                <p>Start your application with Drill4J Agent</p>
              </li>
              <li>
                <h3 className="mb-2">Register Agent</h3>
                <p>Open Drill4J and register the Agent</p>
              </li>
              <li>
                <h3 className="mb-2">Done</h3>
                <p>Drill4J is ready to use</p>
              </li>
            </ol>
            <a href="#" className="button-primary mx-auto">Full instruction</a>
          </div>
        </section>
        <section className={clsx(styles.features, 'container')}>
          <div className="pt-24 pb-32">
            <h2 className="mb-18 mxs:mb-6 text-center">Commercial Services</h2>
            <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-x-26">
              <div className="py-4 px-8 mb-6 lg:mb-0">
                <h3 className="mb-10">Basic</h3>
                <p className="mb-6">Functionality and features:</p>
                <ul className="lg:mb-66 md:mb-9 pl-8">
                  <li className={styles.basicFeature}>Test Impact Analytics</li>
                  <li className={styles.basicFeature}>Test Gap Analysis</li>
                  <li className={styles.basicFeature}>Microservices Support</li>
                  <li className={styles.basicFeature}>Chrome Browser Extension</li>
                </ul>
                <a href="#" className="button-ghost justify-center">For free</a>
              </div>
              <div className={clsx(styles.individualFeatures, 'pt-4 pb-8')}>
                <h3 className="mb-4 mx-8">Individual</h3>
                <p className="h-12 mb-6 pt-6 px-8 border-t border-monochrome-medium-tint">Basic features, plus:</p>
                <ul className="mx-8 pl-8">
                  <li className={styles.basicFeature}>Test Impact Analytics</li>
                  <li className={styles.basicFeature}>Test Gap Analysis</li>
                  <li className={styles.basicFeature}>Microservices Support</li>
                  <li className={styles.basicFeature}>Chrome Browser Extension</li>
                </ul>
                <ul className="mb-9 mx-8 pl-8">
                  <li className={styles.individualFeature}>
                    <strong>Support</strong>
                    <span>Q&A sessions</span>
                  </li>
                  <li className={styles.individualFeature}>
                    <strong>Plugins customizing</strong>
                    <span>Setting up ready-made plugins for a project needs</span>
                  </li>
                  <li className={styles.individualFeature}>
                    <strong>Integration</strong>
                    <span>Connection of agents to a project</span>
                  </li>
                </ul>
                <a href="#" className="button-primary mx-8 justify-center">Mail us</a>
              </div>
            </div>
          </div>
        </section>
        <section className={clsx(styles.quickStart, 'pt-16 pb-14')}>
          <div className="container flex flex-col justify-center text-center">
            <h2 className="mb-2">Get a quick start with Drill4J today</h2>
            <p className="mb-8">Try easy to install demo examples for JAVA and JS agents. ***</p>
            <a href="#" className="button-secondary mx-auto">Try demo</a>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
