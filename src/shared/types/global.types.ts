import { RootStackParamList } from "./rootStack.types";

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList { }
    }
}
