module.exports = `

#include "keymap_common.h"

#ifdef IS31FL3733
#    include "is31fl3733.h"
#elif defined(IS31FL3737)
#    include "is31fl3737.h"
#elif defined(IS31FL3741)
#    include "is31fl3741.h"
#endif

#ifdef RGB_TOP_ENABLE
#include "rgb_matrix_types.h"

%KEYMAP_RGB%

#endif
`.trim()
