import type { IStateSchema } from "../../../config/StateSchema";

export const getLanguage = (state: IStateSchema) => state.app.language;
