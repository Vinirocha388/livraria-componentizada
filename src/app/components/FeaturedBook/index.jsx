import styles from './featuredBook.module.css';

const FeaturedBook = () => {

    const featuredBooks = [
        {
          id: 1,
          title: "O Algoritmo da Imaginação",
          author: "Ana Luz Santos",
          price: 49.9,
          coverImage:
            "https://m.media-amazon.com/images/I/81R10VrmpZL._UF894,1000_QL80_.jpg",
          rating: 4.5,
          tags: ["Ficção Científica", "Tecnologia"],
        },
        {
          id: 2,
          title: "Conexões Invisíveis",
          author: "Marcos Silva",
          price: 39.9,
          coverImage:
            "https://m.media-amazon.com/images/I/71281wQs1+L._UF894,1000_QL80_.jpg",
          rating: 4.8,
          tags: ["Romance", "Tecnologia"],
        },
        {
          id: 3,
          title: "Além do Código",
          author: "Julia Mendes",
          price: 55.9,
          coverImage:
            "https://growthcode.com.br/wp-content/uploads/2024/03/Copia-de-A5-Livro-Alem-do-Codigo.jpg",
          rating: 4.2,
          tags: ["Biografia", "Programação"],
        },
        {
          id: 4,
          title: "Universos Paralelos",
          author: "Lucas Costa",
          price: 47.9,
          coverImage:
            "https://m.media-amazon.com/images/I/71sFQoBmDsL._UF894,1000_QL80_.jpg",
          rating: 4.7,
          tags: ["Ficção Científica", "Filosofia"],
        },
      ];    
 // Função para renderizar estrelas com base na avaliação
 const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span key={`star-${i}`} className={styles.star}>
          ★
        </span>
      );
    }

    if (hasHalfStar) {
      stars.push(
        <span key="half-star" className={styles.starHalf}>
          ★
        </span>
      );
    }

    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <span key={`empty-star-${i}`} className={styles.starEmpty}>
          ☆
        </span>
      );
    }

    return stars;
  };


    return (
      <section className={styles.bookSection}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionHeading}>Destaques da Semana</h2>
        <a href="/destaques" className={styles.viewAll}>
          Ver todos
        </a>
      </div>

      <div className={styles.booksGrid}>
        {featuredBooks.map((book) => (
          <div key={book.id} className={styles.bookCard}>
            <div className={styles.bookCover}>
              <img
                src={book.coverImage}
                alt={book.title}
                className={styles.coverImage}
              />
              <button className={styles.quickViewButton}>Visualizar</button>
            </div>
            <div className={styles.bookInfo}>
              <h3 className={styles.bookTitle}>{book.title}</h3>
              <p className={styles.bookAuthor}>por {book.author}</p>
              <div className={styles.bookRating}>
                {renderStars(book.rating)}
                <span className={styles.ratingValue}>({book.rating})</span>
              </div>
              <div className={styles.bookTags}>
                {book.tags.map((tag, index) => (
                  <span key={index} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
              <div className={styles.bookPriceActions}>
                <span className={styles.bookPrice}>
                  R$ {book.price.toFixed(2)}
                </span>
                <div className={styles.bookActions}>
                  <button className={styles.iconButton}>❤️</button>
                  <button className={styles.iconButton}>🛒</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
    )
}

export default FeaturedBook;