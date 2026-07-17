// ==========================================
// 1. BANK SOAL DISC (24 NOMOR SOAL VALID)
// ==========================================
const discQuestions = [
  {
    id: 1,
    options: [
      { text: "Gampang bergaul, ramah, mudah berbicara", most: "I", least: "I" },
      { text: "Mempercayai orang, ramah, penuh hormat", most: "S", least: "S" },
      { text: "Penuh energi, suka petualangan, berani", most: "D", least: "D" },
      { text: "Tenang, terkendali, penuh pertimbangan", most: "C", least: "C" }
    ]
  },
  {
    id: 2,
    options: [
      { text: "Penuh teka-teki, tidak mudah ditebak", most: "C", least: "C" },
      { text: "Mudah mengalah, patuh, penuh kedamaian", most: "S", least: "S" },
      { text: "Penuh semangat, meyakinkan, optimis", most: "I", least: "I" },
      { text: "Tegas, dominan, suka memimpin", most: "D", least: "D" }
    ]
  },
  {
    id: 3,
    options: [
      { text: "Suka mengarahkan orang lain, berkemauan keras", most: "D", least: "D" },
      { text: "Suka menghibur, memotivasi, membawa keceriaan", most: "I", least: "I" },
      { text: "Suka menolong, sabar, penuh toleransi", most: "S", least: "S" },
      { text: "Sistematik, akurat, menyukai ketepatan data", most: "C", least: "C" }
    ]
  },
  {
    id: 4,
    options: [
      { text: "Terbuka pada kritik, analitis, objektif", most: "C", least: "C" },
      { text: "Mudah bersosialisasi, gembira, ramah", most: "I", least: "I" },
      { text: "Tenang, stabil, menghindari konflik", most: "S", least: "S" },
      { text: "Kompetitif, fokus pada hasil, gigih", most: "D", least: "D" }
    ]
  },
  {
    id: 5,
    options: [
      { text: "Berani mengambil risiko, mandiri", most: "D", least: "D" },
      { text: "Penuh humor, memikat perhatian, persuasif", most: "I", least: "I" },
      { text: "Penyabar, pendengar yang baik, suportif", most: "S", least: "S" },
      { text: "Sangat berhati-hati, logis, perfeksionis", most: "C", least: "C" }
    ]
  },
  {
    id: 6,
    options: [
      { text: "Menuntut kepatuhan, kompetitif, agresif", most: "D", least: "D" },
      { text: "Mudah bergaul, emosional, ekspresif", most: "I", least: "I" },
      { text: "Konsisten, dapat diandalkan, setia", most: "S", least: "S" },
      { text: "Disiplin, patuh pada aturan, formal", most: "C", least: "C" }
    ]
  },
  {
    id: 7,
    options: [
      { text: "Berorientasi pada detail, teliti", most: "C", least: "C" },
      { text: "Ramah, menyenangkan, komunikatif", most: "I", least: "I" },
      { text: "Tenang, santun, tidak suka menonjol", most: "S", least: "S" },
      { text: "Penuh dorongan diri, teguh pendirian", most: "D", least: "D" }
    ]
  },
  {
    id: 8,
    options: [
      { text: "Penuh keyakinan, mandiri, berani", most: "D", least: "D" },
      { text: "Suka bercerita, humoris, mempesona", most: "I", least: "I" },
      { text: "Mudah menerima, ramah, kooperatif", most: "S", least: "S" },
      { text: "Terstruktur, rapi, taat alur kerja", most: "C", least: "C" }
    ]
  },
  {
    id: 9,
    options: [
      { text: "Diplomatis, hati-hati, metodis", most: "C", least: "C" },
      { text: "Akomodatif, tulus, suka kedamaian", most: "S", least: "S" },
      { text: "Optimis, antusias, pandai bicara", most: "I", least: "I" },
      { text: "Cepat mengambil keputusan, berani", most: "D", least: "D" }
    ]
  },
  {
    id: 10,
    options: [
      { text: "Agresif, suka menantang, kompetitif", most: "D", least: "D" },
      { text: "Populer, karismatik, disukai banyak orang", most: "I", least: "I" },
      { text: "Sabar, bertahap, menghindari ketegangan", most: "S", least: "S" },
      { text: "Skeptis, berbasis fakta, teliti", most: "C", least: "C" }
    ]
  },
  {
    id: 11,
    options: [
      { text: "Mandiri, tegas, berorientasi tujuan", most: "D", least: "D" },
      { text: "Menarik, komunikatif, lincah", most: "I", least: "I" },
      { text: "Tenang, stabil, loyal terhadap tim", most: "S", least: "S" },
      { text: "Rapi, taat standar operasional", most: "C", least: "C" }
    ]
  },
  {
    id: 12,
    options: [
      { text: "Suka menganalisis, kritis", most: "C", least: "C" },
      { text: "Suka ketenangan, ramah, bersahabat", most: "S", least: "S" },
      { text: "Penuh gairah, ekspresif, ceria", most: "I", least: "I" },
      { text: "Berani memimpin, kompetitif", most: "D", least: "D" }
    ]
  },
  {
    id: 13,
    options: [
      { text: "Pemberani, suka mengatasi hambatan", most: "D", least: "D" },
      { text: "Penuh kehangatan, pandai bernegosiasi", most: "I", least: "I" },
      { text: "Penyabar, mudah beradaptasi, tenang", most: "S", least: "S" },
      { text: "Akurat, perfeksionis, taat prosedur", most: "C", least: "C" }
    ]
  },
  {
    id: 14,
    options: [
      { text: "Terorganisir, analitis, logis", most: "C", least: "C" },
      { text: "Kooperatif, ramah, suka membantu", most: "S", least: "S" },
      { text: "Suka meyakinkan orang lain, dinamis", most: "I", least: "I" },
      { text: "Tegas, tidak kenal takut, berkuasa", most: "D", least: "D" }
    ]
  },
  {
    id: 15,
    options: [
      { text: "Fokus pada gambaran besar, mandiri", most: "D", least: "D" },
      { text: "Suka memotivasi orang, ekspresif", most: "I", least: "I" },
      { text: "Stabil, penyabar, menyukai rutinitas", most: "S", least: "S" },
      { text: "Disiplin tinggi, teliti, taat hukum", most: "C", least: "C" }
    ]
  },
  {
    id: 16,
    options: [
      { text: "Diplomatis, hati-hati dalam bicara", most: "C", least: "C" },
      { text: "Mudah bergaul, aktif, ceria", most: "I", least: "I" },
      { text: "Penuh kedamaian, santun, tenang", most: "S", least: "S" },
      { text: "Suka menuntut, fokus kerja, dominan", most: "D", least: "D" }
    ]
  },
  {
    id: 17,
    options: [
      { text: "Suka mengendalikan situasi, tegas", most: "D", least: "D" },
      { text: "Penuh energi, menjadi pusat perhatian", most: "I", least: "I" },
      { text: "Suka mendukung rekan kerja, loyal", most: "S", least: "S" },
      { text: "Menyukai data dan angka, objektif", most: "C", least: "C" }
    ]
  },
  {
    id: 18,
    options: [
      { text: "Skeptis, waspada, analitis", most: "C", least: "C" },
      { text: "Mudah menerima keputusan, ramah", most: "S", least: "S" },
      { text: "Optimis, membawa keceriaan, supel", most: "I", least: "I" },
      { text: "Berani mengambil alih kepemimpinan", most: "D", least: "D" }
    ]
  },
  {
    id: 19,
    options: [
      { text: "Kompetitif, berambisi tinggi, gigih", most: "D", least: "D" },
      { text: "Persuasif, menarik, senang berbicara", most: "I", least: "I" },
      { text: "Penyabar, metodis, suka ketenangan", most: "S", least: "S" },
      { text: "Sangat teliti, taat aturan, presisi", most: "C", least: "C" }
    ]
  },
  {
    id: 20,
    options: [
      { text: "Penuh pertimbangan, kritis, logis", most: "C", least: "C" },
      { text: "Mudah berteman, ramah, terbuka", most: "I", least: "I" },
      { text: "Suka menolong, penuh harmoni, kalem", most: "S", least: "S" },
      { text: "Berani menghadapi tantangan berat", most: "D", least: "D" }
    ]
  },
  {
    id: 21,
    options: [
      { text: "Mandiri, fokus pada hasil akhir", most: "D", least: "D" },
      { text: "Suka memengaruhi orang lain, supel", most: "I", least: "I" },
      { text: "Penyabar, tidak suka terburu-buru", most: "S", least: "S" },
      { text: "Perfeksionis, mendalam, taktis", most: "C", least: "C" }
    ]
  },
  {
    id: 22,
    options: [
      { text: "Berorientasi fakta, terstruktur", most: "C", least: "C" },
      { text: "Penuh rasa damai, tulus, kooperatif", most: "S", least: "S" },
      { text: "Penuh antusiasme, ekspresif", most: "I", least: "I" },
      { text: "Tegas, langsung pada inti masalah", most: "D", least: "D" }
    ]
  },
  {
    id: 23,
    options: [
      { text: "Pengambil keputusan cepat, berani", most: "D", least: "D" },
      { text: "Suka berjejaring, humoris, aktif", most: "I", least: "I" },
      { text: "Tenang, stabil, menghindari debat", most: "S", least: "S" },
      { text: "Sistematik, berhati-hati, detail", most: "C", least: "C" }
    ]
  },
  {
    id: 24,
    options: [
      { text: "Analitis, kritis, penuh data", most: "C", least: "C" },
      { text: "Ramah, suka kedamaian, suportif", most: "S", least: "S" },
      { text: "Persuasif, ceria, gampang bergaul", most: "I", least: "I" },
      { text: "Dominan, berani mengambil risiko", most: "D", least: "D" }
    ]
  }
];

