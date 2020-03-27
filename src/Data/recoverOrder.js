import db from './config-firebase';

const recoverOrder = (state) => new Promise((resolve, reject) => {
  db.collection('orders')
    .where('estado', '==', state)
    .get()
    .then((querySnapshot) => {
      const orders = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        data.id = doc.id;
        orders.push(data);
      });
      resolve(orders);
    })
    .catch(() => {
      reject(new Error('No se han podido recuperar las ordenes'));
    });
});
export default recoverOrder;
