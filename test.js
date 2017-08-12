/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type, no-magic-numbers */
import {test} from "tap"

import thrush from "./source"

test(({equal, end}) => {
  equal(
    thrush(0)((value) => `${value}`),
    "0"
  )

  end()
})
