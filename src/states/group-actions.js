import {
    createGroup as createGroupFromApi,
    listGroups as listGroupsFromApi,
    deleteGroup as deleteGroupFromApi
} from 'api/group.js';

export function toggleAddGroupModal() {
    return {
        type: '@GROUPLIST/TOOGLE_ADDGROUP_MODAL'
    };
}

function startLoading() {
    return {
        type: '@GROUPLIST/START_LOADING'
    };
}

function endLoading() {
    return {
        type: '@GROUPLIST/END_LOADING'
    };
}

export function listGroups(searchText) {
    return (dispatch, getState) => {
      dispatch(startLoading());
      return listGroupsFromApi(searchText).then(groups => {
            dispatch(getGroups(groups));
        }).catch(err => {
            console.error('Error listing posts', err);
        });
    };
}

export function createGroup(name, searchText) {
    return (dispatch, getState) => {
      return createGroupFromApi(name).then(() => {
        dispatch(listGroups(searchText));

    }).catch(err => {
        console.error('Error creating posts', err);
    });
  };
}


function getGroups(groups) {
    console.log(groups);
    return {
        type: '@GROUPLIST/GET_GROUPS',
        groups
    };
}

export function deleteGroup(id, searchText) {
    return (dispatch, getState) => {
      return deleteGroupFromApi(id).then(() => {
        dispatch(listGroups(searchText));
    }).catch(err => {
        console.error('Error deleting posts', err);
    });
  };
}
