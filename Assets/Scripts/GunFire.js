function Update () {
	if (GlobalAmmo.CurrentAmmo > 0){
		if(Input.GetButtonDown("Fire1")) {
			var gunsound : AudioSource = GetComponent.<AudioSource>();
			gunsound.Play();
			GetComponent.<Animation>().Play("GunShot");
			GlobalAmmo.CurrentAmmo -= 1;
		}
	}
}