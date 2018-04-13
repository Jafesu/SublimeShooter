var AmmoCapacity : int = 30;
function OnTriggerEnter(col : Collider){
	if (AmmoCapacity > 0){
		GlobalAmmo.CurrentAmmo += 10;
		AmmoCapacity -= 10;
		if (AmmoCapacity <= 0){
			this.gameObject.SetActive(false);
		}

	}else{
		this.gameObject.SetActive(false);
	} 
}