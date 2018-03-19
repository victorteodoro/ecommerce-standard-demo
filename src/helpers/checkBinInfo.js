import lookUpFunc from 'binlookup';
import {
  applySpec,
  compose,
  curry,
  defaultTo,
  toLower,
  prop,
  split,
  path
} from 'ramda';

const lookUp = lookUpFunc();

const updateStateFromBin = componentThis => (
  compose(
    binData => componentThis.setState(binData),
    applySpec({
      cardBrand: compose(
        toLower,
        defaultTo(''),
        prop('scheme')
      ),
      cardBank: compose(
        toLower,
        splittedName => splittedName[0],
        split(' '),
        defaultTo(''),
        path(['bank', 'name'])
      )
    })
  )
);

const checkBinInfo = curry((componentThis, { target: { value } }) => {
  if (value.length > 5) {
    lookUp(value)
      .then(updateStateFromBin(componentThis));
  }
});

export default checkBinInfo;
