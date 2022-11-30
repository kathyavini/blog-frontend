import { button, badge } from '../styles/style.css';
import { stack } from '../styles/recipes.css';
import { pageElements } from './PageElements.css';
import { Form } from './Form';

export const PageElements = () => {
  return (
    <section className={pageElements}>
      <h2>Page Elements to Style</h2>
      <div className={badge} style={{ width: 'min(80vw, 40rem)' }}>
        <p>
          Below are some general page elements to play around with{' '}
          <a href="https://vanilla-extract.style/"> Vanilla Extract</a>{' '}
          themeing.
        </p>
      </div>
      <div className={stack({ gap: 'lg' })}>
        <div>
          <h3>Stacks and Buttons</h3>
          <p>The container for this section is a stack with gap set to "lg"</p>
        </div>

        <div className={stack()}>
          <p>
            This stack has gap default settings so gap "sm" and align "stretch".
          </p>
          <button className={button.primary}>Primary button</button>
        </div>
        <div className={stack({ gap: 'md', align: 'center' })}>
          <p>This stack has gap "md".</p>
          <p>
            This stack also has "centered: true" applied. Note how the button
            doesn't stretch to fill the container.
          </p>
          <button className={button.filled}>Filled button</button>
        </div>
        <div className={stack({ gap: 'xs', align: 'end' })}>
          <p>
            This stack has gap "xs" and align: "end". I'll supply some extra
            text so that alignment becomes visible.
          </p>
          <button className={button.animated}>Animated button</button>
        </div>
      </div>
      <h3 id="form">Some form styling</h3>
      <Form />
    </section>
  );
};
