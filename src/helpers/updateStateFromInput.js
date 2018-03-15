/**************************************************
 *       UPDATE STATE FROM INPUT VALUE
 * 
 * It's very common to need to update a component's
 * state based on some input's value of some child.
 * This helpers automate that based on the name of
 * the input.
 * 
 * Obs.: The name of the state property and the name
 * of the input element must be the same.
 *
 * @author: Victor Teodoro
 * Date: 14/03/2018 
 ***************************************************/

import {
  compose,
  curry,
  path,
  equals,
  cond,
  map
} from 'ramda';

const checkInputType = (desiredType) => {    
  return compose(
    equals(desiredType),
    path(['target', 'name'])
  );
};

const updateState = curry((componentThis, desiredProperty, event) => {
  componentThis.setState({
    [desiredProperty]: event.target.value
  });
});

const handleChangeFromInput = curry((componentThis, properties) => {
  const buildCondArrays = (property) => (
    [checkInputType(property), updateState(componentThis, property)]
  );

  const condArrays = map(buildCondArrays, properties);
  
  return cond(condArrays);
});

export default handleChangeFromInput;
