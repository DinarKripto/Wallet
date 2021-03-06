import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
    'en': {
        welcomeMsg: 'Welcome to Your DNC Wallet App',
        Create_New_Account:'Create New Account',
        Import_Account:'Import Account',
        wallet_detail :'We need a few more details before we create new account address for your digital assets ',
        password_suggestion:'Please take great care when creating your password it is the key to the security of your digital assets ',
        Recommend:'Recommend',
        Common_Password_Mistakes:'Common Password Mistakes',
        save_password:'If you lose or forget your password your coins are unrecoverable. Write your password down and keep it safe.',
        large_amount_message:'You must test sending and receiving a small amount of digital asset to this account before you use it to hold larger amounts.',
        dinarkripto_message :'dinarkripto.com is not responsible for any losses, please take care. ',
        Password :'Password ',
        Confirm_Password:'Confirm Password',
        Create_Password:'Create Password',
        Close:'Close',
        Main:'Main',
        My_Wallet:'My Wallet',
        Home:'Home',
        New_Wallet:'New Wallet',
        Burn_DNC:'Burn DNC',
        DNC_Contract:'DNC Contract',
        // Import_Account:'Import Account',
        Mint_DNC:'Mint DNC',
        Check_Tx_Status:'Check Tx Status',
        Tranasction_History:'Transaction History',
        Keystore:'Keystore/JSON file',
        Private_Key:'Private Key',
        Select:'Select your wallet file',
        not_reommended:'This is not a recommended way to access your wallet.',
        Entering_private_key:'Entering your private key on a website is dangerous. If our website is compromised or you accidentally visit a different website, your funds will be stolen. Please consider:',
        MetaMask:'MetaMask',
        or:'or',
        A_hadware:'A Hardware Wallet',
        running_MEM:'Running MEM Offline & Locally',
        How_to_protect:'Learning How to Protect Yourself and Your Funds',
        user_guideline:'User Guideline',
        Setting:'Setting',
        // Check_Tx_Status:'Check TX Status',
        ICO_Notes:'During times of high volume (like during ICOs) transactions can be pending for hours, if not days. This tool aims to give you the ability to find and "cancel" / replace these TXs. This is not typically something you can do. It should not be relied upon & will only work when the TX Pools are full.',
        Read_here:'. Please, read about this tool here.',
        // Burn_DNC:'Burn DNC',
        Attention:'Attention:',
        Burn_functions:'Burn functions are only for redeem physical gold purposes only ',
        Please_refer_the_guideline:'Please refer the guideline and flow. Any transaction outside the custodial or without appointment will be ignore and nonrefundable.',
        // Tranasction_History:'Tranasaction History',
        Wallet_Address:'Wallet Address',
        Wallet_Balance_DNC:'Wallet Balance DNC',
        Total_Transactions:'Total Transactions',
        Wallet_Balance_ETH:'Wallet Balance ETH',
        Transactions:'Transactions',
        TXN_Hash:'TXN Hash',
        Block:'Block',
        Age:'Age',
        From:'From',
        To:'To',
        Value:'Value',
        TXN_Fee:'TXN Fee',
        TXN_Type:'TXN Type',
        TXN_Status:'TXN Status',
        Pending:'Pending',
        Success:'Sucess',
        Transaction_Speed:'Transaction Speed',
        Support_feedback:'Support & Feedback',
        Terms:'Terms & Conditions',
        About_us:'About Us'

    },
    'myr': {
        welcomeMsg: 'Hai dunia',
        Create_New_Account:'Akaun Baru',
        Import_Account:'Import Akaun ',
        wallet_detail:'Beberapa butiran diperlukan sebelum membuat alamat akaun baru untuk aset digital anda',
        password_suggestion:'Sila berhati-hati apabila membuat kata laluan anda. Kata laluan adalah kunci kepada keselamatan aset digital anda',
        Recommend:'Merujuk',
        Common_Password_Mistakes:'Kesalahan Biasa Kata Laluan',
        save_password:'Jika anda kehilangan atau terlupa kata laluan anda, Koins anda tidak dapat diperoleh semula. Tulis kata laluan anda dan simpannya dengan selamat. ',
        large_amount_message:'Anda mesti menguji menghantar dan menerima sejumlah kecil aset digital ke akaun ini sebelum anda menggunakannya untuk memegang jumlah yang lebih besar.',
        dinarkripto_message:'Dinarkripto.com tidak bertanggungjawab keatas sebarang kerugian, sila berhatihati.',
        Password :'Kata Laluan ',
        Confirm_Password:'Sahkan Kata Laluan ',
        Create_Password:'Bina kata laluan',
        Close:'Tutup',
        Main:'Laman Utama ',
        Read_here:'Sila baca tentang alat ini di sini.',
        My_Wallet:'Akaun Saya ',
        Home:'Laman Utama',
        New_Wallet:'Akaun Baru ',
        Burn_DNC:'Hapus DNC ',
        DNC_Contract:'Kontrak DNC',
        // Import_Account:'Import Akaun',
        Mint_DNC:'Cetak DNC',
        Check_Tx_Status:'Semak Status Tx',
        Tranasction_History:'Sejarah Transaksi',
        Keystore:'Keystore/JSON Fail',
        Private_Key:'Private Key',
        Select:'Pilih Fail Akaun Anda ',
        not_reommended:'Ini bukan cara yang disyorkan untuk mengakses akaun anda.',
        Entering_private_key:'Memasuki Private Key anda di laman web adalah berbahaya. Jika laman web kami dikompromi atau anda secara tidak sengaja melawat laman web yang berbeza, asset anda akan dicuri. Sila pertimbangkan:',
        MetaMask:'MetaMask',
        or:'atau',
        A_hadware:'Wallet Hardware',
        running_MEM:'Running MEM Offline & Lokal',
        How_to_protect:'Belajar Cara Melindungi Diri dan Asset Anda',
        user_guideline:'Garis Panduan Pengguna',
        Setting:'Tetapan',
        // Check_Tx_Status:'Semak Status TX',
        ICO_Notes:'Semasa transaksi yang tinggi (seperti semasa transaksi ICO), transaksi kemungkinan menunggu selama berjam-jam atau beberapa hari. Alat ini bertujuan untuk memberi anda keupayaan untuk mencari dan "membatalkan" / menggantikan TX ini. Biasanya perkara ini tidak boleh anda lakukan. Ia tidak boleh dipercayai dan hanya akan berfungsi apabila TX Pools penuh sahaja.',
        // Burn_DNC:'Hapus DNC',
        Attention:'Perhatian:',
        Burn_functions:'Fungsi Hapus hanya bertujuan menebus emas fizikal sahaja',
        Please_refer_the_guideline:'Sila rujuk panduan dan aliran Sebarang transaksi di luar custodial atau tanpa temu janji akan diabaikan dan asset tidak boleh dikembalikan.',
        // Tranasction_History:'Sejarah Transaksi',
        Wallet_Address:'Alamat Akaun',
        Wallet_Balance_DNC:'Baki Akaun DNC',
        Total_Transactions:'Jumlah Transaksi',
        Wallet_Balance_ETH:'Baki Akaun ETH',
        Transactions:'Transaksi',
        TXN_Hash:'TXN Hash',
        Block:'Blok',
        Age:'Waktu',
        From:'Daripada',
        To:'Kepada',
        Value:'Jumlah',
        TXN_Fee:'Cas TXN',
        TXN_Type:'Jenis TXN',
        TXN_Status:'Status TXN',
        Pending:'Menunggu',
        Success:'Berjaya',
        Transaction_Speed:'Kelajuan Transaksi ',
        Support_feedback:'Sokongan & Maklum Balas',
        Terms:'Terma & Syarat',
        About_us:'Tentang Kami'




    }
};

const i18n = new VueI18n({
    locale: 'en', // set locale
    fallbackLocale: 'myr', // set fallback locale
    messages, // set locale messages
});

export default i18n;
