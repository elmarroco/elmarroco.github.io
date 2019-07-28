<?php
# Recibiendo datos post:
$tipoDeImpresion = $_POST["tipoDeImpresion"];
$tipoPapel = $_POST["tipoPapel"];
$tamano = $_POST["tamano"];
if ($tipoDeImpresion != "ploteo") {
    $color = $_POST["color"];
}
$linkArchivo = $_POST["wt_embed_output"];
$paginasAImprimir = $_POST["paginasAImprimir"];
$copias = $_POST["copias"];
$additional = $_POST["additional"];
if ($tipoDeImpresion == "estandar") {
    $folder = $_POST["folder"];
    $sobre = $_POST["sobre"];
}
$firstName = $_POST["firstName"];
$email = $_POST["email"];
$cellphone = $_POST["cellphone"];
$address = $_POST["address"];
$costo = $_POST["costo"];
if ($tamano == "personalizado") {
    $personalizadoLargo = $_POST["personalizado-largo"];
    $personalizadoAncho = $_POST["personalizado-ancho"];
}
$to = "josemasri222@gmail.com";
$subject = "Impresion" . $tipoDeImpresion;
$message = "Tipo de Impresion: " . $tipoDeImpresion . "\nTipo De papel: " . $tipoPapel . "\nTamaño: " . $tamano;
if ($tamano == "personalizado") {
    $message .= " " . $personalizadoLargo . " x " . $personalizadoAncho;
}
if ($tipoDeImpresion != "ploteo") {
    $message .= "\nColor: " . $color;
}
$message .= "\nLink archivo: " . $linkArchivo . "\nPaginas a imprimir: " . $paginasAImprimir . "\nCopias: " . $copias . "\nInstrucciones Adicional: " . $additional;
if($tipoDeImpresion == "estandar") {
    $message .= "\nFolder: ";
    if($folder == "on") {
        $message .= "Si";
    } else {
        $message .= "No";
    }
    $message .= "\Sobre: ";
    if($sobre == "on") {
        $message .= "Si";
    } else {
        $message .= "No";
    }
}
$message .= "<h2>Información Personal</h2> \n Nombre: $firstName \n email: $email \n Telefono: $cellphone \n Dirección: $address";

mail($to, $subject, $message);
// require __DIR__  . '/vendor/autoload.php';
// MercadoPago\SDK::setClientId("8494788947910602");
// MercadoPago\SDK::setClientSecret("4NaynN9pyPgfkfo9zb2BeCx8vquCdcvB");
// # Create a preference object
// $preference = new MercadoPago\Preference();
// # Create an item object
// $item = new MercadoPago\Item();
// $item->id = "1234";
// $item->title = "Imprsión"."";
// $item->quantity = 4;
// $item->currency_id = "MXN";
// $item->unit_price = 16.89;
// # Create a payer object
// $payer = new MercadoPago\Payer();
// $payer->email = "hazel_crona@yahoo.com";
// # Setting preference properties
// $preference->items = array($item);
// $preference->payer = $payer;
// # Save and posting preference
// $preference->save();
?>


<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="description" content="">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <!-- The above 4 meta tags *must* come first in the head; any other head content must come *after* these tags -->

    <!-- Title -->
    <title>PrinToGo - Imprime fácil y rápido</title>

    <!-- Favicon -->
    <link rel="icon" href="img/core-img/favicon.ico">

    <!-- Core Stylesheet -->
    <link href="style.css" rel="stylesheet">

    <!-- Responsive CSS -->
    <link href="css/responsive.css" rel="stylesheet">

    <!-- Font awesome -->
    <link rel="stylesheet" href="css/font-awesome.min.css">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.css">

</head>

