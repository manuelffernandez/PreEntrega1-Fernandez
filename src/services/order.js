import {
  doc,
  collection,
  setDoc,
  updateDoc,
  increment,
} from 'firebase/firestore';
import { db } from '../utils/firebaseConfig';

export const postOrder = async order => {
  const newOrderRef = doc(collection(db, 'orders'));
  await setDoc(newOrderRef, order)
    .then(res => res)
    .catch(err => {
      throw new Error(err);
    });

  return newOrderRef;
};

export const updateDb = async cartList => {
  cartList.forEach(async item => {
    const itemRef = doc(db, 'products', item.id);
    await updateDoc(itemRef, {
      stock: increment(-item.amount),
    })
      .then(result => result)
      .catch(err => {
        throw new Error(err);
      });
  });
};
