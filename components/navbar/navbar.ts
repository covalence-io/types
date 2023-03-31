export interface INavbar {
    title: string;
    icon: string;
}

interface IExtUser extends models.client.IUser {
    _isAdmin: boolean;
}