// ==========================================
// 2. BANK SOAL BIG FIVE (50 NOMOR SOAL VALID)
// ==========================================
const oceanQuestions = [
  // Openness (O) - 10 Soal
  { id: 1, text: "Saya memiliki imajinasi yang kaya dan aktif.", trait: "O" },
  { id: 2, text: "Saya sangat menghargai karya seni dan keindahan alam.", trait: "O" },
  { id: 3, text: "Saya cenderung mendalami perasaan dan emosi saya sendiri.", trait: "O" },
  { id: 4, text: "Saya suka mencoba aktivitas baru atau pergi ke tempat asing.", trait: "O" },
  { id: 5, text: "Saya sangat tertarik dengan ide-ide teoretis atau filosofis.", trait: "O" },
  { id: 6, text: "Saya memiliki kosakata yang luas dan senang mempelajari kata baru.", trait: "O" },
  { id: 7, text: "Saya bisa memahami konsep-konsep abstrak dengan cepat.", trait: "O" },
  { id: 8, text: "Saya menyukai tugas yang membutuhkan kreativitas dan inovasi.", trait: "O" },
  { id: 9, text: "Saya terbuka pada nilai-nilai dan gaya hidup yang tidak konvensional.", trait: "O" },
  { id: 10, text: "Saya sering memikirkan cara-cara baru dalam menyelesaikan masalah rutin.", trait: "O" },

  // Conscientiousness (C) - 10 Soal
  { id: 11, text: "Saya selalu mempersiapkan segala sesuatu dengan matang.", trait: "C" },
  { id: 12, text: "Saya sangat memperhatikan detail-detail kecil dalam pekerjaan.", trait: "C" },
  { id: 13, text: "Saya menyukai jadwal dan struktur kerja yang teratur.", trait: "C" },
  { id: 14, text: "Saya selalu menyelesaikan tugas yang menjadi tanggung jawab saya.", trait: "C" },
  { id: 15, text: "Saya sangat disiplin dan jarang menunda-nunda pekerjaan.", trait: "C" },
  { id: 16, text: "Saya selalu menepati janji yang sudah saya buat.", trait: "C" },
  { id: 17, text: "Saya menuntut standar kualitas yang tinggi pada hasil kerja saya.", trait: "C" },
  { id: 18, text: "Saya berpikir matang-matang sebelum mengambil tindakan penting.", trait: "C" },
  { id: 19, text: "Saya meletakkan barang-barang kembali ke tempat semula dengan rapi.", trait: "C" },
  { id: 20, text: "Saya fokus bekerja secara konsisten demi mencapai target jangka panjang.", trait: "C" },

  // Extraversion (E) - 10 Soal
  { id: 21, text: "Saya merasa nyaman dan berenergi saat berada di tengah keramaian.", trait: "E" },
  { id: 22, text: "Saya mudah memulai obrolan dengan orang yang baru dikenal.", trait: "E" },
  { id: 23, text: "Saya senang menjadi pusat perhatian dalam sebuah kelompok.", trait: "E" },
  { id: 24, text: "Saya cenderung banyak bicara saat menghadiri acara sosial.", trait: "E" },
  { id: 25, text: "Saya menyukai gaya hidup yang aktif, dinamis, dan padat kegiatan.", trait: "E" },
  { id: 26, text: "Saya tipe orang yang ceria, penuh gairah, dan bersemangat.", trait: "E" },
  { id: 27, text: "Saya mudah berteman dengan siapa saja.", trait: "E" },
  { id: 28, text: "Saya lebih suka bekerja dalam tim daripada sendirian.", trait: "E" },
  { id: 29, text: "Saya mengekspresikan emosi saya secara terbuka kepada orang lain.", trait: "E" },
  { id: 30, text: "Saya menikmati atmosfer pesta atau perkumpulan berskala besar.", trait: "E" },

  // Agreeableness (A) - 10 Soal
  { id: 31, text: "Saya mudah berempati dan tulus peduli pada perasaan orang lain.", trait: "A" },
  { id: 32, text: "Saya senang membantu orang lain tanpa mengharapkan pamrih.", trait: "A" },
  { id: 33, text: "Saya cenderung mempercayai kejujuran dan niat baik orang lain.", trait: "A" },
  { id: 34, text: "Saya memilih untuk mengalah demi menghindari konflik atau perdebatan.", trait: "A" },
  { id: 35, text: "Saya memperlakukan semua orang dengan penuh hormat dan kesopanan.", trait: "A" },
  { id: 36, text: "Saya mudah memaafkan kesalahan yang dilakukan orang lain.", trait: "A" },
  { id: 37, text: "Saya pandai bekerja sama dan menyelaraskan diri dalam kelompok.", trait: "A" },
  { id: 38, text: "Saya peka terhadap penderitaan atau kesusahan orang di sekitar saya.", trait: "A" },
  { id: 39, text: "Saya tipe orang yang jujur, tulus, dan apa adanya.", trait: "A" },
  { id: 40, text: "Saya percaya bahwa kolaborasi lebih penting daripada kompetisi.", trait: "A" },

  // Neuroticism (N) - 10 Soal
  { id: 41, text: "Saya mudah merasa stres atau cemas saat berada di bawah tekanan.", trait: "N" },
  { id: 42, text: "Suasana hati (mood) saya mudah berubah-ubah tanpa alasan jelas.", trait: "N" },
  { id: 43, text: "Saya sering mengkhawatirkan hal-hal buruk yang belum tentu terjadi.", trait: "N" },
  { id: 44, text: "Saya mudah merasa tersinggung atau terluka oleh kritikan.", trait: "N" },
  { id: 45, text: "Saya sering merasa kewalahan saat menghadapi kendala tak terduga.", trait: "N" },
  { id: 46, text: "Saya kesulitan menenangkan diri setelah mengalami kejadian menyebalkan.", trait: "N" },
  { id: 47, text: "Saya sering merasa tidak percaya diri dengan kemampuan saya sendiri.", trait: "N" },
  { id: 48, text: "Saya cenderung bereaksi secara emosional ketika situasi menjadi panik.", trait: "N" },
  { id: 49, text: "Saya sering merasa kesepian atau murung meskipun di tempat ramai.", trait: "N" },
  { id: 50, text: "Saya mudah merasa tertekan apabila ekspektasi tidak terpenuhi.", trait: "N" }
];
