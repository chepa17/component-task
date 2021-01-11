export enum ROLE_TYPES {
    USER = "User",
    MEMBER = "Member",
    ADMIN = "Admin",
    CUSTOM = "Custom"
};

export const ROLES = [
    ROLE_TYPES.USER, 
    ROLE_TYPES.MEMBER, 
    ROLE_TYPES.ADMIN, 
    ROLE_TYPES.CUSTOM
];

export enum PERMISSIONS_TYPES {
    CREATE = "Create",
    UPDATE = "Update",
    MOVE = "Move",
    DELETE = "Delete",
    VIEW = "View",
    SHARE = "Share",
};

export const PERMISSIONS = [
    PERMISSIONS_TYPES.CREATE,
    PERMISSIONS_TYPES.UPDATE,
    PERMISSIONS_TYPES.MOVE,
    PERMISSIONS_TYPES.DELETE,
    PERMISSIONS_TYPES.VIEW,
    PERMISSIONS_TYPES.SHARE,
];
