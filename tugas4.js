class Kendaraan {
    constructor(nama, jenis, hargaSewa) {
        this.nama = nama;
        this.jenis = jenis;
        this.hargaSewa = hargaSewa;
        this.disewa = false;
    }

    sewa() {
        if (this.disewa) {
            console.log(`${this.nama} sudah disewa.`);
            return false;
        }
        this.disewa = true;
        console.log(`${this.nama} berhasil disewa.`);
        return true;
    }

}

// Subclass Mobil
class Mobil extends Kendaraan {
    constructor(nama, hargaSewa, kapasitas) {
        super(nama, "Mobil", hargaSewa);
        this.kapasitas = kapasitas;
    }
}

// Subclass Motor
class Motor extends Kendaraan {
    constructor(nama, hargaSewa, cc) {
        super(nama, "Motor", hargaSewa);
        this.cc = cc;
    }
}

// Class Pelanggan
class Pelanggan {
    constructor(nama, nomorTelepon) {
        this.nama = nama;
        this.nomorTelepon = nomorTelepon;
        this.kendaraanDisewa = null;
    }

    sewaKendaraan(kendaraan) {
        if (this.kendaraanDisewa) {
            console.log(`${this.nama} sudah menyewa ${this.kendaraanDisewa.nama}, tidak bisa menyewa lagi.`);
            return;
        }

        if (kendaraan.sewa()) {
            this.kendaraanDisewa = kendaraan;
            console.log(`${this.nama} menyewa ${kendaraan.nama}`);
        }
    }

}

const daftarPelanggan = [];

function tampilkanPelanggan() {
    console.log("\nDaftar Pelanggan yang Menyewa Kendaraan:");
    daftarPelanggan.forEach((pelanggan, index) => {
        if (pelanggan.kendaraanDisewa) {
            console.log(`${index + 1}. ${pelanggan.nama} (${pelanggan.nomorTelepon}) - ${pelanggan.kendaraanDisewa.nama}`);
        } else {
            console.log(`${index + 1}. ${pelanggan.nama} (${pelanggan.nomorTelepon}) - Tidak menyewa kendaraan`);
        }
    });
}

const mobil1 = new Mobil("Avanza", 500000, 7);
const motor1 = new Motor("Vario", 100000, 10);

const pelanggan1 = new Pelanggan("Jake", "08123456789");
const pelanggan2 = new Pelanggan("Jay", "08234567890");

pelanggan1.sewaKendaraan(mobil1);
daftarPelanggan.push(pelanggan1);

pelanggan2.sewaKendaraan(motor1);
daftarPelanggan.push(pelanggan2);

tampilkanPelanggan();
