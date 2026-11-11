import { initializeApp } from 'firebase/app';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { INITIAL_RECIPES } from '../src/data/recipes';

const db = getFirestore(
  initializeApp({
    apiKey: process.env.VITE_FIREBASE_API_KEY,
    authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.VITE_FIREBASE_APP_ID,
  }),
);

async function migrateInitialData() {
  try {
    console.log('Starting data migration...');

    for (const recipe of INITIAL_RECIPES) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { id, ...recipeData } = recipe;
      await addDoc(collection(db, 'recipes'), recipeData);
      console.log(`Migrated data: ${recipe.title}`);
    }

    console.log('Data migration completed successfully.');
  } catch (error) {
    console.error('Error  running migration:', error);
  }
}

migrateInitialData();
