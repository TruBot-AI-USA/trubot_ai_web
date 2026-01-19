export interface PlatformType {
  name: string;
  feature: string;
  icon?: React.ReactNode;
}

export interface ProductPageDataType {
  id: string;
  title: string;
  description: string;
  platforms: PlatformType[];
  steps: string[];
  industries: string[];
}
