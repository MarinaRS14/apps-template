import React, { useState } from 'react';
import { Counter } from './counter';

const withCounter = (WrappedComponent) => {
  return (props) => {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
      setCount(count + 1);
    };

    return <WrappedComponent count={count} incrementCount={incrementCount} {...props} />;
  };
};

export const CounterWithHOC = withCounter(Counter);
