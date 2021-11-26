import "styled-components";
import { IColors } from "theme";

declare module "styled-components"{
    export interface DefaultTheme {
        palette: IColors
    }
}