import { addDoc, collection } from 'firebase/firestore';
import { db } from '../utils/firebaseConfig';
import { products } from '../utils/products';

export const migrateProducts = () => {
  products.forEach(async prod => {
    await addDoc(collection(db, 'products'), prod)
      .then(doc => console.log('Document written with ID: ', doc.id))
      .catch(err => {
        console.error('There was an error!', err);
      });
  });
};

const migrateData = async () => {
  await migrateProducts();
};

export default migrateData;
