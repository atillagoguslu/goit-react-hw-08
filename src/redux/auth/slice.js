/*auth Slice Operasyonları

redux/auth/operations.js dosyasına, createAsyncThunk kullanarak kullanıcıyla ilgili işlemleri ekleyin:

register - Yeni bir kullanıcı kaydı için. Temel action tipi "auth/register". RegistrationForm bileşeninde, kayıt sayfasında kullanılır.
login - Mevcut bir kullanıcı için giriş yapma. Temel action tipi "auth/login". LoginForm bileşeninde, giriş sayfasında kullanılır.
logout - Uygulamadan çıkış yapma. Temel action tipi "auth/logout". Uygulamanın üst kısmındaki UserMenubileşeninde kullanılır.
refreshUser - Token ile kullanıcıyı yenileme. Temel action tipi "auth/refresh". App bileşeninin montajı sırasında kullanılır.


Yetkili kullanıcının tokeni persist kütüphanesi yardımıyla yerel depolamada saklanmalıdır. */

{
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
}
