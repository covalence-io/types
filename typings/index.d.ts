namespace models {
    namespace server {
        interface IUser {
            id: number;
            email: string;
            firstname: string;
            lastname: string;
        }
    }

    namespace client {
        interface IUser {
            id: number;
            email: string;
            fullName: string;
            firstName: string;
        }
    }

    interface IPost {
        id: number;
        name: string;
        body: string;
    }
}