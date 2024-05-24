<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<title>VirtuaLab</title>
	<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css'>
	<link rel='stylesheet' href='https://unicons.iconscout.com/release/v2.1.9/css/unicons.css'>
	<link rel="stylesheet" href="./style.css">

</head>

<body>
	<!-- partial:index.partial.html -->
	<a href=" ..\..\index.php" class="logo" target="_blank">
		<img src="..\..\assets\images\laboratorio.png" width="100" height="50">
	</a>

	<div class="section">
		<div class="container">
			<div class="row full-height justify-content-center">
				<div class="col-12 text-center align-self-center py-5">
					<div class="section pb-5 pt-5 pt-sm-2 text-center">
						<h6 class="mb-0 pb-3"><span>Iniciar sesión </span><span>Registrarse</span></h6>
						<input class="checkbox" type="checkbox" id="reg-log" name="reg-log" />
						<label for="reg-log"></label>
						<div class="card-3d-wrap mx-auto">
							<div class="card-3d-wrapper">
								<div class="card-front">
									<div class="center-wrap">
										<div class="section text-center">

											<h4 class="mb-4 pb-3">Iniciar sesión</h4>
											<?php
											session_start();
											if (isset($_SESSION['alert_message']) && isset($_SESSION['alert_type'])) {
												$alert_message = $_SESSION['alert_message'];
												$alert_type = $_SESSION['alert_type'];
												echo '<div class="alert" style="color: white; background-color: ' . ($alert_type === 'danger' ? '#f44336' : '#4CAF50') . '">';
												echo $alert_message;
												echo '</div>';
												unset($_SESSION['alert_message']);
												unset($_SESSION['alert_type']);
											}
											?>
											<form action="connections/iniciarsesion.php" method="post">
												<div class="form-group">
													<input type="text" id="email" name="email" class="form-style"
														placeholder="Tu correo" id="logemail" autocomplete="off">
													<i class="input-icon uil uil-at"></i>
												</div>
												<div class="form-group mt-2">
													<input type="password" id="pass" name="pass" class="form-style"
														placeholder="Tu contraseña" id="logpass" autocomplete="off">
													<i class="input-icon uil uil-lock-alt"></i>
												</div>
												<input type="submit" value="Ingresar" id="ingresar" name="ingresar"
													class="btn mt-4">
											</form>
										</div>
									</div>
								</div>
								<div class="card-back">
									<div class="center-wrap">
										<div class="section text-center">
											<h4 class="mb-4 pb-3">Registrarse</h4>
											<?php
											
											if (isset($_SESSION['alert_message1']) && isset($_SESSION['alert_type1'])) {
												$alert_message = $_SESSION['alert_message1'];
												$alert_type = $_SESSION['alert_type1'];
												echo '<div class="alert" style="color: white; background-color: ' . ($alert_type === 'danger' ? '#f44336' : '#4CAF50') . '">';
												echo $alert_message;
												echo '</div>';
												unset($_SESSION['alert_message1']);
												unset($_SESSION['alert_type1']);
											}
											?>
											<form action="connections/registrarse.php" method="post">
												<div class="form-group mt-2">
													<input type="email" id="email1" name="email1" class="form-style"
														placeholder="Tu correo" id="logemail" autocomplete="off">
													<i class="input-icon uil uil-at"></i>
												</div>
												<div class="form-group mt-2">
													<input type="password" id="pass1" name="pass1" class="form-style"
														placeholder="Tu contraseña" id="logpass" autocomplete="off">
													<i class="input-icon uil uil-lock-alt"></i>
												</div>
												<input type="submit" value="Registrarse" id="registrar" name="registrar"
													class="btn mt-4">
											</form>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- partial -->
	<script src="./script.js"></script>

</body>

</html>