

import axios from 'axios';

const GETAPPS = 'pypaas/detail/GETAPPS';
const GETAPPS_SUCCESS = 'pypaas/detail/GETAPPS_SUCCESS';
const GETAPPS_FAIL = 'pypaas/detail/GETAPPS_FAIL';

const initialState = {
    apps: {
        list: [],
        loading: true
    }
};

export default function reducer(state = initialState, action = {}) {

    switch (action.type) {

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

        default:
            return state;
    }
};

export function getApps(type) {

    return {
        type: GETAPPS,
        payload: {
            request: {
                url: `/detail/list/${type}`
            }
        }
    };
}
