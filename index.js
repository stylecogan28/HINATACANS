$ url = "https://api.i-tech.id/anim/quotes?key=Zllo81-cQHtUN-qEyAJq-FUlM1z-oKSynl";
$ header = array (
'Terima: application / json',
);
$ ch = curl_init ();
curl_setopt ($ ch, CURLOPT_URL, $ url);
curl_setopt ($ ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt ($ ch, CURLOPT_FOLLOWLOCATION, 1);
curl_setopt ($ ch, CURLOPT_HTTPHEADER, $ header);
$ hasil = curl_exec ($ ch);
echo $ result;


Contoh Respon
Respon Sukses

{
    "kode": "200",
    "status": "sukses",
    "anime": "No Game No Life",
    "karakter": "Sora",
    "tanda kutip": "Berapa probabilitas untuk menarik kartu as sekop dari dek tanpa pelawak? Normaly adalah 1/50. Tapi bagaimana jika itu adalah dek baru? Posisi kartu di dek baru biasanya identik, Jadi itu berarti jika Anda mengalahkan pelawak dan menarik kartu di bagian paling bawah, itu adalah kartu as sekop hampir 100% dari waktu. Oh, benar! Saya tidak mengatakan sepatah kata pun tentang itu menjadi tumpukan baru. Sebaliknya, Anda tidak bertanya. Berada di \ "tidak \" memberi Anda kekuatan untuk mengubah kemungkinan menang dari 1,92% menjadi 100%. Semakin banyak pengetahuan tentang suatu pesta akan menjadi pemenang yang tak terelakkan. "
}

Kesalahan Respons

{
    "kode": "404",
    "status": "kesalahan",
    "pesan": "Data tidak ditemukan."
}
$url = "https://api.i-tech.id/anim/neko?key=Zllo81-cQHtUN-qEyAJq-FUlM1z-oKSynl";
$header = array(
'Accept: application/json',
);
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
curl_setopt($ch, CURLOPT_HTTPHEADER, $header);
$result = curl_exec($ch);
echo $result;


Example Response
Response Success

{
    "code": "200",
    "status": "success",
    "result": "https://i.ibb.co/Ltg6pTX/1193680775.jpg"
}

Response Error

{
    "code": "404",
    "status": "error",
    "pesan": "Data tidak ditemukan."
}