

import styles from './header.module.css';
function Header(){
 return (
  <header className={styles.menu1}>
      <h3>SUPPORT</h3>  
      <nav>
      <a href="" >Дашборды </a>
      <a href="" >Вопросы</a>
      <button>Добавить вопрос </button>
      </nav>       
  </header>)

 
}
 
export  { Header }