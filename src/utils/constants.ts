export enum Routes {
  AUTH = 'auth',
  USERS = 'users',
}

export enum Services {
  AUTH = 'AUTH_SERVICE',
  USERS = 'USERS_SERVICE',
}

export const jwtConstants = {
  secret: `${process.env.JWT_SECRET}`,
};

