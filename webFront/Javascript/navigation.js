function myFunction(){
    document.getElementById("nav-bar").innerHTML = `
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
  <a href="index.html"><img src="../img/logo_200x200.png" style = "width: 50%; height: auto"></a>
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
<!--        <li class="nav-item">-->
<!--          <a class="nav-link active" aria-current="page" href="#">Home</a>-->
<!--        </li>-->
        <li class="nav-item">
          <a class="nav-link" href="register.html">Registrierung</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="login.html">Login</a>
        </li>
         <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="produkte.html">Produkte</a>
        </li>
        
<!--        <li class="nav-item">-->
<!--          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>-->
<!--        </li>-->
      </ul>
    </div>
  </div>
</nav>
 `;
}

myFunction();