<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Laravel</title>
    </head>
    <body >
        <link rel="stylesheet" href="{{ asset('css/landing.css') }}">
        <script src="{{ asset('js/landing.js') }}" defer></script>
        <section class="nav">
            <div id="marker"></div>
            <a href="#home" > <img class="nav-pic" src="{{ asset('images/logo.png') }}" alt="Logo"> </a>
            <div class="hamburger" onclick="toggleMenu()">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul class="nav-list">
                <li><a href="#about">About Us</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#loccon">Location/Contact</a></li>
                <li><a href="#book" class="bookB">Book Now</a></li>
            </ul>
        </section>
        <section class="section home" id="home">
            <section id="slideshow">
                <div class="entire-content">
                    <div class="content-carrousel">
                        <figure class="shadow"><img src="{{ asset('images/waxxu.jpg') }}"></figure>
                        <figure class="shadow"><img src="{{ asset('images/patch.jpg') }}"></figure>
                        <figure class="shadow"><img src="{{ asset('images/bm.jpg') }}"></figure>
                        <figure class="shadow"><img src="{{ asset('images/emi.jpg') }}"></figure>
                        <figure class="shadow"><img src="{{ asset('images/ginger.jpg') }}"></figure>
                        <figure class="shadow"><img src="{{ asset('images/kkk.jpg') }}"></figure>
                        <figure class="shadow"><img src="{{ asset('images/maddie.jpg') }}"></figure>
                        <figure class="shadow"><img src="{{ asset('images/mskape.jpg') }}"></figure>
                        <figure class="shadow"><img src="{{ asset('images/mathea.jpg') }}"></figure>
                    </div>
                </div>
            </section>
        </section>
        </section>
        <section class="section about" id="about">
        </section>
        <section class="section services" id="services">
        </section>
        <section class="section loccon" id="loccon">
        </section>
        <section class="section book" id="book">
        </section>
    </body>
    <footer>
        <p>  HELLO WORLD AKO NGA PALA YUNG SINAING MO -REYMART TO</p>
    </footer>
</html>