<body>
    <!-- Preloader Start -->
    <div id="preloader">
        <div class="colorlib-load"></div>
    </div>
    <a href="https://api.whatsapp.com/send?phone=+5215530310432&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20PrinToGo." class="float" target="_blank">
        <i class="fab fa-whatsapp my-float"></i>
    </a>
    <!-- ***** Header Area Start ***** -->
    <header class="header_area animated">
        <div class="container-fluid">
            <div class="row align-items-center">
                <!-- Menu Area Start -->
                <div class="col-12 col-lg-10">
                    <div class="menu_area">
                        <nav class="navbar navbar-expand-lg navbar-light">
                            <!-- Logo -->
                            <a class="navbar-brand" href="#">PrinToGo.</a>
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ca-navbar" aria-controls="ca-navbar" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                            <!-- Menu Area -->
                            <div class="collapse navbar-collapse" id="ca-navbar">
                                <ul class="navbar-nav ml-auto" id="nav">
                                    <li class="nav-item active"><a class="nav-link" href="/">Imprimir</a></li>
                                    <li class="nav-item"><a class="nav-link" href="#about">About</a></li>
                                    <li class="nav-item"><a class="nav-link" href="#features">Features</a></li>
                                    <li class="nav-item"><a class="nav-link" href="#screenshot">Screenshot</a></li>
                                    <li class="nav-item"><a class="nav-link" href="#pricing">Pricing</a></li>
                                    <li class="nav-item"><a class="nav-link" href="#testimonials">Testimonials</a></li>
                                    <li class="nav-item"><a class="nav-link" href="#team">Team</a></li>
                                    <li class="nav-item"><a class="nav-link" href="#contact">Contact</a></li>
                                </ul>
                                <div class="sing-up-button d-lg-none">
                                    <a href="#">Sign Up Free</a>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
                <!-- Signup btn -->
                <div class="col-12 col-lg-2">
                    <div class="sing-up-button d-none d-lg-block">
                        <a href="#">Sign Up Free</a>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <!-- ***** Header Area End ***** -->

    <!-- ***** Wellcome Area Start ***** -->
    <section class="wellcome_area clearfix" id="home">
        <div class="container h-100">
            <div class="row h-100 align-items-center">
                <div class="col-12 col-md">
                    <div class="get-start-area mt-5">
                        <!-- Form Start -->
                        <!-- 









                         -->

                    </div>
                </div>
            </div>
        </div>
        <!-- Welcome thumb -->
        <!-- <div class="welcome-thumb wow fadeInDown" data-wow-delay="0.5s">
            <img src="img/bg-img/welcome-img.png" alt="">
        </div> -->
    </section>
    <!-- ***** Wellcome Area End ***** -->



    <!-- ***** Footer Area Start ***** -->
    <footer class="footer-social-icon text-center section_padding_70 clearfix">
        <!-- footer logo -->
        <div class="footer-text">
            <h2>PrinToGo.</h2>
        </div>
        <!-- social icon-->
        <div class="footer-social-icon">
            <a href="#"><i class="fab fa-facebook" aria-hidden="true"></i></a>
            <a href="#"><i class="active fab fa-twitter" aria-hidden="true"></i></a>
            <a href="#"> <i class="fab fa-instagram" aria-hidden="true"></i></a>
            <a href="#"><i class="fab fa-google-plus" aria-hidden="true"></i></a>
        </div>
        <div class="footer-menu">
            <nav>
                <ul>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Terms &amp; Conditions</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </div>
        <!-- Foooter Text-->
        <div class="copyright-text">
            <p>Copyright ©2019 PrintoGo.</p>
        </div>
    </footer>
    <!-- ***** Footer Area Start ***** -->

    <!-- Jquery-2.2.4 JS -->
    <script src="js/jquery-2.2.4.min.js"></script>
    <!-- Popper js -->
    <script src="js/popper.min.js"></script>
    <!-- Bootstrap-4 Beta JS -->
    <script src="js/bootstrap.min.js"></script>
    <!-- All Plugins JS -->
    <script src="js/plugins.js"></script>
    <!-- Slick Slider Js-->
    <script src="js/slick.min.js"></script>
    <!-- Footer Reveal JS -->
    <script src="js/footer-reveal.min.js"></script>
    <!-- Active JS -->
    <script src="js/active.js"></script>
    <!-- My JS File-->
    <script src="js/app.js"></script>
</body>

</html>