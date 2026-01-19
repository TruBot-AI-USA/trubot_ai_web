import { customSolutionsPageData } from "./customSolutions";
import { otherToolsPageData } from "./otherTools";
import { ProductPageDataType } from "../../types/productPage";

export const productPagesMap: Record<string, ProductPageDataType> = {
  custom: customSolutionsPageData,
  tools: otherToolsPageData,
};
