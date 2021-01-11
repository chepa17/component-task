export enum ROLE_TYPES {
    ADMIN = "Admin",
    USER = "User",
    MEMBER = "Member",
    CUSTOM = "Custom"
};

export enum PERMISSIONS_TYPES {
    CREATE = "Create",
    UPDATE = "Update",
    MOVE = "Move",
    DELETE = "Delete",
    VIEW = "View",
    SHARE = "Share",
};

export type Permissions = {
    [permission in PERMISSIONS_TYPES]: {
        folders: {checked: boolean}; 
        gems: {checked: boolean};
    }
}
