import React from 'react';
import styles from 'styles/Login.module.css'

const Login = () => {
  return (
    <div className={styles.container_wrap}>
      <div class={styles.container}>
        <h2>로그인</h2>
        <form>
          <div class={styles.form_group}>
            <label for="username">아이디 : </label>
            <input type="text" id="username" placeholder="Enter your username" required />
          </div>
          <div class={styles.form_group}>
            <label for="password">비밀번호 : </label>
            <input type="password" id="password" placeholder="Enter your password" required />
          </div>
          <div class={styles.form_group}>
            <button type="submit">로그인</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;