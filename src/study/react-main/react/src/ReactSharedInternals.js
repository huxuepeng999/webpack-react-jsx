

import ReactCurrentDispatcher from './ReactCurrentDispatcher';


const ReactSharedInternals = {
    ReactCurrentDispatcher,
    ReactCurrentBatchConfig,
    ReactCurrentOwner,
    // Used by renderers to avoid bundling object-assign twice in UMD bundles:
    assign,
}

export default ReactSharedInternals;
