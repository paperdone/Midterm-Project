const initGrouplistState = {
    addgroup_modal_Toggle: false,
    groups:[],
    groupLoading: false
};

export function grouplist(state = initGrouplistState, action) {
    switch (action.type) {
        case '@GROUPLIST/TOOGLE_ADDGROUP_MODAL':
            return {
                ...state,
                addgroup_modal_Toggle: !state.addgroup_modal_Toggle
            };
        case '@GROUPLIST/CREATE_GROUP':
            return {
                addgroup_modal_Toggle: false,
                groups: action.groups
            };
            case '@GROUPLIST/START_LOADING':
                return {
                    ...state,
                    groupLoading: true
                };
            case '@GROUPLIST/END_LOADING':
                return {
                    ...state,
                    groupLoading: false
                };
            case '@GROUPLIST/GET_GROUPS':
                return {
                    addgroup_modal_Toggle: false,
                    groupLoading: false,
                    groups: action.groups
                };


        default:
            return state;
    }
}
