/* eslint-disable no-magic-numbers */
import {test} from "tap";

import thrush from "./";

test(({equal, end}) => {
  equal(
    thrush(0)((value) => `${value}`),
    "0"
  );

  end();
});
