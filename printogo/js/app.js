let numArchivos = 1;
$(function() {
  // Vista
  $("#tipoDeImpresion").change(vista);
  $(document).on("change", "input", priceCalc);
  $(document).on("keyup", "input", priceCalc);
  $(document).on("change", "select", priceCalc);
  // Tamaño personalizado:
  $(document).on("change", "#tamano", customSize);
  // Siguiente
  $(document).on("click", "#siguiente", nextBtn);
  // Boton Atras
  $(document).on("click", "#return-btn", backBtn);
  // Click Paago
  $(document).on("click", "#pay-btn", payment);
});

function vista(e) {
  var selected_value = $("input[name='tipoDeImpresion']:checked");
  var htmlCaracteristicas;
  var color = `
    <h3 class="text-center font-weight-bold text-black">4) Color</h3>
    <div class="form-check" id="colorImpresion">
    <label class="form-check-label mr-2 text-black">
          <input type="radio" class="form-check-input" id="black"
              name="color" value="black">
          <img class="color mr-1" src="img/icons/black-wheel.png">
          B/N
      </label>
      <label class="form-check-label mr-2 text-black">
          <input type="radio" class="form-check-input" id="colored"
              name="color" value="colored">
          <img class="color mr-2" src="img/icons/color-wheel.png">
          Color
      </label>
    </div>
  `;
  var indiceArchivo = 5;
  if (selected_value.is("#ploteo")) indiceArchivo = 4;
  let folder = "";
  if (selected_value.is("#estandar")){
   folder = `
      <div class="form-check mb-2">
        <input class="form-check-input" type="checkbox" name="folder" id="folder">
        <label class="form-check-label texto-chico" for="folder">
          Agregar Folder
        </label>
      </div>
      <div class="form-check mb-2">
        <input class="form-check-input" type="checkbox" name="sobre" id="sobre">
        <label class="form-check-label texto-chico" for="sobre">
          Agregar Sobre
        </label>
      </div>
   `; 
  }
  var archivo = `
    <h3 class="text-center font-weight-bold text-black">${indiceArchivo}) Sube Tu Archivo</h3>
    <div data-widget-host="habitat" id="wt_embed">
    <script type="text/props">
      {
        "wtEmbedKey": "41b17d7b-f5ec-400c-9a51-b88dc741838c",
        "wtEmbedOutput": ".wt_embed_output"
      }
    </script>
    </div>
    <script async src="https://prod-embed-cdn.wetransfer.net/v1/latest.js"></script>
    <input type="hidden" name="wt_embed_output" class="wt_embed_output"/>
    

    <p class="text-black mt-1">Costo por pagina: <span id="costo-por-pagina">$0.00</span></p>
    <input type="number" class="form-control" name="paginasAImprimir" placeholder="# Paginas a imprimir " min="0" step="1" pattern="[0-9]">
    <input type="number" class="form-control" name="copias" placeholder="Copias" min="1" step="1" pattern="[0-9]">
    <textarea class="form-control mt-1" name="additional" rows="2" placeholder="Ingresa instrucciones adicionales (opcional)"></textarea>
    ${folder}
    <p class="text-black mt-1">Costo Del Documento: <span id="costo-documento">$0.00</span></p>
    <input id="input-cost-documento" type="hidden" name="costo" >
  `;
  var submitButton = `
    <button type="button" class="btn btn-lg btn-primary mt-1 mb-1" id="add-other">Agregar Otra Impresión</button>
    <button type="button" class="btn btn-lg btn-success mt-1 mb-1" id="siguiente">Siguiente</button>
  `;
  if (selected_value.is("#estandar")) {
    htmlCaracteristicas = `
    <label class="text-center font-weight-bold text-black" for="tipoPapel">2) Tipo de
      Papel</label>
    <select class="form-control" name="tipoPapel" id="tipoPapel">
      <option value="" disabled selected>---Selecciona---</option>
      <option value="Bond">Bond</option>
      <option value="Albanene">Albanene</option>
      <option value="Couche">Couche</option>
      <option value="Opalina">Opalina</option>
    </select>
    <h3 class="text-center font-weight-bold text-black">3) Tamaño</h3>
    <div class="form-check" id="tamano-impresion">
      <label class="form-check-label mr-2 text-black">
          <input type="radio" class="form-check-input" id="carta" name="tamano" value="carta">
          <img src="img/buttons/button_carta.png">
      </label>
      <label class="form-check-label mr-2 text-black">
          <input type="radio" class="form-check-input" id="oficio" name="tamano" value="oficio">
          <img src="img/buttons/button_oficio.png">
      </label>
      <label class="form-check-label mr-2 text-black">
          <input type="radio" class="form-check-input" id="doble-carta" name="tamano" value="doble-carta">
          <img src="img/buttons/button_doble-carta.png">
      </label>
    </div>
    ${color}
    ${archivo}
    ${submitButton}
  `;
  } else if (selected_value.is("#planos")) {
    htmlCaracteristicas = `
    <label class="text-center font-weight-bold text-black" for="tipoPapel">2) Tipo de
      Papel:</label>
    <select class="form-control" name="tipoPapel" id="tipoPapel">
      <option value="" disabled selected>---Selecciona---</option>
      <option value="Albanene">Albanene</option>
      <option value="Bond">Bond</option>
    </select>
    <label class="text-center font-weight-bold text-black" for="tamano">3) Tamaño<span id="tamano-heading"></span>:</label>
    <select class="form-control" name="tamano" id="tamano">
      <option value="" disabled selected>---Selecciona---</option>
      <option value="60x45">60 x 45</option>
      <option value=" 90x60">90 x 60</option>
      <option value="A1">A1</option>
      <option value="A3">A3</option>
      <option value="tabloide">Tabloide</option>
      <option value="personalizado">Personalizado</option>
    </select>
    ${color}
    ${archivo}
    ${submitButton}
  `;
  } else if (selected_value.is("#ploteo")) {
    htmlCaracteristicas = `
    <label class="text-center font-weight-bold text-black" for="tipoPapel">2) Tipo de
      Papel:</label>
    <select class="form-control" name="tipoPapel" id="tipoPapel">
      <option value="" disabled selected>---Selecciona---</option>
      <option value="Albanene">Albanene</option>
      <option value="Bond">Bond</option>
      <option value="Photoglossy">Photoglossy</option>
      <option value="Aperlado">Aperlado</option>
    </select>

    <label class="text-center font-weight-bold text-black" for="tamano">3) Tamaño<span id="tamano-heading"></span>:</label>
    <select class="form-control" name="tamano" id="tamano">
      <option value="" disabled selected>---Selecciona---</option>
      <option value="60x45">60 x 45</option>
      <option value=" 90x60">90 x 60</option>
      <option value="A1">A1</option>
      <option value="A3">A3</option>
      <option value="tabloide">Tabloide</option>
      <option value="personalizado">Personalizado</option>
    </select>
    ${archivo}
    ${submitButton}
  `;
  }
  $("#caracteristicas-impresion").html(htmlCaracteristicas);
}

