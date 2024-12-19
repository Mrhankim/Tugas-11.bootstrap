//buat fungsi
//buat usernama
//nilai paswordnya
//buat fungsi login
//cek username dan pasword
//benar beri alert lohin berhasil
//username dan pw kosong beri lert
//user dan pw salah kasih aletr gagal

function login(){
    let username = document.getElementById("username").value;
    let pasword = document.getElementById("pasword").value;

    if(username== "the_store_is_well_stocked" && pasword == "19122024"){
        alert("Login Berhasil !!")
        window.location = "index.html"
        return false
    }
    else if(username == "" || pasword == ""){
        alert("Silahkan diisi terlebih dahulu !")
    }
    else{
        alert("Password & Username salah !")
    }
}