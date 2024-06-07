$.getJSON("data.json", function (data) {
  let konten = data.konten;
  $.each(konten, function (i, data) {
    $("#daftar-konten").append(
      '<div class="col-md-4"><div class="card mb-3"><img src=' +
        data.gambar +
        ' class="card-img-top"><div class="card-body"><h5 class="card-title">' +
        data.nama +
        '</h5><p class="card-text">' +
        data.deskripsi +
        "</p></div></div></div>"
    );
  });
});
