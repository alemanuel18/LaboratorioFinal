<?php include ("includes/header.php"); ?>

<!-- menu -->
<nav class="nav">
    <div class="container__menu">

        <div class="menu">
            <div class="container__menu2">
                <ul>
                    <li><a href="index.php">Home</a></li>
                    <li><a href="Login\dist\Login.php">Ir a VirtuaLab</a></li>

                </ul>
            </div>
        </div>
    </div>
</nav>

<!-- Carousel -->
<div class="slide-top">
	<div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
		<div class="carousel-indicators">
			<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
			<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
			<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
		  </div>
		<div class="carousel-inner">
		  <div class="carousel-item active">
			<img src="assets/images/sudanlugol.png" class="d-block w-100" height="420px" width="1109px">
			<div class="carousel-caption d-none d-md-block">
				<h5>Sudán / Lugol</h5>
				<p>Detección de lipidos y almidón</p>
			  </div>
		  </div>
		  <div class="carousel-item">
			<img src="assets/images/biuret.jpg" class="d-block w-100" height="420px" width="1109px">
			<div class="carousel-caption d-none d-md-block">
			<h5>Biuret</h5>
			<p>Detección de proteínas</p>
			  </div>
		  </div>
		  <div class="carousel-item">
			<img src="assets/images/benedict.jpg" class="d-block w-100" height="420px" width="1109px">
			<div class="carousel-caption d-none d-md-block">
			<h5>Benedict</h5>
			<p>Detección de glucosa</p>
			  </div>
		  </div>
		</div>

		<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
		  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
		  <span class="visually-hidden">Previous</span>
		</button>
		<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
		  <span class="carousel-control-next-icon" aria-hidden="true"></span>
		  <span class="visually-hidden">Next</span>
		</button>
	  </div>
	</div>
<!-- body -->





<!-- prueba -->

<div class="parent">
		<div class="div1"> </div>
		<div class="slide-bottom1"><h1 class="h1">Macromoléculas</h1></div>	
		<div class="div3"> </div>
		<div class="div4"> </div>
		<div class="div5"> 
			<img style="border-radius: 10px;" src="assets/images/macro.jpg" class="card-img-top" height="200px" width="100px">
		</div>
		<div class="div6"> 
			<img style="border-radius: 10px;" src="assets/images/pruebas.jpeg" class="card-img-top" height="200px" width="100px">
		</div>
		<div class="div7"> </div>
		<div class="div8"> </div>
		<div class="div9" onclick="window.location.href = 'Login/dist/Login.php'"> 
			<div class="card">
				<div class="card-body">
				  <h5 class="card-title">Descripción.</h5>
				  <p class="card-text">Creada coúmmente atravez de la polimerización de sus unidades más pequeñas. Por lo general se componen por miles o más átomos, pueden ser tanto orgánicas como inorgánicas.</p>
				</div>
			  </div>
		</div>
		<div class="div10" onclick="window.location.href = 'Login/dist/Login.php'"> 
			<div class="card">
				<div class="card-body">
				  <h5 class="card-title">Pruebas</h5>
				  <p class="card-text">En el área de alimentos y nutrición se pueden realizar pruebas para conocer el valor nutricional y contenido en grasas, proteínas o carbohidratos de los alimentos.</p>
				</div>
			  </div>
		</div>
		<div class="div11"> </div>
	</div>


<?php include ("includes/footer.php") ?>
