---
title: "Belajar Dasa Pemrograman"
date: "2023-09-20"
---

# Belajar Dasar Pemrograman Web

## Cara internet bekerja
Internet memberikan kemampuan pada user untuk mengirimkan permintaan dan menerima hasil permintaan (data) pada website. Hal ini terjadi karena komputer milik user terhubung dengan komputer lain yang biasa disebut dengan server. Kedua komputer ini berkomunikasi melalui sebuah jaringan, baik dengan kabel maupun nirkabel

## Halaman web
Halaman web merupakan halaman tunggal yang menampilkan informasi, baik berupa teks, gambar, maupun media lainnya. Tidak hanya media yang ditampilkan, halaman web yang dibangun dapat ditambahkan interaktifitas menggunakan kode (Javascript)

## Web server
### Siklus Request dan Response
Tahukah anda bahwa broser dapat menampilkan website dengan baik karena mendapatkan data dari komputer lain yang biasa di sebut sebaigai client atau dalam hal ini adalah browser yang melakukan permintaan data

Browser akan mengirimkan sesuatu bernama request pada server dan menerima data dalam sesuatu bernama response sebagai hasil tanggapan dari server. Data-data tersebut dapat berupa berkas HTML, CSS, Javascript, dan aset-aset lain yang dibutuhkan untuk menampilkan website

### Peranan web server
Berbicara mengenai web server, ia dapat terbagu menjadu dua hal, yaitu hardware dan software. Bukan berarti kedia hal tersebut bekerja secara terpisah tetapi saling melengkapi dan bekerja sama

Dari sisi hardware, web server merupakan komputer dengan spesifikasi yang disesuaikan berdasarkan layanannya. Contohnya, kapasitas hard drive yang besar akan dibutuhkan jika anda memiliki website yang menyimpan banyak gambar

Dari sisi software, web server merupakana komputer yang menjalankan sebuah program agar dapat melayani (menerima dan mengirim) data melalui jenis protokol bernama HTTP. ini merupakan protokol standar dalam melakukan transaksi data oleh browser.

## DNS server
Sebenarnya, nama domain tidak akan menggantikan peran dari IP address. Komputer tetap menggunakan alamat IP untuk mengakses website. Namun, bagaimana caranya nama domain dapat diterjemahkan menjadi alaman IP? Berikut jawabannya

Ketika user membuka website Dicoding menggunakan domain dicoding.com, browser akan menanyakan pada komputer, apakah ia mengenali dan dapat memberikan IP address-nya berdasarkan nama domain tersebut? Dia akan memeriksa bersadarkan DNS cache yang ada. Jika ada, browser akan diberikan alamat IP-nya dan menampilkan website yang diminta

Jika komputer tidak mengenali nama domain tersebut, dia akan menanyakan pada DNS server yang secara singkat bertugas untuk memberu tahu alamat IP yang sesuai dari nama domain yang terdaftar padanya. jika sudah, browser akan diberikan alamat IP-nya dan meneruskan permintaan konten halaman web ke web server

## Web browser
Web browser atau disingkat browser merupakan sebuah program yang menampilkan halaman web. Tidak hanya satu halaman web, tetapi banyak website yang aktif didunia ini dapat diakses oleh browser. Bahkan, halaman web yang saling terhubung dalam satu domain yang sama juga dapat diakses.

### Cara Browser Bekerja
Ketika User mengakses website dengan URL, browser akan membuat sebuah requiest yang akan dikirimkan ke web server. Kemudian, web server akan mengirimkan response berisi konten-konten yang dibutuhkan oleh website dan browser akan memprosesnya hingga tampil website pada perangkat user.

Browser memiliki address bar yang merupakan sebuah input bagi user untuk menuliskan alamat website atau biasa disebut dengan Uniform Resource Locator (URL). Ada tiga bagian pada URL, yaitu protocol (https), domain name (dicoding.com). dan file path (alamat halaman web yang sedang ditampilkan).

## Anatomi Website
Pada dasarnya, website dibangun dengan tiga buah fondasi utama:
- HTML: sebuah *markup language* yang menentukan struktur atau kerangka dari halaman web
- CSS: sebuah *markup language* yang memberikan gaya atau styling agar halaman web ditampilkan lebih ciamik; dan
- JavaScript: satu-satunya *programming language* yang didukung oleh browser untuk meningkatkan interkatifitas pada halaman web

Perlu ditekankan bahwa ketiga komponen tersebut termasuk hal vital dalam pembangunan web. Sebenarnya, kita bisa saja membangun halaman web tanpa css dan javascript. Namun, website akan terlihat tidak menarik dan membosankan
