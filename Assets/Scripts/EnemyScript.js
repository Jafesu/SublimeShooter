var EnemyHealth : int = 10;

function TakeHealth(DamageAmount : int){
	EnemyHealth -= DamageAmount;
}

function Update(){
	if (EnemyHealth <= 0){
		Destroy(gameObject);
	}
}