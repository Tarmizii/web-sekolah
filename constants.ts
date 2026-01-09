import { Book, NewsItem, Teacher, Stat } from './types';

export const SCHOOL_STATS: Stat[] = [
  { label: 'Tahun Berdiri', value: '25+' },
  { label: 'Siswa Aktif', value: '1.200' },
  { label: 'Rasio Guru : Siswa', value: '1:15' },
  { label: 'Ekstrakurikuler', value: '18' },
];

export const TEACHERS: Teacher[] = [
  {
    id: '1',
    name: 'Drs. H. Ahmad Fauzi, M.Pd.',
    role: 'Kepala Sekolah',
    expertise: 'Manajemen Pendidikan',
    image: 'https://picsum.photos/300/400?random=101'
  },
  {
    id: '2',
    name: 'Siti Rahmawati, S.Pd.',
    role: 'Wakil Kurikulum',
    expertise: 'Matematika & Fisika',
    image: 'https://picsum.photos/300/400?random=102'
  },
  {
    id: '3',
    name: 'Budi Santoso, S.Kom.',
    role: 'Ka. Lab Komputer',
    expertise: 'Teknologi Informasi',
    image: 'https://picsum.photos/300/400?random=103'
  },
  {
    id: '4',
    name: 'Ratna Dewi, S.S.',
    role: 'Guru Bahasa',
    expertise: 'Sastra Inggris',
    image: 'https://picsum.photos/300/400?random=104'
  }
];

export const BOOKS: Book[] = [
  {
    id: '1',
    title: 'Sejarah Peradaban Islam',
    author: 'Prof. Dr. Hamka',
    isbn: '978-602-250-123-4',
    category: 'Sejarah',
    gradeLevel: 'Umum',
    status: 'Tersedia',
    summary: 'Sebuah tinjauan mendalam mengenai perkembangan peradaban Islam dari masa klasik hingga modern.',
    synopsis: 'Buku ini mengupas tuntas sejarah peradaban Islam dengan bahasa yang mengalir dan analisis yang tajam. Cocok untuk siswa yang ingin mendalami akar budaya dan sejarah agama Islam dalam konteks global.',
    shelfLocation: 'Rak S-04',
    coverImage: 'https://picsum.photos/300/450?random=201'
  },
  {
    id: '2',
    title: 'Matematika Diskrit Lanjut',
    author: 'Rinaldi Munir',
    isbn: '978-602-123-456-7',
    category: 'Sains',
    gradeLevel: 'Kelas XII',
    status: 'Dipinjam',
    summary: 'Panduan komprehensif matematika diskrit untuk tingkat lanjut.',
    synopsis: 'Membahas logika, himpunan, relasi, fungsi, induksi matematik, algoritma, teori graf, pohon, dan kompleksitas algoritma. Sangat berguna untuk siswa yang berminat di bidang ilmu komputer.',
    shelfLocation: 'Rak M-02',
    coverImage: 'https://picsum.photos/300/450?random=202'
  },
  {
    id: '3',
    title: 'Fisika Kuantum Dasar',
    author: 'Arthur Beiser',
    isbn: '978-979-741-999-9',
    category: 'Sains',
    gradeLevel: 'Kelas XII',
    status: 'Tersedia',
    summary: 'Pengantar konsep fisika modern dan mekanika kuantum.',
    synopsis: 'Buku teks klasik yang memperkenalkan konsep-konsep fisika modern dengan pendekatan yang jelas. Dilengkapi dengan contoh soal dan pembahasan.',
    shelfLocation: 'Rak F-11',
    coverImage: 'https://picsum.photos/300/450?random=203'
  },
  {
    id: '4',
    title: 'Laskar Pelangi',
    author: 'Andrea Hirata',
    isbn: '978-979-306-252-5',
    category: 'Sastra',
    gradeLevel: 'Umum',
    status: 'Tersedia',
    summary: 'Novel inspiratif tentang perjuangan anak-anak Belitong.',
    synopsis: 'Kisah 10 anak Laskar Pelangi yang berjuang menuntut ilmu di tengah keterbatasan. Novel ini mengajarkan tentang semangat, persahabatan, dan cinta tanah air.',
    shelfLocation: 'Rak N-01',
    coverImage: 'https://picsum.photos/300/450?random=204'
  },
  {
    id: '5',
    title: 'Biologi Sel & Molekuler',
    author: 'Gerald Karp',
    isbn: '978-047-004-913-2',
    category: 'Sains',
    gradeLevel: 'Kelas XI',
    status: 'Tersedia',
    summary: 'Eksplorasi mendalam tentang struktur dan fungsi sel.',
    synopsis: 'Buku referensi lengkap untuk biologi sel. Dilengkapi ilustrasi mikroskopis yang detail dan penjelasan mekanisme molekuler.',
    shelfLocation: 'Rak B-05',
    coverImage: 'https://picsum.photos/300/450?random=205'
  },
  {
    id: '6',
    title: 'Bahasa Indonesia: Tata Bahasa Baku',
    author: 'Hasan Alwi',
    isbn: '978-979-407-177-9',
    category: 'Bahasa',
    gradeLevel: 'Kelas X',
    status: 'Dipinjam',
    summary: 'Acuan standar tata bahasa Indonesia yang baik dan benar.',
    synopsis: 'Buku rujukan utama tata bahasa Indonesia yang diterbitkan oleh Badan Bahasa. Wajib dibaca oleh siswa untuk memahami struktur kalimat yang baku.',
    shelfLocation: 'Rak B-01',
    coverImage: 'https://picsum.photos/300/450?random=206'
  }
];

export const NEWS: NewsItem[] = [
  {
    id: '1',
    title: 'Al-Hikmah Raih Juara Umum Olimpiade Sains Kota Medan',
    date: '14 Oktober 2023',
    category: 'Prestasi',
    excerpt: 'Tim olimpiade sekolah berhasil membawa pulang 5 medali emas dan 3 perak dalam ajang tahunan bergengsi.',
    content: '...',
    image: 'https://picsum.photos/800/400?random=301',
    featured: true
  },
  {
    id: '2',
    title: 'Jadwal Penilaian Tengah Semester Ganjil 2023/2024',
    date: '28 September 2023',
    category: 'Pengumuman',
    excerpt: 'Informasi lengkap mengenai jadwal dan tata tertib pelaksanaan PTS Ganjil mendatang.',
    content: '...',
    image: 'https://picsum.photos/400/300?random=302'
  },
  {
    id: '3',
    title: 'Kunjungan Edukatif ke Museum Negeri Sumatera Utara',
    date: '20 September 2023',
    category: 'Kegiatan',
    excerpt: 'Siswa kelas X melakukan studi lapangan untuk mempelajari sejarah lokal secara langsung.',
    content: '...',
    image: 'https://picsum.photos/400/300?random=303'
  },
  {
    id: '4',
    title: 'Workshop Literasi Digital untuk Guru dan Staf',
    date: '15 September 2023',
    category: 'Kegiatan',
    excerpt: 'Peningkatan kompetensi tenaga pengajar dalam memanfaatkan teknologi pembelajaran modern.',
    content: '...',
    image: 'https://picsum.photos/400/300?random=304'
  }
];

export const BOOK_CATEGORIES = ['Semua', 'Sains', 'Sejarah', 'Sastra', 'Bahasa', 'Agama'];
export const BOOK_GRADES = ['Semua', 'Kelas X', 'Kelas XI', 'Kelas XII', 'Umum'];
