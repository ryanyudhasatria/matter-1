import React from 'react';
import ReactMarkdown from 'react-markdown';
import { storiesOf } from '@storybook/react';

import COLORS from '../src/constants/colors';

const md = `
Matter adopts the [Atomic Design Principle](http://bradfrost.com/blog/post/atomic-web-design/) to classify React components. Templates renamed as Pagelets for alphabetical order.

- **Atoms**

  An **atom** is a core component. **Atoms** wrap around native components or custom components in a very small structure. **Atoms** should not have their own state, and are pure components.

- **Molecules**

  A **molecule** is a component of two or more **Atoms**. **Molecules** are the smallest components which can have their own state. However, a **molecule** should only have UI-related states.

- **Organisms**

  An **Organism** is a component made of **Molecules**. It is not recommended for an **Organism** to directly use **Atoms**. **Organisms** are the smallest components that can connect to the **Store**.

- **Pagelets**

  A **Pagelet** is section of a page or screen. **Pagelets** may consist of **Organisms** or **Molecules**. **Molecules** are allowed to be in **pagelets**, since there may be cases where we need to directly use a **Molecule** outside of an **Organism**. Pagelets can connect to the **Store**, but you should avoid using one same state from a **Store** for multiple **Pagelets** inside a **page**. If this occurs, you should map the state as props to the **Page** instead.

- **Pages**

  Pages are the outer-most component, consists of **Pagelets**, **Organisms**, or **Molecules**. Both **Organisms** and **Molecules** are allowed to be in a page when the page is small enough to use a **pagelet**. Pages are the most recommended component which connects to the **store**.

  A **Page** is an outermost component, which consists of **Pagelets**, **Organisms**, or **Molecules**. Both **Organisms** and **Molecules** are allowed to be in a **Page** that is small enough, you don't need to use **Pagelets**. It is recommended to connect **Pages** to the **Store** instead of connecting each or several of its components.

`;

storiesOf('Getting Started', module)
  .add(
    'Welcome to Matter',
    () => (
      <div style={{ fontFamily: 'Heebo', padding: 30 }}>
        <h1>Welcome to Matter - KODE's UI</h1>
      </div>
  ))
  .add(
    'Atomic Design',
    () => (
      <div style={{ fontFamily: 'Heebo', padding: 30 }}>
        <h1>Atomic Design</h1>
        <p>
          <ReactMarkdown source={md} />
        </p>
      </div>
    )
  )
  .add(
    'Colors',
    () => (
      <div style={{ fontFamily: 'Heebo', padding: 30 }}>
        <h1>Colors</h1>
        <div className="flex flex-column">
          {Object.keys(COLORS).map((rootColor) => (
            <div className="flex flex-column">
              <h3>{rootColor}</h3>
              <div className="flex flex-row flex-wrap">
                {Object.values(COLORS[rootColor]).map((childColor) => (
                  <div className="pv2 ph2 flex flex-row items-center">
                    <div
                      className="br3 grow pointer flex flex-row items-center justify-center white"
                      style={{ height: 120, width: 120, backgroundColor: childColor === '#FFFFFF' ? '#222' : childColor }}
                    >
                      <span>{`${childColor}`}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  );

