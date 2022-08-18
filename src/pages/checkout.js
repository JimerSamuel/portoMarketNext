import React from 'react';
import Image from 'next/image';
import OrderItem from 'components/OrderItem';
import styles from '@styles/Checkout.module.scss';

const order = () => {
  return (
    <div className={styles.OrderItem}>
      <figure>
        <Image src={product?.images[0]} alt={product?.title} width={70} height={70} />
      </figure>
      <p>{product?.title}</p>
      <p>${product?.price}</p>
      <Image src={close} alt="close" onClick={() => handleRemove(product)} width={15} height={15} />
    </div>
  );
};

const Checkout = () => {
  return (
    <div className={styles.Checkout}>
      <div className={styles['Checkout-container']}>
        <h1 className={styles.title}>My order</h1>
        <div className={styles['Checkout-content']}>
          <div className={styles.order}>
            <p>
              <span>03.25.21</span>
              <span>6 articles</span>
            </p>
            <p>$560.00</p>
          </div>
        </div>
        <OrderItem product={order} />
      </div>
    </div>
  );
};

export default Checkout;
