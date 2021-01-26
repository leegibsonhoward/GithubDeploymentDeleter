import type { Config } from '@jest/types';

export default async (): Promise<Config.InitialOptions> => {
    return {
        verbose: true,
        transform: {
            '^.+\\.ts?$': 'ts-jest',
        },
        moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
        moduleDirectories: ['node_modules', './src/**/*'],
        moduleNameMapper: {
            '^src/(.*)$': '<rootDir>/src/**/$1',
        },
    };
};
