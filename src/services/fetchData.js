import {
  getDocs,
  getDoc,
  doc,
  collection,
  query,
  where,
} from 'firebase/firestore';
import { db } from '../utils/firebaseConfig';

export const getProducts = async categoryName => {
  let q;

  if (categoryName) {
    q = query(
      collection(db, 'products'),
      where('categoryName', '==', categoryName)
    );
  } else {
    q = query(collection(db, 'products'));
  }

  const querySnapshot = await getDocs(q)
    .then(docs => docs)
    .catch(err => {
      throw new Error(err);
    });

  const products = querySnapshot.docs.map(item => ({
    id: item.id,
    ...item.data(),
  }));

  return products;
};

export const getProduct = async productId => {
  const querySnapshot = await getDoc(doc(db, 'products', productId))
    .then(prod => prod)
    .catch(err => {
      throw new Error(err);
    });

  const product = { id: querySnapshot.id, ...querySnapshot.data() };

  return product;
};
