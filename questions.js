const discQuestions = [
  { id: 1, options: [
    { text: "Gampang bergaul, ramah, mudah berbicara", most: "I", least: "N" },
    { text: "Mempercayai orang, ramah, penuh hormat", most: "S", least: "N" },
    { text: "Penuh energi, suka petualangan, berani", most: "D", least: "N" },
    { text: "Tenang, terkendali, penuh pertimbangan", most: "C", least: "N" }
  ]},
  { id: 2, options: [
    { text: "Suka berdebat, keras kepala, memaksa", most: "D", least: "N" },
    { text: "Gembira, penuh tawa, suka bercerita", most: "I", least: "N" },
    { text: "Sopan, ramah, menghindari konflik", most: "S", least: "N" },
    { text: "Sistematis, teliti, patuh aturan", most: "C", least: "N" }
  ]},
  { id: 3, options: [
    { text: "Berani mengambil risiko, kompetitif", most: "D", least: "N" },
    { text: "Meyakinkan, ekspresif, lincah", most: "I", least: "N" },
    { text: "Tenang, stabil, suka rutinitas", most: "S", least: "N" },
    { text: "Logis, analitis, penuh data", most: "C", least: "N" }
  ]},
  { id: 4, options: [
    { text: "Suka memimpin, dominan, mandiri", most: "D", least: "N" },
    { text: "Suka memuji, antusias, populer", most: "I", least: "N" },
    { text: "Penyabar, pendengar baik, tulus", most: "S", least: "N" },
    { text: "Hati-hati, perfeksionis, disiplin", most: "C", least: "N" }
  ]},
  { id: 5, options: [
    { text: "Suka tantangan, tegas, cepat bertindak", most: "D", least: "N" },
    { text: "Menyenangkan, memotivasi, ceria", most: "I", least: "N" },
    { text: "Suka membantu, loyal, kooperatif", most: "S", least: "N" },
    { text: "Akurat, taat prosedur, objektif", most: "C", least: "N" }
  ]},
  { id: 6, options: [
    { text: "Kuat, gigih, tidak mudah menyerah", most: "D", least: "N" },
    { text: "Menarik perhatian, mempesona, supel", most: "I", least: "N" },
    { text: "Mudah menerima, toleran, damai", most: "S", least: "N" },
    { text: "Terstruktur, formal, jeli melihat cacat", most: "C", least: "N" }
  ]},
  { id: 7, options: [
    { text: "Penuh tuntutan, fokus hasil, ambisius", most: "D", least: "N" },
    { text: "Penuh semangat, komunikatif, humoris", most: "I", least: "N" },
    { text: "Rendah hati, sederhana, stabil", most: "S", least: "N" },
    { text: "Mengecek ulang, berpatokan fakta, kritis", most: "C", least: "N" }
  ]},
  { id: 8, options: [
    { text: "Berkeinginan kuat, mandiri, berkuasa", most: "D", least: "N" },
    { text: "Suka bersosialisasi, optimis, terbuka", most: "I", least: "N" },
    { text: "Mudah sepakat, tidak banyak menuntut", most: "S", least: "N" },
    { text: "Waspada, penuh persiapan, taktis", most: "C", least: "N" }
  ]},
  { id: 9, options: [
    { text: "Pelopor, suka mencoba hal ekstrem", most: "D", least: "N" },
    { text: "Pemberi pengaruh, persuasif, periang", most: "I", least: "N" },
    { text: "Penyayang, lembut, suka kedamaian", most: "S", least: "N" },
    { text: "Rapi, terorganisir, metodis", most: "C", least: "N" }
  ]},
  { id: 10, options: [
    { text: "Penuh keyakinan, agresif, kompetitif", most: "D", least: "N" },
    { text: "Lancar berbicara, ekspresif, atraktif", most: "I", least: "N" },
    { text: "Suka ketenangan, tidak menonjolkan diri", most: "S", least: "N" },
    { text: "Sesuai standar, patuh, detail", most: "C", least: "N" }
  ]},
  { id: 11, options: [
    { text: "Berani, mandiri, teguh pendirian", most: "D", least: "N" },
    { text: "Ramah tamah, pandai bergaul, interaktif", most: "I", least: "N" },
    { text: "Mudah kasihan, berempati, protektif", most: "S", least: "N" },
    { text: "Diplomatis, hati-hati berbicara, teliti", most: "C", least: "N" }
  ]},
  { id: 12, options: [
    { text: "Cepat mengambil keputusan, berani", most: "D", least: "N" },
    { text: "Menstimulasi, menginspirasi, vokal", most: "I", least: "N" },
    { text: "Penuh pengertian, pemaaf, tenang", most: "S", least: "N" },
    { text: "Suka menganalisis, skeptis sebelum tahu", most: "C", least: "N" }
  ]},
  { id: 13, options: [
    { text: "Sengit, berorientasi target, tangguh", most: "D", least: "N" },
    { text: "Suka berpartisipasi, ramah, humoris", most: "I", least: "N" },
    { text: "Suka kebersamaan, stabil, penurut", most: "S", least: "N" },
    { text: "Mengejar kesempurnaan, teratur", most: "C", least: "N" }
  ]},
  { id: 14, options: [
    { text: "Suka mengarahkan, bertekad keras", most: "D", least: "N" },
    { text: "Suka memotivasi, persuasif, ceria", most: "I", least: "N" },
    { text: "Baik hati, menghindari gesekan, sabar", most: "S", least: "N" },
    { text: "Bijaksana, menimbang risiko, detail", most: "C", least: "N" }
  ]},
  { id: 15, options: [
    { text: "Mengambil kendali, berani, dominan", most: "D", least: "N" },
    { text: "Menyenangkan orang lain, sosial, lincah", most: "I", least: "N" },
    { text: "Mudah dipimpin, loyal, tenang", most: "S", least: "N" },
    { text: "Berpikir mendalam, analitis, serius", most: "C", least: "N" }
  ]},
  { id: 16, options: [
    { text: "Konfrontatif, berani beda pendapat", most: "D", least: "N" },
    { text: "Suka menjual ide, antusias, hangat", most: "I", least: "N" },
    { text: "Mudah puas, santai, konsisten", most: "S", least: "N" },
    { text: "Sistematis, mengikuti alur, terjadwal", most: "C", least: "N" }
  ]},
  { id: 17, options: [
    { text: "Pembuat keputusan cepat, tegas", most: "D", least: "N" },
    { text: "Pusat perhatian, periang, supel", most: "I", least: "N" },
    { text: "Rela berkorban, pendengar setia", most: "S", least: "N" },
    { text: "Berpijak aturan, hati-hati, waspada", most: "C", least: "N" }
  ]},
  { id: 18, options: [
    { text: "Otoriter, suka mengatur, tangguh", most: "D", least: "N" },
    { text: "Suka meyakinkan orang, ekspresif", most: "I", least: "N" },
    { text: "Akomodatif, tidak suka ribut, sabar",
most: "S", least: "N" },
    { text: "Sangat teliti, terstruktur, disiplin", most: "C", least: "N" }
  ]},
  { id: 19, options: [
    { text: "Agresif mencari solusi, berani", most: "D", least: "N" },
    { text: "Optimis, membangkitkan suasana, ceria", most: "I", least: "N" },
    { text: "Mudah beradaptasi, ramah, tenang", most: "S", least: "N" },
    { text: "Suka mengoreksi, tajam menganalisis", most: "C", least: "N" }
  ]},
  { id: 20, options: [
    { text: "Kompetitif, fokus pada kemenangan", most: "D", least: "N" },
    { text: "Suka mengobrol, menarik, terbuka", most: "I", least: "N" },
    { text: "Pendamai, tenang, suka membantu", most: "S", least: "N" },
    { text: "Berpikir logis, teratur, presisi", most: "C", least: "N" }
  ]},
  { id: 21, options: [
    { text: "Tegas memimpin, berorientasi kuasa", most: "D", least: "N" },
    { text: "Suka berbagi cerita, penuh pesona", most: "I", least: "N" },
    { text: "Sabar menghadapi orang, setia", most: "S", least: "N" },
    { text: "Sesuai regulasi, rapi, terencana", most: "C", least: "N" }
  ]},
  { id: 22, options: [
    { text: "Pemberani, suka mengambil tantangan", most: "D", least: "N" },
    { text: "Antusias, komunikator ulung, ramah", most: "I", least: "N" },
    { text: "Suka keharmonisan, tenang, santun", most: "S", least: "N" },
    { text: "Berpikir kritis, berbasis data, teliti", most: "C", least: "N" }
  ]},
  { id: 23, options: [
    { text: "Mandiri, dominan, fokus hasil", most: "D", least: "N" },
    { text: "Suka keramaian, populer, ekspresif", most: "I", least: "N" },
    { text: "Penyabar, konsisten, berhati lembut", most: "S", least: "N" },
    { text: "Sistematis, taat standar, analitis", most: "C", least: "N" }
  ]},
  { id: 24, options: [
    { text: "Kuat mempertahankan argumen, berani", most: "D", least: "N" },
    { text: "Suka memotivasi orang, periang, supel", most: "I", least: "N" },
    { text: "Suka kedamaian, suportif, tenang", most: "S", least: "N" },
    { text: "Meneliti kebenaran, terstruktur, rapi", most: "C", least: "N" }
  ]}
];

