
import axios from 'axios';

const SHOWAD = 'pypaas/categories/SHOWAD';
const SHOWNEXT = 'pypaas/categories/SHOWNEXT';
const SHOWPREV = 'pypaas/categories/SHOWPREV';
const GETAPPS = 'pypaas/categories/GETAPPS';
const GETAPPS_SUCCESS = 'pypaas/categories/GETAPPS_SUCCESS';
const GETAPPS_FAIL = 'pypaas/categories/GETAPPS_FAIL';
const GETADS = 'pypaas/categories/GETADS';
const GETADS_SUCCESS = 'pypaas/categories/GETADS_SUCCESS';
const GETADS_FAIL = 'pypaas/categories/GETADS_FAIL';

const initialState = {
    ads: {
        list: [],
        index: 1
    },

    apps: {
        list: [],
        loading: true
    }
};

export default function reducer(state = initialState, action = {}) {

    let length = state.ads.list.length;
    let index = state.ads.index;

    switch (action.type) {

        case SHOWAD:
            return {
                ...state,
                ads: {
                    ...state.ads,
                    index: action.index
                }
            };

        case SHOWNEXT:
            if (index < length) {
                return {
                    ...state,
                    ads: {
                        ...state.ads,
                        index: ++index
                    }
                };
            } else {
                return {
                    ...state,
                    ads: {
                        ...state.ads,
                        index: 1
                    }
                };
            }

        case SHOWPREV:
            if (index > 1) {
                return {
                    ...state,
                    ads: {
                        ...state.ads,
                        index: --index
                    }
                };
            } else {

                return {
                    ...state,
                    ads: {
                        ...state.ads,
                        index: length
                    }
                };
            }
        case GETAPPS:
            return {
                ...state,
                apps: {
                    ...state.apps,
                    loading: true
                }
            };

        case GETAPPS_SUCCESS:
            return {
                ...state,
                apps: {
                    ...state.apps,
                    loading: false,
                    list: action.payload.data
                }
            };

        case GETADS_SUCCESS:
            return {
                ...state,
                ads: {
                    ...state.ads,
                    list: action.payload.data
                }
            };

        default:
            return state;
    }
};

export function showNext() {

    return {
        type: SHOWNEXT
    };
};

export function showPrev() {

    return {
        type: SHOWPREV
    };
}

export function showAd(index) {

    return {
        type: SHOWAD,
        index
    };
}

export function getApps(type, sortby) {

    return {
        type: GETAPPS,
        payload: {
            request: {
                url: `/categories/list/${type}/${sortby}`
            }
        }
    };
}

export function getAds(type) {

    return {
        type: GETADS,
        payload: {
            request: {
                url: `/categories/ads/${type}`
            }
        }
    };
}
