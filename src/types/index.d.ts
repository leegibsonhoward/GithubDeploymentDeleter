export {};

// extend express session
// more info: https://stackoverflow.com/a/65269713
declare module 'express-session' {
    interface SessionData {
        accessToken: string;
    }
}
