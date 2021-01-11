import {ROLE_TYPES, PERMISSIONS_TYPES} from './types';

export const ROLES = [
    ROLE_TYPES.ADMIN, 
    ROLE_TYPES.USER, 
    ROLE_TYPES.MEMBER, 
    ROLE_TYPES.CUSTOM
];

export const PERMISSIONS = [
    PERMISSIONS_TYPES.CREATE,
    PERMISSIONS_TYPES.UPDATE,
    PERMISSIONS_TYPES.MOVE,
    PERMISSIONS_TYPES.DELETE,
    PERMISSIONS_TYPES.VIEW,
    PERMISSIONS_TYPES.SHARE,
];

export const ADMIN_PERMISSIONS = {
    [PERMISSIONS_TYPES.CREATE]: {
        folders: {
            checked: true,
        }, 
        gems: {
            checked: true,
        }
    },
    [PERMISSIONS_TYPES.UPDATE]: {
        folders: {
            checked: true,
        }, 
        gems: {
            checked: true,
        }
    },
    [PERMISSIONS_TYPES.MOVE]: {
        folders: {
            checked: true,
        }, 
        gems: {
            checked: true,
        }
    },
    [PERMISSIONS_TYPES.DELETE]: {
        folders: {
            checked: true,
        }, 
        gems: {
            checked: true,
        }
    },
    [PERMISSIONS_TYPES.VIEW]: {
        folders: {
            checked: true,
        }, 
        gems: {
            checked: true,
        }
    },
    [PERMISSIONS_TYPES.SHARE]: {
        folders: {
            checked: true,
        }, 
        gems: {
            checked: true,
        }
    },
};

export const USER_PERMISSIONS = {
    [PERMISSIONS_TYPES.CREATE]: {
        folders: {
            checked: true,
        }, 
        gems: {
            checked: true,
        }
    },
    [PERMISSIONS_TYPES.UPDATE]: {
        folders: {
            checked: true,
        }, 
        gems: {
            checked: true,
        }
    },
    [PERMISSIONS_TYPES.MOVE]: {
        folders: {
            checked: false,
        }, 
        gems: {
            checked: false,
        }
    },
    [PERMISSIONS_TYPES.DELETE]: {
        folders: {
            checked: false,
        }, 
        gems: {
            checked: false,
        }
    },
    [PERMISSIONS_TYPES.VIEW]: {
        folders: {
            checked: true,
        }, 
        gems: {
            checked: true,
        }
    },
    [PERMISSIONS_TYPES.SHARE]: {
        folders: {
            checked: true,
        }, 
        gems: {
            checked: true,
        }
    },
};

export const MEMBER_PERMISSIONS = {
    [PERMISSIONS_TYPES.CREATE]: {
        folders: {
            checked: false,
        }, 
        gems: {
            checked: false,
        }
    },
    [PERMISSIONS_TYPES.UPDATE]: {
        folders: {
            checked: false,
        }, 
        gems: {
            checked: false,
        }
    },
    [PERMISSIONS_TYPES.MOVE]: {
        folders: {
            checked: false,
        }, 
        gems: {
            checked: false,
        }
    },
    [PERMISSIONS_TYPES.DELETE]: {
        folders: {
            checked: false,
        }, 
        gems: {
            checked: false,
        }
    },
    [PERMISSIONS_TYPES.VIEW]: {
        folders: {
            checked: true,
        }, 
        gems: {
            checked: true,
        }
    },
    [PERMISSIONS_TYPES.SHARE]: {
        folders: {
            checked: true,
        }, 
        gems: {
            checked: true,
        }
    },
};

export const CUSTOM_PERMISSIONS = {
    [PERMISSIONS_TYPES.CREATE]: {
        folders: {
            checked: false,
        }, 
        gems: {
            checked: false,
        }
    },
    [PERMISSIONS_TYPES.UPDATE]: {
        folders: {
            checked: false,
        }, 
        gems: {
            checked: false,
        }
    },
    [PERMISSIONS_TYPES.MOVE]: {
        folders: {
            checked: false,
        }, 
        gems: {
            checked: false,
        }
    },
    [PERMISSIONS_TYPES.DELETE]: {
        folders: {
            checked: false,
        }, 
        gems: {
            checked: false,
        }
    },
    [PERMISSIONS_TYPES.VIEW]: {
        folders: {
            checked: false,
        }, 
        gems: {
            checked: false,
        }
    },
    [PERMISSIONS_TYPES.SHARE]: {
        folders: {
            checked: false,
        }, 
        gems: {
            checked: false,
        }
    },
};
