import type { Recipe } from '../types/recipe';

export const INITIAL_RECIPES: Recipe[] = [
  {
    id: '1',
    title: 'Mixed Berry Melody',
    ingredients: [
      { id: 'i1', name: '1/4 cup black chia seeds' },
      { id: 'i2', name: '2 1/2 cups almond milk' },
      { id: 'i3', name: '2 oranges' },
      { id: 'i4', name: '1 1/2 cups wholemeal plain flour' },
      { id: 'i5', name: '2 teaspoons baking powder' },
      { id: 'i6', name: '1 cup fresh blueberries or frozen blueberries' },
    ],
    preparation:
      'Combine the chia seeds, almond milk and 1 tablespoon of the maple syrup in a large jug. Stand for 3-4 mins or until seeds swell. Meanwhile, finely grate 1 teaspoon rind from 1 orange. Cut the segments from both oranges (see Notes). Combine the flour, baking powder, orange rind and half the walnuts in a medium bowl. Whisk in the milk mixture until smooth. Stir in the blueberries.',
    reviews: 4,
    cookedBefore: true,
  },
  {
    id: '2',
    title: 'Thai red curry cauliflower soup',
    ingredients: [
      { id: 'i7', name: '1 head cauliflower, cut into florets' },
      { id: 'i8', name: '400ml coconut milk' },
      { id: 'i9', name: '2 tbsp red curry paste' },
      { id: 'i10', name: '1 onion, diced' },
      { id: 'i11', name: '2 cloves garlic, minced' },
      { id: 'i12', name: '1 tbsp vegetable oil' },
    ],
    preparation:
      'Heat oil in a large pot over medium heat. Add onion and garlic, cook until soft. Add curry paste and cook for 1 minute. Add cauliflower and coconut milk. Bring to boil, then simmer for 20 minutes until cauliflower is tender. Blend until smooth. Season with salt and pepper.',
    reviews: 3,
    cookedBefore: true,
  },
  {
    id: '3',
    title: 'Crispy spiced eggplant',
    ingredients: [
      { id: 'i13', name: '2 large eggplants, sliced' },
      { id: 'i14', name: '1 tsp ground cumin' },
      { id: 'i15', name: '1 tsp paprika' },
      { id: 'i16', name: '1/2 tsp cayenne pepper' },
      { id: 'i17', name: '3 tbsp olive oil' },
      { id: 'i18', name: 'Salt and pepper to taste' },
    ],
    preparation:
      'Preheat oven to 200°C. Arrange eggplant slices on baking sheet. Mix spices with olive oil and brush over eggplant. Season with salt and pepper. Bake for 25-30 minutes until crispy and golden.',
    reviews: 4,
    cookedBefore: true,
  },
  {
    id: '4',
    title: 'Pumpkin soup with a twist',
    ingredients: [
      { id: 'i19', name: '1 kg pumpkin, cubed' },
      { id: 'i20', name: '1 onion, diced' },
      { id: 'i21', name: '2 cloves garlic' },
      { id: 'i22', name: '500ml vegetable stock' },
      { id: 'i23', name: '1 tsp ginger, grated' },
      { id: 'i24', name: '2 tbsp coconut cream' },
    ],
    preparation:
      'Sauté onion and garlic until soft. Add pumpkin, ginger and stock. Simmer for 20 minutes until pumpkin is tender. Blend until smooth. Stir in coconut cream and season.',
    reviews: 4,
    cookedBefore: true,
  },
  {
    id: '5',
    title: 'Charred tofu, corn and asparagus salad',
    ingredients: [
      { id: 'i25', name: '300g firm tofu, cubed' },
      { id: 'i26', name: '2 ears corn, kernels removed' },
      { id: 'i27', name: '1 bunch asparagus, trimmed' },
      { id: 'i28', name: '3 tbsp soy sauce' },
      { id: 'i29', name: '2 tbsp sesame oil' },
      { id: 'i30', name: '1 lime, juiced' },
    ],
    preparation:
      'Heat a grill pan over high heat. Grill tofu, corn and asparagus until charred. Mix soy sauce, sesame oil and lime juice for dressing. Toss everything together and serve warm.',
    reviews: 4,
    cookedBefore: true,
  },
  {
    id: '6',
    title: 'One-pan creamy pesto chicken & gnocchi',
    ingredients: [
      { id: 'i31', name: '500g chicken breast, cubed' },
      { id: 'i32', name: '500g gnocchi' },
      { id: 'i33', name: '3 tbsp pesto' },
      { id: 'i34', name: '200ml heavy cream' },
      { id: 'i35', name: '1 cup cherry tomatoes' },
      { id: 'i36', name: '50g parmesan cheese' },
    ],
    preparation:
      'Cook chicken in large pan until golden. Add gnocchi and cook for 3 minutes. Add pesto, cream and tomatoes. Simmer for 5 minutes until gnocchi is tender. Top with parmesan.',
    reviews: 4,
    cookedBefore: true,
  },
  {
    id: '7',
    title: 'Creamy chicken bake',
    ingredients: [
      { id: 'i37', name: '6 chicken thighs' },
      { id: 'i38', name: '300ml cream' },
      { id: 'i39', name: '200g mushrooms, sliced' },
      { id: 'i40', name: '1 onion, sliced' },
      { id: 'i41', name: '2 cloves garlic' },
      { id: 'i42', name: '1 tsp thyme' },
    ],
    preparation:
      'Season chicken and brown in pan. Remove and set aside. Sauté mushrooms, onion and garlic. Add cream and thyme. Return chicken to pan and bake at 180°C for 25 minutes.',
    reviews: 4,
    cookedBefore: false,
  },
  {
    id: '8',
    title: 'French-style chicken and potatoes',
    ingredients: [
      { id: 'i43', name: '1 whole chicken, cut into pieces' },
      { id: 'i44', name: '1kg potatoes, quartered' },
      { id: 'i45', name: '4 cloves garlic' },
      { id: 'i46', name: '2 tbsp olive oil' },
      { id: 'i47', name: '1 tsp rosemary' },
      { id: 'i48', name: 'Salt and pepper' },
    ],
    preparation:
      'Preheat oven to 200°C. Toss chicken and potatoes with oil, garlic, rosemary, salt and pepper. Roast for 45 minutes until chicken is golden and potatoes are tender.',
    reviews: 4,
    cookedBefore: false,
  },
  {
    id: '9',
    title: 'Braised beef and vegetables',
    ingredients: [
      { id: 'i49', name: '1kg beef chuck, cubed' },
      { id: 'i50', name: '3 carrots, chopped' },
      { id: 'i51', name: '2 onions, quartered' },
      { id: 'i52', name: '3 celery stalks' },
      { id: 'i53', name: '500ml beef stock' },
      { id: 'i54', name: '2 tbsp tomato paste' },
    ],
    preparation:
      'Brown beef in batches and set aside. Sauté vegetables until soft. Add beef back with stock and tomato paste. Simmer for 2 hours until beef is tender.',
    reviews: 4,
    cookedBefore: true,
  },
  {
    id: '10',
    title: 'Pumpkin, spinach and lentil lasagne',
    ingredients: [
      { id: 'i55', name: '500g pumpkin, roasted and mashed' },
      { id: 'i56', name: '200g spinach' },
      { id: 'i57', name: '1 cup red lentils, cooked' },
      { id: 'i58', name: '12 lasagne sheets' },
      { id: 'i59', name: '300ml bechamel sauce' },
      { id: 'i60', name: '100g cheese, grated' },
    ],
    preparation:
      'Mix pumpkin with lentils and spinach. Layer with lasagne sheets and bechamel. Top with cheese and bake at 180°C for 45 minutes until golden.',
    reviews: 4,
    cookedBefore: true,
  },
  {
    id: '11',
    title: 'Soothing chicken soup',
    ingredients: [
      { id: 'i61', name: '1 chicken carcass' },
      { id: 'i62', name: '2 carrots, diced' },
      { id: 'i63', name: '2 celery stalks, diced' },
      { id: 'i64', name: '1 onion, diced' },
      { id: 'i65', name: '100g egg noodles' },
      { id: 'i66', name: 'Salt and pepper' },
    ],
    preparation:
      'Simmer chicken carcass for 2 hours to make stock. Strain and add vegetables. Simmer for 20 minutes. Add noodles and cook for 8 minutes. Season and serve.',
    reviews: 4,
    cookedBefore: true,
  },
  {
    id: '12',
    title: 'Cornflake-crumbed chicken with wedges',
    ingredients: [
      { id: 'i67', name: '4 chicken breasts' },
      { id: 'i68', name: '2 cups cornflakes, crushed' },
      { id: 'i69', name: '2 eggs, beaten' },
      { id: 'i70', name: '4 potatoes, cut into wedges' },
      { id: 'i71', name: '2 tbsp olive oil' },
      { id: 'i72', name: '1 tsp paprika' },
    ],
    preparation:
      'Dip chicken in egg then cornflakes. Bake at 200°C for 25 minutes. Toss potato wedges with oil and paprika. Bake for 30 minutes until crispy.',
    reviews: 4,
    cookedBefore: true,
  },
];
