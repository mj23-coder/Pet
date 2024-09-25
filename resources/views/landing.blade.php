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
            <div class="picContainer">
                <div id="info"></div>
                    <div id="image1" class="img">
                     <img src="{{ asset('images/kkk.jpg') }}" />
                    </div>
                    <div id="image2" class="img">
                     <img src="{{ asset('images/bm.jpg') }}" />
                    </div>
                    <div id="image3" class="img">
                     <img src="{{ asset('images/emi.jpg') }}" />
                    </div>
                    <div id="image4" class="img">
                     <img src="{{ asset('images/ginger.jpg') }}" />
                    </div>
                    <div id="image5" class="img">
                     <img src="{{ asset('images/maddie.jpg') }}" />
                    </div>
                    <div id="image6" class="img">
                     <img src="{{ asset('images/mathea.jpg') }}" />
                    </div>
                    <div id="image7" class="img">
                     <img src="{{ asset('images/mskape.jpg') }}" />
                    </div>
                    <div id="image8" class="img">
                     <img src="{{ asset('images/patch.jpg') }}" />
                    </div>
                    <div id="image9" class="img">
                     <img src="{{ asset('images/waxxu.jpg') }}" />
                    </div>
                    <div class="left" onclick="left()"></div>
                    <div class="right" onclick="right()"></div>
                    <div class="dots">
                    <div class="dot a1"></div>
                    <div class="dot a2"></div>
                    <div class="dot a3"></div>
                    <div class="dot a4"></div>
                    <div class="dot a5"></div>
                    <div class="dot a6"></div>
                    <div class="dot a7"></div>
                    <div class="dot a8"></div>
                    <div class="dot a9"></div>
                </div>
            </div>
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
