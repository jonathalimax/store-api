$(function() {
  // Method Get
  $('#get-button').on('click', function() {
    $.ajax({
        url: '/products',
        contentType: 'application/json',
        success: function(response) {
          var tbodyEl = $('#form-post');

          tbodyEl.html('');

          response.products.forEach(function(product) {
            tbodyEl.append('\
              <tr>\
                <td class="id">' + product.id + ' </td> \
                <td><input type"text" class="name" value="'+ product.nome + '"></td>\
                <td><input type"text" class="categoria" value="'+ product.categoria + '"></td>\
                <td><input type"text" class="marca" value="'+ product.marca + '"></td>\
                <td><input type"text" class="preco" value="'+ product.preco + '"></td>\
                <td><input type"text" class="tamanho" value="'+ product.tamanho + '"></td>\
                <td><input type"text" class="cor" value="'+ product.cor + '"></td>\
                <td><input type"text" class="foto" value="'+ product.foto + '"></td>\
                <td><button class="update-button">Update</button></td>\
                <td><button class="delete-button">Delete</button></td>\
              <tr>');
          });
        }
    });
  });
});
