import { Config } from 'ziggy-js';
import * as models from "@/types/models";

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: {
        user: models.User;
    };
    appName: string;
    ziggy: Config & { location: string };
};