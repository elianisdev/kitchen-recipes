export interface Ingredient {
  id: string;
  name: string;
}

export interface Recipe {
  id: string;
  title: string;
  ingredients: Ingredient[];
  preparation: string;
  reviews: number;
  cookedBefore: boolean;
}

export interface RecipeFormData {
  title: string;
  ingredients: Ingredient[];
  preparation: string;
  reviews: number;
  cookedBefore: boolean;
}

export type FilterCooked = 'all' | 'true' | 'false';
export type AsideMode = 'NEW' | 'DETAIL' | 'EDIT';