function customSize() {
  let value = $("#tamano").val();

  if (value === "personalizado") {
    $("#tamano-heading").html("(cm)");
    const html = `
    <div class="mt-1" id="personalizado">
      <input type="number" class="form-control form-check-input" id="personalizado-largo"
      name="personalizado-largo" placeholder="Largo" required>x
      <input type="number" class="form-control form-check-input" id="personalizado-ancho" 
      name="personalizado-ancho" placeholder="Ancho" required>
    </div>
    `;
    $("#tamano").after(html);
  } else {
    $("#personalizado").remove();
  }
}

function backBtn() {
  console.log("back");
  $(".form-payment").remove();
  $(".instructions-div").removeClass("d-none");
  $(".form-file")
    .removeClass("col-md-4 col-lg-4 collapse")
    .addClass("col-md-8 col-lg-6");
  $(".form-file :input").attr("readonly", true);
}

function nextBtn() {
  var tipoImpresion = $('[name="tipoDeImpresion"]:checked');
  var tipoPapel = $('[name="tipoPapel"]');
  var tamano = $('[name="tamano"]');
  var color = $('[name="color"]:checked');
  var paginasAImprimir = $('[name="paginasAImprimir"]');
  var copias = $('[name="copias"]');
  var file = $(".wt_embed_output");
  if (
    tipoImpresion.val() &&
    tipoPapel.val() &&
    tamano.val() &&
    color.val() &&
    file.val() &&
    paginasAImprimir.val() &&
    copias.val()
  ) {
    $(".instructions-div").addClass("d-none");
    $(".form-file")
      .removeClass("col-md-8 col-lg-6")
      .addClass("col-md-4 col-lg-4 collapse");
    $(".form-file :input").attr("readonly", true);

    // Funcion para crear forma de información de Usuario
    var formInfo = `
    <div class="form-payment ml-4 col-md-3 card" id="form-payment">
        <label><i class="mt-3 fas fa-user"></i> <input type="text" class="form-control mt-3 firstName" name="firstName" placeholder="Nombre"></label>
        <label><i class="mt-3 fas fa-at"></i><input type="email" class="form-control mt-3" name="email" placeholder="nombre@mail.com"></label>
        <label><i class="mt-3 fas fa-phone"></i><input type="tel" class="form-control phone mt-3" name="cellphone" placeholder="Tu celular"></label>
        <label><i class="mt-3 fas fa-map-marker-alt"></i><input type="text" class="form-control mt-3" name="address" placeholder="Dirección de entrega:"></label>
        <input type="button" id="return-btn" class="btn btn-secondary mt-3 mb-3" value="Atrás" />
        <input type="submit" id="pay-btn" class="btn btn-success mb-3" value="Proceder al Pago" />
    </div>
    `;
    $(".form-file").after(formInfo);
  } else {
    console.log(
      tipoImpresion.val(),
      tipoPapel.val(),
      tamano.val(),
      color.val(),
      file.val(),
      paginasAImprimir.val(),
      copias.val()
    );
    alert("Revisa que hallas llenado todos los campos.");
  }
}

