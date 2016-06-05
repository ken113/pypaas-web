

import axios from 'axios';

const GETAPPS = 'pypaas/detail/GETAPPS';
const GETAPPS_SUCCESS = 'pypaas/detail/GETAPPS_SUCCESS';
const GETAPPS_FAIL = 'pypaas/detail/GETAPPS_FAIL';
const GETDETAIL = 'pypaas/detail/GETDETAIL';
const GETDETAIL_SUCCESS = 'pypaas/detail/GETDETAIL_SUCCESS';
const GETDETAIL_FAIL = 'pypaas/detail/GETDETAIL_FAIL';

const initialState = {
    apps: {
        list: [],
        loading: true
    },

    app: {
        loading: true,
        data: {}
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

        case GETDETAIL:
            return {
                ...state,
                app: {
                    ...state.app,
                    loading: true
                }
            };

        case GETDETAIL_SUCCESS:
            return {
                ...state,
                app: {
                    ...state.app,
                    loading: false,
                    data: action.payload.data
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

export function getDetail(id) {
    return {
        type: GETDETAIL,
        payload: {
            request: {
                url: `/detail/${id}`
            }
        }
    };
}
