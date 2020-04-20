function gonder()
{
    var sonuc = "";
    if ( kisi.ad!=null  )
    {
        alert("Ad boş geçilemez!");
    }else{
        sonuc+="Ad "+kisi.ad.value+"n";
    }
    if( kisi.soyad!=null){
        alert("Soyad boş geçilemez!")
    }else{
        sonuc+="Soyad "+kisi.soyad.value+"n";
    }
    if(kisi.tc.value.length != 11) {
        alert("TC kimlik numaranızı lütfen 11 haneden oluşan rakam giriniz!");
    }else{
        sonuc+="TC Kimlik "+document.kisi.tc.value+"n";
    }
    if(kisi.tel!= null){
        alert("Telefon numarası boş geçilemez!")
    }else{
        sonuc+="Telefon "+document.kisi.tel.value+"n";
    }
    if(kisi.posta!=null){
        alert("e-posta boş geçilemez!")
    }else{
        sonuc="Eposta "+document.kisi.posta.value+"n";
    }
    if(kisi.adres != null){
        alert("Adres boş geçilemez!")
    }else{
        sonuc+="Adres "+document.kisi.adres.value+"n";
    }
    if(kisi.sehir != null){
        alert("Şehir boş geçilemez!")
    }else{
        sonuc+="Sehir"+document.kisi.sehir.value+"n";
    }
    if(kisi.meslek!=null){
        alert("Meslek boş geçilemez!")
    }else{
        sonuc+="Meslek "+document.kisi.meslek.value+"n";
    }
    for(i=0;i<document.kisi.yıl.length;i++)
    {
        if(document.kisi.yıl[i].selected)
        {
            document.kisi.sonuc.value+="Doğum Yılınız "+document.kisi.yıl[i].value+"n";
        }
    }
    for(i=0;i<document.kisi.cinsiyet.length;i++)
    {
        if(document.kisi.cinsiyet[i].checked)
        {
            document.kisi.sonuc.value+="Cinsiyetiniz "+document.kisi.cinsiyet[i].value+"n";
        }
    }

    document.kisi.sonuc.value+="n";
    document.kisi.sonuc.value+="Çalışılan Alanlar "+document.kisi.alan.value+" ";
}