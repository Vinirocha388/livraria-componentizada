import styles from './shop.module.css';

const newReleases = [
    {
      id: 5,
      title: "A Linguagem Secreta",
      author: "Carla Prado",
      price: 42.9,
      coverImage:
        "https://via.placeholder.com/150x200/9b59b6/ffffff?text=Linguagem",
      rating: 4.0,
      tags: ["Suspense", "Linguística"],
    },
    {
      id: 6,
      title: "Revolução Digital",
      author: "Pedro Almeida",
      price: 59.9,
      coverImage:
        "https://via.placeholder.com/150x200/1abc9c/ffffff?text=Revolução",
      rating: 4.6,
      tags: ["Não-Ficção", "Tecnologia"],
    },
    {
      id: 7,
      title: "Fronteiras do Pensamento",
      author: "Sofia Torres",
      price: 37.9,
      coverImage:
        "https://via.placeholder.com/150x200/d35400/ffffff?text=Fronteiras",
      rating: 4.3,
      tags: ["Filosofia", "Psicologia"],
    },
  ];

const ShopCart = () => {
    return(
        <div className={styles.shoppingCart}>
        <div className={styles.cartHeader}>
          <h3 className={styles.cartHeaderTitle}>Seu Carrinho</h3>
          <button className={styles.closeButton}>✕</button>
        </div>

        <div className={styles.cartItems}>
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div key={item.id} className={styles.cartItem}>
                <div className={styles.itemInfo}>
                  <h4 className={styles.itemTitle}>{item.title}</h4>
                  <div className={styles.itemDetails}>
                    <span className={styles.itemQuantity}>
                      Qtd: {item.quantity}
                    </span>
                    <span className={styles.itemPrice}>
                      R$ {item.price.toFixed(2)}
                    </span>
                  </div>
                </div>
                <button className={styles.removeButton}>✕</button>
              </div>
            ))
          ) : (
            <p className={styles.emptyCartMessage}>Seu carrinho está vazio</p>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className={styles.cartFooter}>
            <div className={styles.cartTotal}>
              <span className={styles.totalLabel}>Total:</span>
              <span className={styles.totalValue}>
                R$ {calculateTotal().toFixed(2)}
              </span>
            </div>
            <button className={styles.checkoutButton}>Finalizar Compra</button>
          </div>
        )}
      </div>
    )
}

export default ShopCart;