function payment() {
  $("input[type: ]")
  alert("Gracias por probar el sistema\n Lo lanzaremos lo mas pronto posible");
}

function priceCalc() {
  let tipoImpresion = $('[name="tipoDeImpresion"]:checked');
  let tipoPapel = $('[name="tipoPapel"]');
  let tamano = $('[name="tamano"]');
  if (tipoImpresion.val() === "estandar") {
    tamano = $('[name="tamano"]:checked');
  }
  let color = $('[name="color"]:checked');
  var paginasAImprimir = $('[name="paginasAImprimir"]');
  var copias = $('[name="copias"]');
  let file = $(".wt_embed_output");
  let price = 0;
  let pricePerPage = 0;
  if (tipoImpresion.val() && tipoPapel.val() && tamano.val()) {
    if (tipoImpresion.val() === "estandar") {
      if (tipoPapel.val() == "Bond") {
        if (tamano.val() === "carta") {
          if (color.val() === "black") {
            pricePerPage = 0.99;
          } else if (color.val() === "colored") {
            pricePerPage = 13.5;
          }
        } else if (tamano.val() === "oficio") {
          if (color.val() === "black") {
            pricePerPage = 1.3;
          } else if (color.val() === "colored") {
            pricePerPage = 16;
          }
        } else {
          if (color.val() === "black") {
            pricePerPage = 3.6;
          } else if (color.val() === "colored") {
            pricePerPage = 19;
          }
        }
      } else if (tipoPapel.val() === "Albanene") {
        if (tamano.val() === "carta") {
          if (color.val() === "black") {
            pricePerPage = 4.99;
          } else if (color.val() === "colored") {
            pricePerPage = 17.5;
          }
        } else if (tamano.val() === "oficio") {
          if (color.val() === "black") {
            pricePerPage = 5.3;
          } else if (color.val() === "colored") {
            pricePerPage = 20;
          }
        } else {
          if (color.val() === "black") {
            pricePerPage = 7.6;
          } else if (color.val() === "colored") {
            pricePerPage = 23;
          }
        }
      } else if (tipoPapel.val() === "Couche") {
        if (tamano.val() === "carta") {
          if (color.val() === "black") {
            pricePerPage = 4.99;
          } else if (color.val() === "colored") {
            pricePerPage = 17.5;
          }
        } else if (tamano.val() === "oficio") {
          if (color.val() === "black") {
            pricePerPage = 5.3;
          } else if (color.val() === "colored") {
            pricePerPage = 20;
          }
        } else {
          if (color.val() === "black") {
            pricePerPage = 7.6;
          } else if (color.val() === "colored") {
            pricePerPage = 23;
          }
        }
      } else {
        if (tamano.val() === "carta") {
          if (color.val() === "black") {
            pricePerPage = 4.49;
          } else if (color.val() === "colored") {
            pricePerPage = 17;
          }
        } else if (tamano.val() === "oficio") {
          if (color.val() === "black") {
            pricePerPage = 4.8;
          } else if (color.val() === "colored") {
            pricePerPage = 19.5;
          }
        } else {
          if (color.val() === "black") {
            pricePerPage = 7.1;
          } else if (color.val() === "colored") {
            pricePerPage = 22.5;
          }
        }
      }
    } else if (tipoImpresion.val() === "planos") {
      if (tipoPapel.val() == "Bond") {
        if (tamano.val() === "tabloide") {
          if (color.val() === "black") {
            pricePerPage = 4;
          } else if (color.val() === "colored") {
            pricePerPage = 19;
          }
        } else if (tamano.val() === "A3") {
          if (color.val() === "black") {
            pricePerPage = 3;
          } else if (color.val() === "colored") {
            pricePerPage = 19;
          }
        } else if (tamano.val() === "60x45") {
          if (color.val() === "black") {
            pricePerPage = 28;
          } else if (color.val() === "colored") {
            pricePerPage = 49;
          }
        } else if (tamano.val() === "A1") {
          if (color.val() === "black") {
            pricePerPage = 36;
          } else if (color.val() === "colored") {
            pricePerPage = 87;
          }
        } else if (tamano.val() === " 90x60") {
          if (color.val() === "black") {
            pricePerPage = 36;
          } else if (color.val() === "colored") {
            pricePerPage = 87;
          }
        } else {
          let largo = $("#personalizado-largo").val();
          if (color.val() === "black") {
            pricePerPage = 0.6 * largo;
          } else if (color.val() === "colored") {
            pricePerPage = 1.45 * largo;
          }
        }
      } else if (tipoPapel.val() === "Albanene") {
        if (tamano.val() === "tabloide") {
          if (color.val() === "black") {
            pricePerPage = 6;
          } else if (color.val() === "colored") {
            pricePerPage = 23;
          }
        } else if (tamano.val() === "A3") {
          if (color.val() === "black") {
            pricePerPage = 6;
          } else if (color.val() === "colored") {
            pricePerPage = 23;
          }
        } else if (tamano.val() === "60x45") {
          if (color.val() === "black") {
            pricePerPage = 44;
          } else if (color.val() === "colored") {
            pricePerPage = 69;
          }
        } else if (tamano.val() === "A1") {
          if (color.val() === "black") {
            pricePerPage = 53;
          } else if (color.val() === "colored") {
            pricePerPage = 98;
          }
        } else if (tamano.val() === " 90x60") {
          if (color.val() === "black") {
            pricePerPage = 53;
          } else if (color.val() === "colored") {
            pricePerPage = 98;
          }
        } else {
          let largo = $("#personalizado-largo").val();
          if (color.val() === "black") {
            pricePerPage = 0.88 * largo;
          } else if (color.val() === "colored") {
            pricePerPage = 1.63 * largo;
          }
        }
      }
    } else {
      if (tipoPapel.val() == "Bond") {
        if (tamano.val() === "tabloide") {
          pricePerPage = 32;
        } else if (tamano.val() === "A3") {
          pricePerPage = 32;
        } else if (tamano.val() === "60x45") {
          pricePerPage = 79;
        } else if (tamano.val() === "A1") {
          pricePerPage = 159;
        } else if (tamano.val() === " 90x60") {
          pricePerPage = 159;
        } else {
          let largo = $("#personalizado-largo").val();
          pricePerPage = 2.65 * largo;
        }
      } else if (tipoPapel.val() == "Photoglossy") {
        if (tamano.val() === "tabloide") {
          pricePerPage = 49;
        } else if (tamano.val() === "A3") {
          pricePerPage = 49;
        } else if (tamano.val() === "60x45") {
          pricePerPage = 99;
        } else if (tamano.val() === "A1") {
          pricePerPage = 219;
        } else if (tamano.val() === " 90x60") {
          pricePerPage = 219;
        } else {
          let largo = $("#personalizado-largo").val();
          pricePerPage = 3.65 * largo;
        }
      } else if (tipoPapel.val() == "Albanene") {
        if (tamano.val() === "tabloide") {
          pricePerPage = 47;
        } else if (tamano.val() === "A3") {
          pricePerPage = 47;
        } else if (tamano.val() === "60x45") {
          pricePerPage = 95;
        } else if (tamano.val() === "A1") {
          pricePerPage = 209;
        } else if (tamano.val() === " 90x60") {
          pricePerPage = 209;
        } else {
          let largo = $("#personalizado-largo").val();
          pricePerPage = 3.48 * largo;
        }
      } else if (tipoPapel.val() == "Aperlado") {
        if (tamano.val() === "tabloide") {
          pricePerPage = 49;
        } else if (tamano.val() === "A3") {
          pricePerPage = 49;
        } else if (tamano.val() === "60x45") {
          pricePerPage = 99;
        } else if (tamano.val() === "A1") {
          pricePerPage = 219;
        } else if (tamano.val() === " 90x60") {
          pricePerPage = 219;
        } else {
          let largo = $("#personalizado-largo").val();
          pricePerPage = 3.65 * largo;
        }
      }
    }
  }

  if (pricePerPage === 0) {
    $("#costo-por-pagina").html(`$--.--`);
  } else {
    $("#costo-por-pagina").html(`$${pricePerPage.toFixed(2)}`);
  }
  let costoDocumento = calcCostoDocumento(
    pricePerPage,
    paginasAImprimir,
    copias,
    0
  );
  if (costoDocumento === 0) {
    $("#costo-documento").html(`$--.--`);
  } else {
    if ($("#folder").is(":checked")) {
      costoDocumento += 5;
    }
    if ($("#sobre").is(":checked")) {
      costoDocumento += 5;
    }
    $("#costo-documento").html(`$${costoDocumento.toFixed(2)}`);
    console.log($("#input-cost-documento"));
    $("#input-cost-documento").val(costoDocumento);
  }
}

function calcCostoDocumento(
  precioHoja,
  paginasAImprimir,
  copias,
  precioDocumento
) {
  if (paginasAImprimir.val() && copias.val()) {
    precioDocumento =
      precioHoja * parseInt(paginasAImprimir.val()) * parseInt(copias.val());
    return precioDocumento;
  }
  return 0;
}

// Form validation
$(document).on("click", "form button[type=submit]", function(e) {
  var isValid = $(e.target)
    .parents("form")
    .isValid();
  if (!isValid) {
    e.preventDefault(); //prevent the default action
  }
});