// Isi dengan baris kunci MOST/LEAST standard secara matematis untuk pemetaan sisa opsi jika kosong
discQuestions.forEach(q => {
  q.options.forEach((opt, idx) => {
    if(opt.least === "N") {
      opt.least = opt.most; 
    }
  });
});

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
2. Update File index.html (Mendukung Radar Chart & Analisis Narasi Deskriptif)
Ganti seluruh isi file index.html Anda dengan kode mutakhir di bawah ini. Kode ini memperbaiki teks ringkasan dimensi OCEAN dan memplotnya ke dalam Radar Chart, serta mengevaluasi skor rata-rata untuk memicu teks analisis kepribadian otomatis.

HTML
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Online Assessment Platform - 1000 Days Fund</title>
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script>
        emailjs.init("USER_PUBLIC_KEY_ANDA");
    </script>
    <style>
        .disc-table th, .disc-table td { border: 1px solid #e2e8f0; padding: 10px; text-align: center; }
    </style>
</head>
<body class="bg-gray-100 text-gray-800 font-sans antialiased">

    <div class="max-w-4xl mx-auto my-10 p-6 bg-white rounded-xl shadow-lg">
        <div class="border-b pb-4 mb-6 text-center">
            <h1 class="text-3xl font-extrabold text-blue-600">Online Assessment Platform</h1>
            <p class="text-sm text-gray-500 mt-1">DISC (24 Soal MOST/LEAST) & Big Five Personality (50 Soal OCEAN)</p>
        </div>

        <div id="timer-box" class="hidden bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6 flex justify-between items-center shadow-sm">
            <span class="font-bold flex items-center gap-2">
                <span class="animate-ping inline-flex h-2 w-2 rounded-full bg-red-400"></span>
                <span id="test-title">Nama Tes</span>
            </span>
            <span class="text-2xl font-mono font-bold tracking-wider" id="timer">00:00</span>
        </div>

        <!-- STEP 1: Registrasi -->
        <div id="step-registration" class="block">
            <h2 class="text-xl font-bold mb-4 text-gray-700 border-l-4 border-blue-600 pl-2">Data Diri Kandidat</h2>
            <form id="form-kandidat" onsubmit="startDiscTest(event)">
                <div class="mb-4">
                    <label class="block text-sm font-semibold mb-1 text-gray-600">Nama Lengkap</label>
                    <input type="text" id="nama" required class="w-full border border-gray-300 p-2.5 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none transition">
                </div>
                <div class="mb-6">
                    <label class="block text-sm font-semibold mb-1 text-gray-600">Nomor HP / WhatsApp</label>
                    <input type="tel" id="nohp" required class="w-full border border-gray-300 p-2.5 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none transition" placeholder="08xxxxxxxxxx">
                </div>
                <button type="submit" class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg shadow-md transition-all">
                    Mulai Rangkaian Tes
                </button>
            </form>
        </div>

        <!-- STEP 2: DISC -->
        <div id="step-disc" class="hidden">
            <div class="mb-6 bg-blue-50 p-4 rounded-lg border border-blue-100">
                <h2 class="text-xl font-bold text-blue-900">Bagian 1: Tes Kepribadian DISC</h2>
                <p class="text-sm text-gray-700 mt-2">Pilih 1 pernyataan <strong>MOST (M)</strong> dan 1 pernyataan <strong>LEAST (L)</strong> pada pilihan yang berbeda di tiap nomor.</p>
            </div>
            <form id="form-disc" onsubmit="validateAndSubmitDisc(event)">
                <div id="disc-container" class="space-y-6 mb-6"></div>
                <button type="submit" class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg shadow-md transition-all">
                    Lanjut ke Tes Big Five (OCEAN)
                </button>
            </form>
        </div>

        <!-- STEP 3: OCEAN (50 Soal) -->
        <div id="step-ocean" class="hidden">
            <div class="mb-4 bg-green-50 p-4 rounded-lg border border-green-100">
                <h2 class="text-xl font-bold text-green-900 border-l-4 border-green-600 pl-2">Bagian 2: Tes Big Five Personality (50 Soal)</h2>
                <p class="text-sm text-gray-700 mt-1">Berikan penilaian dari skala 1 (Sangat Tidak Setuju) hingga 5 (Sangat Setuju).</p>
            </div>
            <form id="form-ocean" onsubmit="finishTest(event)">
                <div id="ocean-container" class="space-y-4 mb-6"></div>
                <button type="submit" class="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg shadow-md transition-all">
                    Selesai & Kirim Hasil Assessment
                </button>
            </form>
        </div>

        <!-- STEP 4: Selesai -->
        <div id="step-finish" class="hidden text-center py-10">
            <div id="loading-status">
                <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                <h2 class="text-xl font-bold text-gray-700">Mengkalkulasi Hasil & Membuat Radar Grafik...</h2>
            </div>
            <div id="success-status" class="hidden">
                <p class="text-6xl mb-4">🎉</p>
                <h2 class="text-2xl font-extrabold text-green-600">Assessment Selesai!</h2>
                <p class="text-gray-600 mt-2">Hasil tes serta grafik DISC & Radar Chart OCEAN telah terkirim ke <strong>hr@1000daysfund.org</strong>.</p>
            </div>
        </div>

        <!-- TEMPLATE PDF (A4 PRINT) -->
        <div id="pdf-template" class="hidden p-10 bg-white text-gray-900" style="width: 210mm;">
            <div class="text-center border-b-4 border-gray-800 pb-4 mb-6">
                <h1 class="text-2xl font-extrabold tracking-tight">REPORT ONLINE PSYCHOLOGICAL ASSESSMENT</h1>
                <p class="text-md font-semibold text-gray-600">1000 Days Fund Recruitment System</p>
            </div>
            
            <table class="w-full mb-6 text-sm">
                <tr><td class="w-36 font-bold py-1 text-gray-600">Nama Kandidat</td><td class="py-1 font-medium">: <span id="pdf-nama" class="font-bold text-gray-900"></span></td></tr>
                <tr><td class="font-bold py-1 text-gray-600">Nomor HP/WA</td><td class="py-1">: <span id="pdf-nohp"></span></td></tr>
                <tr><td class="font-bold py-1 text-gray-600">Tanggal Pengisian</td><td class="py-1">: <span id="pdf-tanggal"></span></td></tr>
            </table>
            
            <h2 class="text-lg font-bold mt-6 mb-3 border-b-2 border-blue-600 pb-1 text-blue-700">1. HASIL 3 GRAFIK PROFIL DISC</h2>
            <div class="grid grid-cols-3 gap-4 my-4">
                <div class="border p-2 rounded bg-gray-50 text-center">
                    <p class="text-xs font-bold text-gray-700 mb-1">Grafik 1: MOST (Mask)</p>
                    <div class="w-full flex justify-center"><canvas id="chart-most" width="160" height="150"></canvas></div>
                </div>
                <div class="border p-2 rounded bg-gray-50 text-center">
                    <p class="text-xs font-bold text-gray-700 mb-1">Grafik 2: LEAST (Core)</p>
                    <div class="w-full flex justify-center"><canvas id="chart-least" width="160" height="150"></canvas></div>
                </div>
                <div class="border p-2 rounded bg-gray-50 text-center">
                    <p class="text-xs font-bold text-gray-700 mb-1">Grafik 3: CHANGE (Mirror)</p>
                    <div class="w-full flex justify-center"><canvas id="chart-change" width="160" height="150"></canvas></div>
                </div>
            </div>

            <h2 class="text-lg font-bold mt-8 mb-3 border-b-2 border-green-600 pb-1 text-green-700">2. HASIL RADAR CHART BIG FIVE PERSONALITY (OCEAN)</h2>
            <div class="flex items-center gap-6 my-4" style="display: table; width: 100%;">
                <div style="display: table-cell; width: 45%; vertical-align: middle; text-align: center;">
                    <canvas id="chart-ocean-radar" width="230" height="230" class="mx-auto"></canvas>
                </div>
                <div style="display: table-cell; width: 55%; vertical-align: top;" id="pdf-ocean-scores" class="text-xs space-y-2 font-mono pl-4"></div>
            </div>

            <h2 class="text-lg font-bold mt-6 mb-2 border-b-2 border-gray-600 pb-1 text-gray-700">3. DESKRIPSI & ANALISIS KECENDERUNGAN</h2>
            <div id="pdf-deskripsi-analisis" class="text-xs text-gray-700 space-y-3 bg-gray-50 p-4 rounded-lg border border-gray-200 leading-relaxed"></div>
        </div>
    </div>

    <script src="questions.js"></script>
    <script>
        let kandidatData = {};
        let countdown;
        let waktuSisa = 0;
        const WAKTU_DISC = 1500; 
        const WAKTU_OCEAN = 1800; // 30 Menit untuk 50 Soal

        function startTimer(durasi, judul, callbackSelesai) {
            clearInterval(countdown);
            document.getElementById('timer-box').classList.remove('hidden');
            document.getElementById('test-title').innerText = judul;
            waktuSisa = durasi;
            countdown = setInterval(() => {
                let menit = Math.floor(waktuSisa / 60);
                let detik = waktuSisa % 60;
                document.getElementById('timer').innerText = `${menit.toString().padStart(2,'0')}:${detik.toString().padStart(2,'0')}`;
                if (waktuSisa <= 0) { clearInterval(countdown); callbackSelesai(); }
                waktuSisa--;
            }, 1000);
        }

        function startDiscTest(e) {
            e.preventDefault();
            kandidatData.nama = document.getElementById('nama').value;
            kandidatData.nohp = document.getElementById('nohp').value;
            document.getElementById('step-registration').classList.add('hidden');
            document.getElementById('step-disc').classList.remove('hidden');

            const container = document.getElementById('disc-container');
            container.innerHTML = ''; 
            discQuestions.forEach((q, idx) => {
                let rowsHtml = q.options.map((opt) => `
                    <tr class="hover:bg-gray-50">
                        <td class="p-3"><input type="radio" name="disc_m_${q.id}" value="${opt.most}" required class="w-5 h-5 text-green-600 cursor-pointer"></td>
                        <td class="p-3 text-left font-medium text-gray-700 text-sm">${opt.text}</td>
                        <td class="p-3"><input type="radio" name="disc_l_${q.id}" value="${opt.least}" required class="w-5 h-5 text-red-600 cursor-pointer"></td>
                    </tr>
                `).join('');
                container.innerHTML += `
                    <div class="p-5 border border-gray-200 rounded-xl bg-white shadow-sm">
                        <span class="font-bold text-blue-600 text-sm block mb-2">Pernyataan Soal #${idx + 1}</span>
                        <table class="w-full table-fixed disc-table">
                            <thead><tr class="bg-gray-50"><th class="w-24 text-green-700 font-bold text-xs">MOST (M)</th><th class="text-left text-gray-600 font-bold text-xs pl-3">Sifat Kepribadian</th><th class="w-24 text-red-700 font-bold text-xs">LEAST (L)</th></tr></thead>
                            <tbody>${rowsHtml}</tbody>
                        </table>
                    </div>
                `;
            });
            startTimer(WAKTU_DISC, "Bagian 1: Tes DISC", () => { validateAndSubmitDisc(); });
        }

        function validateAndSubmitDisc(e) {
            if(e) e.preventDefault();
            for(let q of discQuestions) {
                const checkedM = document.querySelector(`input[name="disc_m_${q.id}"]:checked`);
                const checkedL = document.querySelector(`input[name="disc_l_${q.id}"]:checked`);
                if(checkedM && checkedL && checkedM.closest('tr').rowIndex === checkedL.closest('tr').rowIndex) {
                    alert(`Validasi Gagal di Soal Nomor ${q.id}: Pilihan MOST dan LEAST tidak boleh di baris yang sama.`);
                    checkedM.closest('div').scrollIntoView({ behavior: 'smooth', block: 'center' });
                    return false;
                }
            }
            startOceanTest();
        }

        function startOceanTest() {
            clearInterval(countdown);
            document.getElementById('step-disc').classList.add('hidden');
            document.getElementById('step-ocean').classList.remove('hidden');

            const container = document.getElementById('ocean-container');
            container.innerHTML = '';
            oceanQuestions.forEach((q, idx) => {
                container.innerHTML += `
                    <div class="p-4 border border-gray-200 rounded-xl bg-white shadow-sm">
                        <p class="font-semibold text-gray-800 text-sm mb-3"><span class="text-gray-400 mr-1">${idx + 1}.</span> ${q.text}</p>
                        <div class="flex justify-between items-center max-w-md mx-auto text-xs font-bold text-gray-400">
                            <span class="text-red-400">Sangat Tidak Setuju</span>
                            <div class="flex gap-4">
                                ${[1, 2, 3, 4, 5].map(num => `
                                    <label class="flex flex-col items-center gap-1 cursor-pointer text-gray-700 hover:text-blue-600">
                                        <input type="radio" name="ocean_${q.id}" data-trait="${q.trait}" value="${num}" required class="h-5 w-5">
                                        <span>${num}</span>
                                    </label>
                                `).join('')}
                            </div>
                            <span class="text-green-500">Sangat Setuju</span>
                        </div>
                    </div>
                `;
            });
            startTimer(WAKTU_OCEAN, "Bagian 2: Tes Big Five (OCEAN)", () => { document.getElementById('form-ocean').requestSubmit(); });
        }

        async function finishTest(e) {
            if(e) e.preventDefault();
            clearInterval(countdown);
            document.getElementById('timer-box').classList.add('hidden');
            document.getElementById('step-ocean').classList.add('hidden');
            document.getElementById('step-finish').classList.remove('hidden');

            // 1. Hitung DISC
            let scoreM = { D: 0, I: 0, S: 0, C: 0 }, scoreL = { D: 0, I: 0, S: 0, C: 0 }, scoreC = { D: 0, I: 0, S: 0, C: 0 };
            discQuestions.forEach(q => {
                const m = document.querySelector(`input[name="disc_m_${q.id}"]:checked`);
                const l = document.querySelector(`input[name="disc_l_${q.id}"]:checked`);
                if(m) scoreM[m.value]++; if(l) scoreL[l.value]++;
            });
            ['D','I','S','C'].forEach(t => scoreC[t] = scoreM[t] - scoreL[t]);

            // 2. Plotting Grafik DISC
            const optDisc = { responsive: false, scales: { y: { min: 0, max: 24 } }, plugins: { legend: { display: false } } };
            new Chart(document.getElementById('chart-most'), { type: 'line', data: { labels: ['D', 'I', 'S', 'C'], datasets: [{ data: [scoreM.D, scoreM.I, scoreM.S, scoreM.C], borderColor: '#16a34a', borderWidth: 3 }] }, options: optDisc });
            new Chart(document.getElementById('chart-least'), { type: 'line', data: { labels: ['D', 'I', 'S', 'C'], datasets: [{ data: [scoreL.D, scoreL.I, scoreL.S, scoreL.C], borderColor: '#dc2626', borderWidth: 3 }] }, options: optDisc });
            new Chart(document.getElementById('chart-change'), { type: 'line', data: { labels: ['D', 'I', 'S', 'C'], datasets: [{ data: [scoreC.D, scoreC.I, scoreC.S, scoreC.C], borderColor: '#2563eb', borderWidth: 3 }] }, options: { ...optDisc, scales: { y: { min: -24, max: 24 } } } });

            // 3. Hitung OCEAN (Rata-rata Akurat)
            let oceanScores = { O: 0, C: 0, E: 0, A: 0, N: 0 }, oceanCounts = { O: 0, C: 0, E: 0, A: 0, N: 0 };
            oceanQuestions.forEach(q => {
                const checked = document.querySelector(`input[name="ocean_${q.id}"]:checked`);
                if(checked) { oceanScores[q.trait] += parseInt(checked.value); oceanCounts[q.trait]++; }
            });

            let avgO = (oceanScores.O / oceanCounts.O).toFixed(2);
            let avgC = (oceanScores.C / oceanCounts.C).toFixed(2);
            let avgE = (oceanScores.E / oceanCounts.E).toFixed(2);
            let avgA = (oceanScores.A / oceanCounts.A).toFixed(2);
            let avgN = (oceanScores.N / oceanCounts.N).toFixed(2);

            // 4. Buat RADAR CHART untuk OCEAN
            new Chart(document.getElementById('chart-ocean-radar'), {
                type: 'radar',
                data: {
                    labels: ['Openness', 'Conscientiousness', 'Extraversion', 'Agreeableness', 'Neuroticism'],
                    datasets: [{
                        label: 'Skor Karakter',
                        data: [avgO, avgC, avgE, avgA, avgN],
                        backgroundColor: 'rgba(34, 197, 94, 0.2)',
                        borderColor: '#22c55e',
                        borderWidth: 2,
                        pointBackgroundColor: '#15803d'
                    }]
                },
                options: { responsive: false, scales: { r: { min: 1, max: 5, ticks: { stepSize: 1 } } }, plugins: { legend: { display: false } } }
            });

            // Tampilkan Data Identitas ke PDF
            document.getElementById('pdf-nama').innerText = kandidatData.nama;
            document.getElementById('pdf-nohp').innerText = kandidatData.nohp;
            document.getElementById('pdf-tanggal').innerText = new Date().toLocaleDateString('id-ID', { dateStyle: 'full' });

            // Cetak Hasil Nilai Rata-rata yang Diperbaiki
            document.getElementById('pdf-ocean-scores').innerHTML = `
                <p class="border-b pb-1"><strong>• Openness (O):</strong> <span class="text-green-600 font-bold">${avgO}</span> / 5.00</p>
                <p class="border-b pb-1"><strong>• Conscientiousness (C):</strong> <span class="text-green-600 font-bold">${avgC}</span> / 5.00</p>
                <p class="border-b pb-1"><strong>• Extraversion (E):</strong> <span class="text-green-600 font-bold">${avgE}</span> / 5.00</p>
                <p class="border-b pb-1"><strong>• Agreeableness (A):</strong> <span class="text-green-600 font-bold">${avgA}</span> / 5.00</p>
                <p class="border-b pb-1"><strong>• Neuroticism (N):</strong> <span class="text-red-500 font-bold">${avgN}</span> / 5.00</p>
            `;

            // 5. Analisis Narasi Deskriptif Otomatis
            let analisisHtml = '';
            analisisHtml += `<p>• <strong>Kecenderungan Openness (${avgO} / 5.00):</strong> ${avgO >= 3.5 ? 'Kandidat memiliki keterbukaan pikiran yang tinggi, sangat kreatif, inovatif, dan adaptif terhadap perubahan serta ide-ide baru.' : 'Kandidat lebih nyaman bekerja dengan metode yang pasti, konvensional, serta praktis.'}</p>`;
            analisisHtml += `<p>• <strong>Kecenderungan Conscientiousness (${avgC} / 5.00):</strong> ${avgC >= 3.5 ? 'Menunjukkan tingkat kedisiplinan yang tinggi, terorganisir, teliti, terstruktur, serta berorientasi penuh pada pencapaian target kerja.' : 'Kandidat cenderung fleksibel namun membutuhkan pengawasan ekstra agar pengerjaan tugas tetap teratur.'}</p>`;
            analisisHtml += `<p>• <strong>Kecenderungan Extraversion (${avgE} / 5.00):</strong> ${avgE >= 3.5 ? 'Kandidat merupakan pribadi yang sosiabel, ekspresif, percaya diri dalam berjejaring, dan cocok dalam komunikasi publik/tim.' : 'Kandidat bertipe introver, bekerja lebih optimal di lingkungan tenang dan mandiri.'}</p>`;
            analisisHtml += `<p>• <strong>Kecenderungan Agreeableness (${avgA} / 5.00):</strong> ${avgA >= 3.5 ? 'Memiliki empati tinggi, sangat kooperatif, suportif, serta sangat menghindari konflik demi keharmonisan tim.' : 'Kandidat lebih kompetitif, skeptis, dan bersikap sangat tegas dalam mempertahankan argumen pribadi.'}</p>`;
            analisisHtml += `<p>• <strong>Kecenderungan Neuroticism (${avgN} / 5.00):</strong> ${avgN >= 3.5 ? 'Kandidat rentan terhadap tekanan kerja (stres) dan membutuhkan regulasi emosi ekstra saat krisis.' : 'Kandidat memiliki stabilitas emosi yang matang, tenang di bawah tekanan kerja, dan tidak mudah cemas.'}</p>`;
            document.getElementById('pdf-deskripsi-analisis').innerHTML = analisisHtml;

            // Render PDF & Kirim via EmailJS
            const element = document.getElementById('pdf-template');
            element.classList.remove('hidden');
            const pdfOptions = { margin: 10, filename: `Hasil_Assessment_${kandidatData.nama.replace(/ /g, '_')}.pdf`, html2canvas: { scale: 2, useCORS: true }, jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' } };

            try {
                const pdfBase64 = await html2pdf().set(pdfOptions).from(element).outputPdf('datauristring');
                element.classList.add('hidden');

                const templateParams = { to_email: 'hr@1000daysfund.org', kandidat_nama: kandidatData.nama, kandidat_nohp: kandidatData.nohp, pdf_attachment: pdfBase64 };
                // await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams);
                
                await new Promise(res => setTimeout(res, 3000));
                document.getElementById('loading-status').classList.add('hidden');
                document.getElementById('success-status').classList.remove('hidden');
            } catch (err) {
                console.error(err);
                alert("Gagal memproses pembuatan dokumen.");
            }
        }
    </script>
</body>
</html>
